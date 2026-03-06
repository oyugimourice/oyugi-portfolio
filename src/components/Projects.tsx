"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Luhn Algorithm CLI",
            image: "/img/luhn-algo.jpeg",
            github: "https://github.com/oyugijr/luhn_algo.git",
            link: "#",
            description: "CLI implementation of the Luhn Algorithm. Efficiently detects input errors and ensures integrity of card data.",
            tech: ["Python", "CLI", "Algorithms"]
        },
        {
            title: "EcoTech Platform",
            image: "/img/ecotech.jpg",
            github: "https://github.com/ogwgjr/echo-tech.git",
            link: "#",
            description: "Comprehensive developer tool streamlining user engagement and sustainable technology solutions.",
            tech: ["PHP", "HTML", "SQL"]
        },
        {
            title: "Expense Tracker CLI",
            image: "/img/expense-tracker.jpeg",
            github: "https://github.com/yourusername/expense-tracker.git",
            link: "#",
            description: "Python-based command-line application for managing finances and CSV exports.",
            tech: ["Python", "CLI", "Finance"]
        },
        {
            title: "Embedded Systems",
            image: "/img/automated.jpeg",
            github: "https://github.com/oyugijr/Automated-Systems-Project.git",
            link: "#",
            description: "Automated systems using TinkerCAD and Arduino, integrating sensors, microcontrollers, and actuators.",
            tech: ["C++", "Arduino", "IoT"]
        },
        {
            title: "V1 Portfolio",
            image: "/img/oyugi-portfolio.jpg",
            github: "https://github.com/oyugijr/oyugi-portfolio.git",
            link: "https://oyugi.netlify.app",
            description: "A personal portfolio website highlighting the skills and projects of Oyugi Mourice Odhiambo.",
            tech: ["HTML", "CSS", "JS"]
        },
        {
            title: "AlgoVista Visualizer",
            image: "/img/sorting-vusualizer.png",
            github: "https://github.com/oyugijr/algoVista.git",
            link: "#",
            description: "Implements algorithms for optimized performance and visualizes their comparison in real-time execution.",
            tech: ["TypeScript", "React"]
        }
    ];

    return (
        <section id="portfolio" className="bg-[var(--second-bg-color)] py-24 sm:py-32 px-[5%] md:px-[9%] overflow-hidden">
            <motion.h2
                className="heading mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Featured <span className="text-gradient">Work</span>
            </motion.h2>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group bg-[var(--bg-color)] rounded-3xl overflow-hidden border border-[var(--glass-border)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:border-[rgba(0,171,240,0.4)]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="w-full h-[220px] overflow-hidden relative border-b border-[var(--main-color)]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors duration-300">{project.title}</h3>
                                <div className="flex gap-4">
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--text-muted)] hover:text-[var(--main-color)] transition-all duration-300 hover:scale-110">
                                        <i className="fab fa-github"></i>
                                    </Link>
                                    {project.link !== "#" && (
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--text-muted)] hover:text-[var(--main-color)] transition-all duration-300 hover:scale-110">
                                            <i className="fas fa-external-link-alt"></i>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-6 min-h-[72px]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2.5">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3.5 py-1.5 bg-[rgba(0,171,240,0.1)] text-[var(--main-color)] border border-[var(--main-color)] rounded-full text-xs font-semibold tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
