import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import './App.css'

function App() {
    return (
        <div className="site-shell">
            <header className="site-header">
                <h1>Team Portfolio</h1>
                <p>Scrum-based React collaboration project</p>
            </header>

            <nav className="top-nav" aria-label="Main navigation">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
