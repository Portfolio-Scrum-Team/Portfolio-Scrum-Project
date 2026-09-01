import "./About.css";

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Our Company</h1>
        <p>Professional plumbing services you can depend on.</p>
      </section>

      <section className="about-section who-we-are">
        <div className="about-image">
          <img src="/plumbing-team.jpg" alt="Professional plumbing team" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are a professional plumbing company providing reliable plumbing
            solutions for homes and businesses. We focus on quality
            workmanship, professional service, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="about-section mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide dependable plumbing services while
          delivering quality workmanship and excellent customer service.
        </p>
      </section>

      <section className="about-section values-section">
        <h2>Our Values</h2>

        <div className="values-list">
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Customers can depend on our service.</p>
          </div>

          <div className="value-card">
            <h3>Quality</h3>
            <p>We take pride in quality workmanship.</p>
          </div>

          <div className="value-card">
            <h3>Professionalism</h3>
            <p>We approach every job professionally.</p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>We communicate honestly with our customers.</p>
          </div>
        </div>
      </section>

      <section className="about-section choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          We focus on reliable service, quality workmanship, professional
          communication, and customer satisfaction.
        </p>
      </section>

      <section className="about-cta">
        <h2>Need a Plumber?</h2>
        <p>Get in touch with our team today.</p>
        <a href="/contact">Contact Us</a>
      </section>
    </div>
  );
}

export default About;
