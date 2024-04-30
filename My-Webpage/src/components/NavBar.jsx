// components/NavBar.js
import { NavLink } from 'react-router-dom';
import "../style/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/my-story" activeClassName="active-link">My Story</NavLink></li>
                <li><NavLink to="/work-experience" activeClassName="active-link">Work Experience</NavLink></li>
                <li><NavLink to="/publications" activeClassName="active-link">Publications</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active-link">Contact Information</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar