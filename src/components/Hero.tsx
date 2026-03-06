"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col-reverse lg:flex-row items-center justify-between pt-36 pb-20 px-[5%] md:px-[9%] gap-12 lg:gap-8">
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left z-10 w-full">
                <motion.h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hello, I'm <br />
                    <span className="text-gradient">Oyugi Mourice</span>
                </motion.h1>

                <motion.div
                    className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--text-muted)] min-h-[40px] lg:min-h-[50px] mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    And I'm a{" "}
                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            1000,
                            "Frontend Developer",
                            1000,
                            "Backend Developer",
                            1000,
                            "Web Designer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-[var(--text-color)]"
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.p
                    className="text-lg sm:text-xl text-[var(--text-muted)] max-w-[600px] mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Driven software engineer, passionate about coding and problem-solving. Committed to learning,
                    adapting, and contributing to innovative tech solutions that make a real difference.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="#contact"
                        className="btn-gradient inline-flex justify-center items-center px-8 py-3.5 rounded-xl text-lg font-semibold text-white transition-all w-full sm:w-auto"
                    >
                        Hire Me
                    </Link>
                    <Link
                        href="https://docs.google.com/document/d/1Aq0L6wZ-xKdrt0JHD7juY3MenCMJGU7Ml2TJGQJuEiI/edit?tab=t.0/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent border border-[var(--glass-border)] rounded-xl text-lg font-semibold text-[var(--text-color)] hover:bg-[var(--glass-bg)] hover:border-[var(--main-color)] hover:text-[var(--main-color)] transition-all w-full sm:w-auto"
                    >
                        Download Resume
                    </Link>
                </motion.div>

                <motion.div
                    className="flex gap-6 justify-center lg:justify-start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {[
                        { href: "https://wa.me/254700314150", icon: "bx bxl-whatsapp", label: "WhatsApp" },
                        { href: "https://github.com/oyugijr", icon: "bx bxl-github", label: "GitHub" },
                        { href: "https://twitter.com/oyugijR1", icon: "bx bxl-twitter", label: "Twitter" },
                        { href: "https://www.linkedin.com/in/oyugimourice", icon: "bx bxl-linkedin", label: "LinkedIn" },
                    ].map((social, i) => (
                        <Link
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="inline-flex justify-center items-center w-12 h-12 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full text-2xl text-[var(--text-color)] transition-all duration-400 hover:bg-[var(--gradient)] hover:text-white hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(0,171,240,0.3)] hover:border-transparent backdrop-blur-sm"
                        >
                            <i className={social.icon}></i>
                        </Link>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="flex-1 flex justify-center items-center relative w-full max-w-[450px]"
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="/img/home-image.jpg"
                    alt="Oyugi Mourice Odhiambo"
                    className="w-11/12 max-w-[450px] aspect-[4/5] sm:aspect-auto sm:h-[500px] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[var(--glass-border)] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                />
            </motion.div>
        </section>
    );
}
