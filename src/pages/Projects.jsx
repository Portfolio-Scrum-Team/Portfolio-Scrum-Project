const sampleProjects = [
    {
        title: 'Portfolio Platform',
        summary: 'Multi-page React app with role-based ownership and team workflow.',
    },
    {
        title: 'Sprint Dashboard',
        summary: 'Jira board setup with backlog grooming and sprint tracking.',
    },
    {
        title: 'GitHub Flow',
        summary: 'Feature branches, pull requests, and review checklist.',
    },
]

function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <div className="card-grid">
                {sampleProjects.map((project) => (
                    <article className="card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
