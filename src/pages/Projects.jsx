import "./Projects.css";
const projects = [
  {
    id: 1,
    title: "Residential Plumbing Installation",
    description: "Complete plumbing installation for a residential property.",
    image: "/project-1.jpg",
  },

  {
    id: 2,
    title: "Bathroom Plumbing Renovation",
    description: "Plumbing work completed during a bathroom renovation.",
    image: "/project-2.jpg",
  },

  {
    id: 3,
    title: "Water System Repair",
    description:
      "Repair and improvement of an existing residential water system.",
    image: "/project-3.jpg",
  },
];

function Projects() {
  return (
    <main className="projects">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore some of the plumbing work completed by our team.</p>
      </header>
      <section className="project-list">
        {projects.map((project) => {
          return <article key={project.id} className="project-card">
            <img src={project.image} alt={project.title}/>
            <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </div>
            </article>;
        })}
      </section>
    </main>
  );
}
export default Projects;
