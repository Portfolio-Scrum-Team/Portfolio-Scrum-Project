const members = [
    {
        name: 'Nicole Kuria',
        role: 'Profile Page Owner (PORT-6)',
        focus: 'Build and polish profile page UI and sprint-ready content.',
    },
    {
        name: 'Member A',
        role: 'Home Page Owner (PORT-3)',
        focus: 'Lead landing page messaging and intro sections.',
    },
    {
        name: 'Member B',
        role: 'About Page Owner (PORT-4)',
        focus: 'Document team mission and collaboration process.',
    },
    {
        name: 'Member C',
        role: 'Projects Page Owner (PORT-5)',
        focus: 'Showcase project cards with outcomes and technologies.',
    },
]

const sprintChecklist = [
    'Ticket moved to In Progress before coding',
    'Feature branch created from latest main',
    'UI tested on desktop and mobile viewports',
    'Pull request opened with PORT key in title',
]

function Profile() {
    return (
        <section className="profile-page">
            <h2>Profile</h2>
            <p>
                This page presents team ownership for the portfolio and tracks
                PORT-6 delivery expectations for Scrum review.
            </p>

            <div className="card-grid">
                {members.map((member) => (
                    <article className="card" key={member.name}>
                        <h3>{member.name}</h3>
                        <p>
                            <strong>{member.role}</strong>
                        </p>
                        <p>{member.focus}</p>
                    </article>
                ))}
            </div>

            <article className="card sprint-card">
                <h3>PORT-6 Sprint Checklist</h3>
                <ul className="checklist">
                    {sprintChecklist.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default Profile
