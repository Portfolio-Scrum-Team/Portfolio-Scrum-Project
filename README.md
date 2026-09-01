# Team Portfolio Website (React + Scrum)

This project is a team Scrum portfolio website built with React. Jira is used for sprint planning and issue tracking, and GitHub is used for feature-branch development, pull requests, and code review.

## Page Scope

- Home
- About
- Projects
- Profile

## Team Ownership (Example)

- Member A: Home page owner
- Member B: About page owner
- Member C: Projects page owner
- Member D: Profile page owner

Replace placeholders with your actual team members.

## Jira Board Setup

- Project type: Scrum
- Suggested project name: Portfolio Scrum Project
- Board columns: To Do, In Progress, Review, Reject, Done

## Jira Backlog Mapping (Project 10)

- PORT-1: Initialize Vite React app
- PORT-2: Setup React Router and base layout
- PORT-3: Create Home page component
- PORT-4: Create About page component
- PORT-5: Create Projects page component
- PORT-6: Create Profile page component
- PORT-7: Resolve navigation merge conflict simulation
- PORT-8: Revert unwanted commit safely on main
- PORT-9: Rebase feature branch onto updated main

## Sprint Rules

1. Move a ticket to In Progress before starting code.
2. Move a ticket to Review when opening a pull request.
3. Move a ticket to Done only after PR merge.
4. Include the Jira key in every commit message.

## GitHub Collaboration Rules

- Branch naming: feature/PORT-<id>-short-description
- Commit format: PORT-<id>: short summary
- Open one PR per Jira issue
- Require at least one reviewer approval before merge to main
- Do not merge any PR until Nicole gives explicit instruction to merge

## Suggested Branch Plan

- feature/PORT-3-home
- feature/PORT-4-about
- feature/PORT-5-projects
- feature/PORT-6-profile

## Git Commands Cheat Sheet

```bash
git checkout main
git pull origin main
git checkout -b feature/PORT-3-home
git add .
git commit -m "PORT-3: update home page"
git push origin feature/PORT-3-home
```

```bash
git revert <commit_sha>
```

```bash
git checkout feature/PORT-5-projects
git rebase main
```

Note: avoid using git reset --hard on shared branches.

## Run the Project

```bash
npm install
npm run dev
```

## Build the Project

```bash
npm run build
```
