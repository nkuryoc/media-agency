import React from 'react';
import './header.style.css';

const MainHeader = () => (
    <>
        <div className="top-bar theme-bg3" id="responsive-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu theme-bg3" data-dropdown-menu>
                    <li className="menu-text">Site Title</li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu theme-bg3">
                    <li><a href="#0">Feature</a></li>
                    <li><a href="#0">Hosting</a></li>
                    <li><a href="#0">Designing</a></li>
                    <li><a href="#0">About Us</a></li>
                    <li>
                        <button type="button" className="button">Login</button>
                    </li>
                </ul>
            </div>
        </div>
    </>
)

export default MainHeader;