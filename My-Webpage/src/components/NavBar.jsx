// components/NavBar.js
import { NavLink } from 'react-router-dom';
import "../style/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/my-story/" activeClassName="active">My Story</NavLink></li>
                <li><NavLink to="/work-experience/" activeClassName="active">Work Experience</NavLink></li>
                <li><NavLink to="/publications/" activeClassName="active">Publications</NavLink></li>
                <li><NavLink to="/contact/" activeClassName="active">Contact Information</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
