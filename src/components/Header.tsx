"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);

            const sections = ["home", "about", "skills", "portfolio", "contact"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full px-[5%] md:px-[9%] py-6 z-[100] transition-all duration-400 flex justify-between items-center ${isSticky
                    ? "bg-[#081b29]/85 dark:bg-[#ffffff]/85 backdrop-blur-md border-b border-[var(--glass-border)] py-4"
                    : "bg-transparent"
                }`}
        >
            <Link href="#home" className="text-4xl font-extrabold tracking-tighter text-gradient">
                Oyugi.
            </Link>

            <div
                className="bx bx-menu md:hidden text-4xl cursor-pointer text-[var(--text-color)] z-[101]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></div>

            <nav
                className={`fixed md:relative top-0 left-0 w-[300px] md:w-auto h-screen md:h-auto bg-[var(--bg-color)] md:bg-transparent border-r md:border-none border-[var(--glass-border)] flex flex-col md:flex-row items-start md:items-center pt-28 md:pt-0 transition-transform duration-400 md:transform-none shadow-2xl md:shadow-none ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl md:text-lg font-medium mx-8 md:mx-4 lg:mx-6 my-4 md:my-0 transition-colors duration-300 relative group ${activeSection === link.href.substring(1)
                                ? "text-[var(--main-color)]"
                                : "text-[var(--text-color)] hover:text-[var(--main-color)]"
                            }`}
                    >
                        {link.name}
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-[var(--gradient)] transition-all duration-300 ${activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                        ></span>
                    </Link>
                ))}

                <button
                    onClick={toggleDarkMode}
                    className="mx-8 md:mx-4 my-4 md:my-0 text-3xl md:text-2xl text-[var(--text-color)] hover:text-[var(--main-color)] transition-transform duration-300 hover:rotate-15"
                    aria-label="Toggle Dark Mode"
                >
                    <i className={isDarkMode ? "bx bx-moon" : "bx bx-sun"}></i>
                </button>
            </nav>
        </header>
    );
}
