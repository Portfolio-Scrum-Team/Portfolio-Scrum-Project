import { Link, NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="site-name">
          Maji Bora <span>Plumbing</span>
        </Link>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-name">Maji Bora Plumbing</p>
          <p>Practical plumbing support for Nairobi homes and businesses.</p>
        </div>
        <p>© 2026 Maji Bora Plumbing · Nairobi, Kenya</p>
      </footer>
    </div>
  );
}

export default App;
