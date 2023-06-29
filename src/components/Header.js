import React from 'react';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a href="#" className="navbar-brand">Portfolio</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span id="menu-icon" className="bx bx-menu"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
