"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const sections = ["home", "about", "skills", "portfolio", "contact"];
            let currentSection = "home";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    const navLinks = [
        { name: "Home", href: "/", icon: "bx bx-home-alt-2" },
        { name: "Work With Me", href: "/work-with-me", icon: "bx bx-briefcase-alt-2" },
        { name: "Writing", href: "/writing", icon: "bx bx-edit-alt" },
        { name: "Speaking", href: "/speaking", icon: "bx bx-microphone" },
        { name: "Ventures", href: "/ventures", icon: "bx bx-rocket" },
        { name: "Lab", href: "/lab", icon: "bx bx-vial" },
        // { name: "Skills", href: "/#skills", icon: "bx bx-code-alt" },
        // { name: "Projects", href: "/#portfolio", icon: "bx bx-layout" },
        // { name: "About", href: "/#about", icon: "bx bx-user" },
    ];

    const isLinkActive = (href: string) => {
        if (href === "/") return pathname === "/" && activeSection === "home";
        if (href.startsWith("/#")) return pathname === "/" && activeSection === href.substring(2);
        return pathname === href;
    };

    const socialLinks = [
        { href: "https://github.com/oyugimourice", icon: "bx bxl-github", label: "GitHub" },
        { href: "https://www.linkedin.com/in/oyugimourice", icon: "bx bxl-linkedin", label: "LinkedIn" },
        { href: "https://x.com/oyugi_4e", icon: "bx bxl-twitter", label: "X" },
        { href: "https://www.instagram.com/oyugimourice_", icon: "bx bxl-instagram", label: "Instagram" },
        { href: "https://discordapp.com/users/1260703236101373996", icon: "bx bxl-discord-alt", label: "Discord" },
    ];

    return (
        <aside className="sidebar-sticky z-[100] bg-[var(--bg-color)] overflow-y-auto">
            <div className="flex flex-col gap-10">
                <Link href="/" className="block text-2xl font-serif italic font-light tracking-tight text-[var(--text-color)]">
                    Oyugi Mourice
                </Link>

                <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isLinkActive(link.href)
                                    ? "bg-[var(--selection-bg)] text-[var(--text-color)]"
                                    : "text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--selection-bg)]/50"
                                }`}
                        >
                            <i className={`${link.icon} text-lg`}></i>
                            {link.name}
                        </Link>
                    ))}
                </nav>


                <div className="flex flex-col gap-2 pt-6">
                    <p className="px-3 text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">RESOURCES</p>
                    <Link href="/newsletter" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                        <i className="bx bx-envelope text-lg"></i>
                        Newsletter
                    </Link>
                    {/* <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                        <i className="bx bx-book-open text-lg"></i>
                        Founder's Read <span className="text-[10px] bg-[var(--selection-bg)] px-1 rounded ml-auto">900+</span>
                    </Link> */}
                </div>
            </div>

            <div className="flex flex-col gap-6 pt-10 mt-auto border-t border-[var(--border-color)]">
                <div className="flex items-center gap-4 px-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                        <img src="/img/ste.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold leading-none">Oyugi Mourice</span>
                        <span className="text-[10px] text-[var(--text-muted)] mt-1 tracking-tight">Software Engineer · Builder</span>
                    </div>
                </div>

                <div className="flex gap-3 px-3">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                        >
                            {social.label === "X" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
                                </svg>
                            ) : (
                                <i className={social.icon}></i>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-4 px-3">
                    <p className="text-[9px] text-[var(--text-muted)] font-mono leading-relaxed">
                        Designed & Developed by Oyugi Mourice
                    </p>
                    <div className="flex p-0.5 bg-[var(--selection-bg)] rounded-md w-max">
                        <button
                            onClick={() => isDarkMode && toggleDarkMode()}
                            className={`p-1 px-3 text-[10px] font-bold rounded ${!isDarkMode ? "bg-[var(--bg-color)] shadow-sm" : "text-[var(--text-muted)]"}`}
                        >
                            LIGHT
                        </button>
                        <button
                            onClick={() => !isDarkMode && toggleDarkMode()}
                            className={`p-1 px-3 text-[10px] font-bold rounded ${isDarkMode ? "bg-[var(--dark-bg-secondary)] shadow-sm" : "text-[var(--text-muted)]"}`}
                        >
                            DARK
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
