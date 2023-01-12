import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="header">
            <h2 id='name'>Jenna Howieson </h2>
            <ul className="nav">
                <Link to="/portfolio"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/timeline"><li>My Journey</li></Link>
                <Link to="/contact"><li>Contact Me</li></Link>
                <a href="TechnicalCV.pdf" target="_blank" rel="noopener noreferrer"><li>Technical CV</li></a>
            </ul>
        </div>
    );
}
export default NavBar;