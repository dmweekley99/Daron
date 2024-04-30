// components/NavBar.js
import { NavLink } from 'react-router-dom';
import "../style/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink to="/Daron/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/my-story" className={({ isActive }) => isActive ? "active" : ""}>My Story</NavLink></li>
                <li><NavLink to="/work-experience" className={({ isActive }) => isActive ? "active" : ""}>Work Experience</NavLink></li>
                <li><NavLink to="/publications" className={({ isActive }) => isActive ? "active" : ""}>Publications</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Information</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar