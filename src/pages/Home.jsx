function Home() {
    return (
        <section>
            <h2>Home</h2>
            <p>
                Welcome to our collaborative portfolio website. This page introduces the
                team and highlights sprint goals.
            </p>

            <div className="card-grid">
                <article className="card">
                    <h3>Current Sprint Goal</h3>
                    <p>Deliver fully routed pages with shared styling and responsive layout.</p>
                </article>
                <article className="card">
                    <h3>Working Process</h3>
                    <p>Tasks are tracked in Jira and implemented through GitHub pull requests.</p>
                </article>
            </div>
        </section>
    )
}

export default Home
