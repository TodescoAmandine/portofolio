import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (e) => {
        setActiveLink(e.target.name);
    };

    return (
        <div className='navigation'>
            <ul className='navigation__ul'>
                <li className='navigation__li'>
                    <NavLink to="/" className={activeLink === 'home' ? 'nav-active' : ''} onClick={handleClick} name='home'>
                        Home
                    </NavLink>
                </li>
                <li className='navigation__li'>
                <a href="#projects" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        My projects
                    </a>
                </li>
                <li className='navigation__li'>
                <a href="#skills" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Skills
                    </a>
                </li>
                <li className='navigation__li'>
                    <a href="#footer" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Contact
                    </a>
                </li>


            </ul>

        </div>
    );
};

export default Navigation;
