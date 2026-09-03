import fs from 'node:fs';
import path from 'node:path';

const envPath = path.resolve(process.cwd(), '.env');
const envFile = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const env = Object.fromEntries(
    envFile.split(/\r?\n/)
        .filter(Boolean)
        .filter((line) => !line.startsWith('#'))
        .map((line) => {
            const equalsIndex = line.indexOf('=');
            if (equalsIndex === -1) return null;
            const key = line.slice(0, equalsIndex).trim();
            const value = line.slice(equalsIndex + 1).trim();
            return [key, value];
        })
        .filter(Boolean)
);

const baseUrl = process.env.JIRA_BASE_URL || env.JIRA_BASE_URL;
const email = process.env.JIRA_EMAIL || env.JIRA_EMAIL;
const apiToken = process.env.JIRA_API_TOKEN || env.JIRA_API_TOKEN;
const projectKey = process.env.JIRA_PROJECT_KEY || env.JIRA_PROJECT_KEY || 'PORT';
const issueKey = process.env.JIRA_ISSUE_KEY || env.JIRA_ISSUE_KEY || `${projectKey}-6`;
const targetStatus = process.env.JIRA_TARGET_STATUS || env.JIRA_TARGET_STATUS || 'In Progress';

if (!baseUrl || !email || !apiToken) {
    console.error('Missing Jira configuration. Add values to .env or environment variables.');
    process.exit(1);
}

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${Buffer.from(`${email}:${apiToken}`).toString('base64')}`,
    Accept: 'application/json',
};

async function fetchJson(url) {
    const response = await fetch(url, { headers });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Request failed for ${url}: ${response.status} ${response.statusText} - ${text}`);
    }
    return response.json();
}

async function main() {
    const issueUrl = `${baseUrl.replace(/\/$/, '')}/rest/api/3/issue/${issueKey}`;
    const issue = await fetchJson(issueUrl);
    const transitionsUrl = `${baseUrl.replace(/\/$/, '')}/rest/api/3/issue/${issueKey}/transitions`;
    const transitions = await fetchJson(transitionsUrl);

    const match = transitions.transitions.find((transition) => {
        const name = (transition.name || '').toLowerCase();
        return name === targetStatus.toLowerCase();
    });

    if (!match) {
        console.error(`Status "${targetStatus}" not found for ${issueKey}. Available statuses: ${transitions.transitions.map((t) => t.name).join(', ')}`);
        process.exit(1);
    }

    const body = {
        transition: { id: match.id },
    };

    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/rest/api/3/issue/${issueKey}/transitions`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to update status for ${issueKey}: ${response.status} ${response.statusText} - ${text}`);
    }

    console.log(`SUCCESS: ${issueKey} moved to ${targetStatus}`);
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
