
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Talal<span> Nadeem</span></div>
            <ul>
                <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
