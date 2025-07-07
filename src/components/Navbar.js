import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Talal<span> Nadeem</span></div>
            <div className="nav-links">
                <Link to="home" smooth={true} duration={500}>// home</Link>
                <Link to="about" smooth={true} duration={500}>// about</Link>
                <Link to="projects" smooth={true} duration={500}>// projects</Link>
                <Link to="contact" smooth={true} duration={500}>// contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
