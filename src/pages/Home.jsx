import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <img
          src="/plumbers.jpg"
          alt="Professional plumbers working"
          className="home-hero-image"
        />

        <div className="home-hero-overlay">
          <h1>Reliable Plumbing Services</h1>
          <p>Quality plumbing solutions for homes and businesses.</p>
          <a href="/contact" className="home-button">
            Contact Us
          </a>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-list">
          <div className="service-card">
            <h3>Pipe Repairs</h3>
            <p>Professional repair of damaged and leaking pipes.</p>
          </div>

          <div className="service-card">
            <h3>Plumbing Installation</h3>
            <p>
              Reliable plumbing installation for homes and businesses.
            </p>
          </div>

          <div className="service-card">
            <h3>Maintenance</h3>
            <p>
              Plumbing maintenance to help prevent costly problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
