import React from 'react';

export default function Navigation({ activeSection, onSectionChange }) {
    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {sections.map((section) => (
                <li className="nav-item" key={section.id}>
                    <a
                        href={`#${section.id}`}
                        className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => onSectionChange(section.id)}
                    >
                        {section.label}
                    </a>
                </li>
            ))}
        </>
    );
};
