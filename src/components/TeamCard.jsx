import React from "react";
import { FaInstagram, FaLinkedin, FaXing } from "react-icons/fa"; // Ensure you have react-icons installed

const TeamCard = ({ name = "Name Unavailable", position = "Position Unavailable", image, socialLinks = {} }) => {
    const defaultImage = "https://via.placeholder.com/150"; // Default placeholder image if image URL is missing

    return (
        <div className="team-card bg-white rounded-lg shadow-md p-4 text-center">
            <img 
                src={image || defaultImage} 
                alt={`${name}'s profile`} 
                className="team-card-image w-32 h-32 rounded-full mx-auto" 
            />
            <h3 className="team-card-name font-bold text-lg mt-2">{name}</h3>
            <p className="team-card-position text-gray-600">{position}</p>
            <div className="team-card-socials flex justify-center space-x-2 mt-2">
                {socialLinks.linkedin && (
                    <a 
                        href={socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container bg-black text-white rounded-full p-2"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {socialLinks.instagram && (
                    <a 
                        href={socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container bg-black text-white rounded-full p-2"
                    >
                        <FaInstagram />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a 
                        href={socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container bg-black text-white rounded-full p-2"
                    >
                        <FaXing />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamCard;