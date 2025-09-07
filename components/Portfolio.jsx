import React from "react";

const projects = [
    {
        title: "Hidden Cafe",
        description: "A cafe website with a Firebase specials editor and custom domain hosting.",
        image: "/HiddenSiteImg.png",
        link: "https://hidden-cafe.com",
    },
    {
        title: "Diana's Crockpot Creations",
        description: "Dynamic restaurant site with cart, email orders, and Firebase integration.",
        image: "/DianaSiteImg.png",
        link: "https://dianascrockpotcreations.com",
    },
    {
        title: "My Portfolio",
        description: "For seeing other projects I have made.",
        image: "/PortfolioSiteImg.png",
        link: "https://kaylynn-portfolio.vercel.app",
    },
];

export default function Portfolio() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    My Projects
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 bg-white text-black">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    {project.description}
                                </p>
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}