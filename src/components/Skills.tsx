"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "FRONTEND",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
        },
        {
            title: "BACKEND",
            skills: ["Node.js", "Express.js", "Python", "PHP", "Django", "PostgreSQL", "MySQL"]
        },
        {
            title: "TOOLS & DEVOPS",
            skills: ["Git", "Docker", "AWS", "Firebase", "Linux", "CI/CD", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-20 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-12">
                <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-[var(--text-color)] text-[var(--bg-color)] text-[10px] font-bold tracking-widest uppercase rounded">
                        TECHNICAL STACK
                    </span>
                    <span className="w-8 h-[1px] bg-[var(--border-color)]"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bento-card flex flex-col gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--text-muted)] border-b border-[var(--border-color)] pb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="text-[11px] font-mono border border-[var(--border-color)] px-3 py-1.5 rounded-full hover:bg-[var(--selection-bg)] transition-colors cursor-default lowercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-2xl mt-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        Continuous learning is part of my DNA. I am currently deepening my expertise in 
                        <span className="text-[var(--text-color)]"> Distributed Systems</span> and 
                        <span className="text-[var(--text-color)]"> Cloud Infrastructure</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
