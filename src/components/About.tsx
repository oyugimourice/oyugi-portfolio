"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="relative z-[2] bg-[var(--second-bg-color)] py-24 sm:py-32 px-[5%] md:px-[9%] overflow-hidden overflow-x-hidden">
            <motion.h2
                className="heading mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                About <span className="text-gradient">Me</span>
            </motion.h2>

            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <motion.div
                    className="flex-1 w-full relative group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/img/ste.jpg"
                        alt="Portrait of Oyugi Mourice"
                        className="w-full max-w-[400px] mx-auto rounded-3xl object-cover shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,171,240,0.4)]"
                    />
                </motion.div>

                <motion.div
                    className="flex-[1.5] w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                        Transforming ideas into <span className="text-gradient">Digital Reality</span>
                    </h3>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                        A visionary with a strong enthusiasm for exploring intricate challenges and discovering fresh viewpoints. I thrive on questioning the status quo and discovering innovative solutions to complex technical challenges. Fueled by curiosity and a dedication to lifelong learning, I embrace every opportunity to push boundaries and create a meaningful impact.
                    </p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="btn-gradient px-8 py-3.5 rounded-xl text-lg font-semibold text-white transition-all shadow-md group"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                        <i className={`bx ml-2 transition-transform duration-300 ${isExpanded ? "bx-chevron-up" : "bx-chevron-down"} group-hover:translate-y-0.5`}></i>
                    </button>
                </motion.div>
            </div>

            <motion.div
                className={`max-w-[1200px] mx-auto mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ease-in-out ${isExpanded ? "opacity-100 max-h-[2000px] pointer-events-auto translate-y-0" : "opacity-0 max-h-0 pointer-events-none -translate-y-10"
                    }`}
            >
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6 pb-4 border-b border-[var(--glass-border)] flex items-center gap-3">
                        <i className='bx bxs-graduation text-[var(--main-color)] text-3xl'></i> Education
                    </h3>

                    <div className="mb-8 p-4 rounded-xl bg-[rgba(0,171,240,0.05)] border-l-4 border-[var(--main-color)]">
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">Software Development Scholarship</h4>
                        <div className="flex justify-between items-center text-sm text-[var(--text-muted)] mb-3 flex-wrap gap-2">
                            <span className="font-semibold text-[var(--text-color)]">Power Learn Project Africa</span>
                            <span className="text-[var(--main-color)] bg-[rgba(0,171,240,0.1)] px-3 py-1 rounded-full">2025-Present</span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">Software engineering essentials, Startup Building, SQL Database programming, Python, Web Dev</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[rgba(0,171,240,0.05)] border-l-4 border-[var(--main-color)]">
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">BSc. Software Engineering</h4>
                        <div className="flex justify-between items-center text-sm text-[var(--text-muted)] mb-3 flex-wrap gap-2">
                            <span className="font-semibold text-[var(--text-color)]">Kirinyaga University</span>
                            <span className="text-[var(--main-color)] bg-[rgba(0,171,240,0.1)] px-3 py-1 rounded-full">2022-Present</span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">OOD, Data Structures & Algorithms, DBMS, Computer Networks, Linear Algebra.</p>
                    </div>
                </div>

                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6 pb-4 border-b border-[var(--glass-border)] flex items-center gap-3">
                        <i className='bx bx-briefcase text-[var(--main-color)] text-3xl'></i> Experience
                    </h3>

                    <div className="mb-8 p-4 rounded-xl bg-[rgba(0,171,240,0.05)] border-l-4 border-[var(--main-color)]">
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">Marketing, Order Fulfillment & Dev</h4>
                        <div className="flex justify-between items-center text-sm text-[var(--text-muted)] mb-3 flex-wrap gap-2">
                            <span className="font-semibold text-[var(--text-color)]">MajiApp</span>
                            <span className="text-[var(--main-color)] bg-[rgba(0,171,240,0.1)] px-3 py-1 rounded-full">Feb 2025-Present</span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">Develop marketing strategies, resolve order issues for a smooth experience, and support bug fixes.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[rgba(0,171,240,0.05)] border-l-4 border-[var(--main-color)]">
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">Software Engineer Intern</h4>
                        <div className="flex justify-between items-center text-sm text-[var(--text-muted)] mb-3 flex-wrap gap-2">
                            <span className="font-semibold text-[var(--text-color)]">MajiApp</span>
                            <span className="text-[var(--main-color)] bg-[rgba(0,171,240,0.1)] px-3 py-1 rounded-full">May 2024 - Dec 2024</span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">Optimized performance & SEO, integrated Stripe in MAJI APP, and delivered 98% project grade.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
