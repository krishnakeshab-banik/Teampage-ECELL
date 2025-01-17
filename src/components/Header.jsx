import React from "react";
import logo from './assets/E-cell-logo.png';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-[#002421]">
            <div className="logo-container">
                <img src={logo} alt="E-Cell Logo" className="w-16" />
            </div>
            <nav className="nav-bar">
                <ul className="flex space-x-4">
                    <li><a href="./home" className="text-white">Home</a></li>
                    <li><a href="./events" className="text-white">Events</a></li>
                    <li><a href="./" className="text-[#00cc99]">Team</a></li>
                    <li><a href="./about" className="text-white">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;