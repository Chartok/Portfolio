import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a href="#home" className="navbar-brand">Portfolio</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span id="menu-icon" className="bx bx-menu"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Navigation
                            activeSection={activeSection}
                            onSectionChange={handleSectionChange}
                        />
                    </ul>
                </div>
            </nav>
        </header>
    );
};

