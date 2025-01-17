import React, { useState } from "react";
import TeamCard from "./TeamCard"; // Ensure you have this component created

const mockTeamData = {
    founder: [
        {
            name: "Jane Doe",
            position: "Founder",
            image: "https://via.placeholder.com/150",
            socialLinks: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
            },
        },
    ],
    admins: [
        {
            name: "John Smith",
            position: "Admin",
            image: "https://via.placeholder.com/150",
            socialLinks: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
            },
        },
        {
            name: "Emily Davis",
            position: "Admin",
            image: "https://via.placeholder.com/150",
            socialLinks: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
            },
        },
    ],
    domains: {
        "Web Development": {
            heads: [
                {
                    name: "Anuj Rishu Tiwari",
                    position: "Lead",
                    image: "https://via.placeholder.com/150",
                    socialLinks: {
                        linkedin: "https://linkedin.com/anuj",
                        instagram: "https://instagram.com/anuj",
                        twitter: "https://twitter.com/anuj",
                    },
                },
            ],
            members: [
                { name: "Vansh Srivastava", position: "Member", image: "URL_TO_PHOTO" },
                { name: "Pulkit Gosain", position: "Member", image: "" },
                { name: "Aditya Khandelwal", position: "Member", image: "" },
                { name: "Krrish Pandey", position: "Member", image: "" },
                { name: "Hridayesh Upadhyay", position: "Member", image: "URL_TO_PHOTO" },
                { name: "Meenakshi Kalimuthu", position: "Member", image: "" },
                { name: "Krishna Keshab Banik", position: "Member", image: "" },
                { name: "Yash Phoghat", position: "Member", image: "URL_TO_PHOTO" },
                { name: "Ayush Dwibedi", position: "Member", image: "" },
                { name: "Sanya Kulshrestha", position: "Member", image: "" },
                { name: "Arihant Jain", position: "Member", image: "" }
            ]
        },
        "Public Relations": {
            heads: [
                {
                    name: "Aznan Ashik",
                    position: "Lead",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                }
            ],
            members: [
                { name: "Shivam Singh", position: "Associate", image: "" },
                { name: "Om Patel", position: "Associate", image: "URL_TO_PHOTO" }
            ]
        },
        "Creatives": {
            heads: [
                {
                    name: "Kshitiz Kamal",
                    position: "President",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                }
            ],
            members: [
                { name: "Tiksha Singh", position: "Associate", image: "" }
            ]
        },
        "Media": {
            heads: [
                {
                    name: "Chirag V",
                    position: "Lead",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                }
            ],
            members: []
        },
        "Sponsorship": {
            heads: [
                {
                    name: "Chhayank Patel",
                    position: "Vice President",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                },
                {
                    name: "Sai Arjun M",
                    position: "Vice President",
                    image: "",
                    socialLinks: {
                        linkedin: "https ://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                },
                {
                    name: "Mukul Ranjan",
                    position: "Lead",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                }
            ],
            members: [
                { name: "Arpit Dadhich", position: "Associate", image: "" },
                { name: "Bhavya Agarwal", position: "Associate", image: "" }
            ]
        },
        "Content and Editorial": {
            heads: [
                {
                    name: "Deeksha Agrawal",
                    position: "Lead",
                    image: "",
                    socialLinks: {
                        linkedin: "https://linkedin.com",
                        instagram: "https://instagram.com",
                        twitter: "https://twitter.com",
                    },
                }
            ],
            members: [
                { name: "Akshat Rawat", position: "Associate", image: "" }
            ]
        }
    }
};

const TeamSection = () => {
    const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
    const domains = Object.keys(mockTeamData.domains);
    const currentDomain = domains[currentDomainIndex];
    const domainData = mockTeamData.domains[currentDomain];

    const handlePrevDomain = () => {
        setCurrentDomainIndex((prevIndex) =>
            prevIndex === 0 ? domains.length - 1 : prevIndex - 1
        );
    };

    const handleNextDomain = () => {
        setCurrentDomainIndex((prevIndex) =>
            prevIndex === domains.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="team-section">
            <h1 className="team-title">Meet the Team</h1>

            {/* Founder Section */}
            <h2 className="team-subtitle">Founder</h2>
            <div className="team-cards-container">
                {mockTeamData.founder.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>

            {/* Admins Section */}
            <h2 className="team-subtitle">Admins</h2>
            <div className="team-cards-container">
                {mockTeamData.admins.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>

            {/* Domain Selector */}
            <div className="domain-selector-container">
                <button className="domain-arrow left" onClick={handlePrevDomain}>
                    ◀
                </button>
                <h2 className="team-subtitle">{currentDomain}</h2>
                <button className="domain-arrow right" onClick={handleNextDomain}>
                    ▶
                </button>
            </div>

            {/* Heads & Associates */}
            <h2 className="team-subtitle">Heads & Associates</h2>
            <div className="team-cards-container">
                {domainData.heads.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>

            {/* Members */}
            <h2 className="team-subtitle">Members</h2>
            <div className="team-members-grid">
                {domainData.members.map((member, index) => (
                    <div key={index} className="member-card">
                        {member.name}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;