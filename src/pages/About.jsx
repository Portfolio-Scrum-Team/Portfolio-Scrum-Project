import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    title: "Reliability",
    text: "We show up prepared and keep customers informed about the work.",
  },
  {
    title: "Quality",
    text: "We focus on careful plumbing work and practical solutions.",
  },
  {
    title: "Professionalism",
    text: "We treat each home, biashara, and work site with respect.",
  },
  {
    title: "Integrity",
    text: "We explain the problem clearly before recommending a solution.",
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-heading">
        <p className="about-label">Maji Bora Plumbing</p>
        <h1>About Our Company</h1>
        <p>Professional plumbing services you can depend on.</p>
      </section>

      <section className="who-section">
        <figure className="about-photo">
          <img
            src="/plumbing-team-kenya.jpg"
            alt="A plumbing worker installing water pipes at a Kenyan building site"
          />
          <figcaption>
            Photo: Mungai Kiroga /{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Installing_water_pipes.jpg"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-SA 4.0
            </a>
          </figcaption>
        </figure>

        <div className="who-content">
          <p className="about-label">Our story</p>
          <h2>Who We Are</h2>
          <p>
            We are a Nairobi-based plumbing team focused on providing reliable
            and quality plumbing solutions for homes and businesses.
          </p>
          <p>
            From leaking pipes to new water-system installations, our approach
            is simple: understand the problem, explain the work clearly, and
            leave the space tidy when the job is done.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <p className="about-label">What guides us</p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide dependable plumbing services while
          delivering quality workmanship and professional customer service.
        </p>
      </section>

      <section className="values-section">
        <p className="about-label">How we work</p>
        <h2>Our Values</h2>

        <div className="values-list">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="choose-section">
        <div>
          <p className="about-label">Local and straightforward</p>
          <h2>Why Choose Us?</h2>
          <p>
            We focus on reliable service, quality workmanship, and professional
            solutions for customers across Nairobi.
          </p>
        </div>

        <Link to="/contact" className="about-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default About;
