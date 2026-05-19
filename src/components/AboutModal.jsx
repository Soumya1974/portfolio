import React, { useEffect, useState } from "react";
import soumya from '../assets/soumya.jpeg';
import github from '../assets/github.svg';
import linkedin from '../assets/inkedinn.svg';
import discord from '../assets/discord.svg';

export default function AboutModal({ onCancel, isOpen }) {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        }
    }, [isOpen])

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            onCancel();
        }, 500);
    }

    const INFO = {
        linkedin: "https://www.linkedin.com/in/soumya1974",
        github: "https://github.com/Soumya1974",
        discord: "https://discord.com/users/843507182020067339",
    };

    const TIMELINE = [

        {
            year: "2025-Feb", badge: "Skill", badgeClass: "bg-red-50 text-red-700",
            title: "Explored 3D with Blender",
            desc: "Started 3D modeling and animation combining tech with creative storytelling.",
            tags: ["Blender", "3D Modeling", "Animation"]
        },
        {
            year: "2025-Aug", badge: "Education", badgeClass: "bg-blue-50 text-blue-700",
            title: "Started MCA after completeing BSc in chemistry",
            desc: "Began my journey into computing, algorithms, and software engineering fundamentals.",
            tags: ["C", "Java", "Data Structures"]
        },
        {
            year: "2025-Oct", badge: "Skill", badgeClass: "bg-red-50 text-red-700",
            title: "Discovered Web Development",
            desc: "Fell in love with HTML, CSS and JavaScript. Built my first responsive web pages.",
            tags: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            year: "2025-dec", badge: "Project", badgeClass: "bg-amber-50 text-amber-700",
            title: "Dived into React & Tailwind CSS",
            desc: "Started building component-driven UIs with React and utility-first Tailwind styling.",
            tags: ["React", "Tailwind", "Node.js"]
        },
        {
            year: "Currently", badge: "Learning", badgeClass: "bg-amber-50 text-amber-700",
            title: "Full Stack Learning",
            desc: "Learnig full-stack apps with REST APIs, databases, and authentication flows.",
            tags: ["Node.js", "REST APIs", "MongoDB"]
        },
        {
            year: "2026-Now", badge: "Now", badgeClass: "bg-green-50 text-green-700",
            title: "Open to Opportunities",
            desc: "Actively building projects and looking for exciting full-stack or creative tech roles.",
            tags: ["Open to Work", "Freelance", "Full-time"]
        },
    ];



    return (
        <>
            {isVisible && (
                <div
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-screen w-3/4 md:w-1/2 bg-white z-50 shadow-lg
                transition-transform duration-500 ease-in-out shadow-gray-700
                ${isVisible ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className={`absolute top-4 right-4 text-gray-500 hover:text-black text-2xl transition-all duration-700 cursor-pointer hover:-rotate-90
                        ${isVisible ? "rotate-180 mr-0 opacity-100" : "rotate-0 mr-100 opacity-0"
                        }`}
                    onClick={handleClose}
                >
                    ✕
                </button>

                <div className="p-8 pt-16 h-full overflow-y-auto scrollbar-hide">

                    <div className="w-full h-40 flex gap-5 items-center justify-between px-5 py-10">
                        <div className="flex gap-5 items-center">
                            <img src={soumya} className="w-30 rounded-full" />
                            <div className="md:block hidden">
                                <h1 className="font-semibold">Name: Soumya ranjan sahoo</h1>
                                <p>Contact: 7609838533</p>
                                <p>Age: 21</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <a href={INFO.github} target="_blank" rel="noopener noreferrer"
                                aria-label="GitHub"
                                style={{ border: "none" }}
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <img src={github} />
                            </a>
                            <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                style={{ border: "none" }}
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <img src={linkedin} />
                            </a>
                            <a href={INFO.discord} target="_blank" rel="noopener noreferrer"
                                aria-label="Discord"
                                style={{ border: "none" }}
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <img src={discord} />

                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 px-2 mt-5">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p className="text-gray-600 leading-relaxed w-full">
                            I’m a developer and creative enthusiast focused on building modern, responsive, and interactive web experiences. I enjoy working with technologies like JavaScript, React, Node.js, and Tailwind CSS to create projects that are both functional and visually engaging. Alongside web development, I also work with Blender for 3D modeling and animation, exploring creative storytelling and visual design. I’m constantly learning new technologies, improving my skills, and building projects that challenge both my technical and creative abilities.
                        </p>

                        <div className="mt-8 flex flex-col gap-0">
                            {TIMELINE.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-black mt-1 shrink-0" />
                                        {i < TIMELINE.length - 1 && (
                                            <div className="w-px flex-1 bg-gray-200 my-1" />
                                        )}
                                    </div>
                                    <div className="pb-6 flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs text-gray-400 uppercase tracking-wide">{item.year}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badgeClass}`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {item.tags.map(t => (
                                                <span key={t} className="text-xs border border-gray-200 rounded-full px-2 py-0.5 text-gray-400">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {item.tags.map(t => (
                                                <span key={t} className="text-xs border border-gray-200 rounded-full px-2 py-0.5 text-gray-400">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}