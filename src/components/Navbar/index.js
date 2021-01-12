import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/" >DSaunders</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
      <span class="navbar-toggler-icon"></span>
    </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                        </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="li-ic" href="https://www.linkedin.com/in/dina-saunders" target="_blank" rel="noreferrer">
                            <i class="fab fa-linkedin fa-lg mr-md-5 mr-3"> </i>
                        </a></li>

                        <li className="nav-item"><a className="git-ic" href="https://github.com/DS1826" target="_blank" rel="noreferrer">
                            <i class="fab fa-github fa-lg mr-md-5 mr-3"></i></a></li>

                        <li className="nav-item"><a class="email-ic" href="mailto: dina.m.1826@gmail.com">
                            <i class="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-lg"></i></a></li>

                        <li className="nav-item"><a class="phone-ic" href="tel:+14076978530"><i
                            class="fas fa-phone fa-lg white text mr-md-5 mr-3 fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;