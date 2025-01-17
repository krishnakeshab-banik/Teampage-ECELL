import React from "react";
import insta from './assets/instagram.png'; // Ensure you have the correct path to your assets
import LinkedIn from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import myImage from './assets/E-cell-logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#101010] text-white p-8">
            <div className="text-center mb-4">
                <h2 className="text-2xl">Connect with us</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <a
                        href="https://www.instagram.com" // Replace with your Instagram URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-container"
                    >
                        <div className="bg-[#20B475] rounded-full p-2">
                            <img src={insta} alt="Instagram" className="w-8 h-8" />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com" // Replace with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-container"
                    >
                        <div className="bg-[#20B475] rounded-full p-2">
                            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
                        </div>
                    </a>
                    <a
                        href="https://www.twitter.com" // Replace with your Twitter URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-container"
                    >
                        <div className="bg-[#20B475] rounded-full p-2">
                            <img src={twitter} alt="Twitter" className="w-8 h-8" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-center mb-4">
                <img src={myImage} alt="E-Cell SRMIST Logo" className="w-24 mx-auto" />
                <p>All rights reserved to E-Cell SRMIST</p>
            </div>
            <div className="flex justify-center space-x-8 mt-4">
                <a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#cookies" className="text-gray-400 hover:text-white">Cookies Policy</a>
            </div>
            <p className="text-center mt-4">
                Created by <span className="font-bold">Designers</span> and <span className="font-bold">Developers</span> at E-Cell SRMIST
            </p>
        </footer>
    );
};

export default Footer;