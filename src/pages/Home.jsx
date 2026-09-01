import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <img
          src="/plumbers-kenya.jpg"
          alt="A plumbing worker installing water pipes at a site in Kenya"
          className="home-hero-image"
        />

        <div className="home-hero-shade"></div>

        <div className="home-hero-content">
          <p className="home-location">Nairobi, Kenya</p>
          <h1>Reliable Plumbing Services</h1>
          <p className="home-intro">
            Quality plumbing solutions for homes and businesses across Nairobi.
          </p>
          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>
        </div>

        <a
          className="photo-credit"
          href="https://commons.wikimedia.org/wiki/File:Installing_water_pipes_2.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Photo: Mungai Kiroga / CC BY-SA 4.0
        </a>
      </section>

      <section className="home-services">
        <p className="section-label">What we do</p>
        <h2>Our Services</h2>
        <p className="section-intro">
          Straightforward plumbing help for everyday water and drainage needs.
        </p>

        <div className="service-list">
          <article className="service-card">
            <span>01</span>
            <h3>Pipe Repairs</h3>
            <p>Repair support for leaking, damaged, and burst water pipes.</p>
          </article>

          <article className="service-card">
            <span>02</span>
            <h3>Plumbing Installation</h3>
            <p>
              Water tank, kitchen, bathroom, and new-building pipe installation.
            </p>
          </article>

          <article className="service-card">
            <span>03</span>
            <h3>Maintenance</h3>
            <p>
              Routine plumbing checks to help prevent leaks and water damage.
            </p>
          </article>
        </div>
      </section>

      <section className="local-promise" aria-label="Our service approach">
        <div>
          <strong>Nairobi based</strong>
          <span>Local service area</span>
        </div>
        <div>
          <strong>Homes &amp; biashara</strong>
          <span>Residential and business work</span>
        </div>
        <div>
          <strong>Clear updates</strong>
          <span>Simple communication</span>
        </div>
        <div>
          <strong>Careful work</strong>
          <span>Respect for your property</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
