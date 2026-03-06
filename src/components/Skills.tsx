"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const codingSkills = [
        { name: "HTML", percent: 95, icon: "bx bxl-html5" },
        { name: "CSS", percent: 92, icon: "bx bxl-css3" },
        { name: "JavaScript", percent: 70, icon: "bx bxl-javascript" },
        { name: "PHP", percent: 70, icon: "bx bxl-php" },
        { name: "Python", percent: 40, icon: "bx bxl-python" },
    ];

    const proSkills = [
        { name: "Web Design", percent: 90 },
        { name: "Web Development", percent: 75 },
        { name: "Graphic Design", percent: 60 },
        { name: "SEO Marketing", percent: 50 },
        { name: "Android Development", percent: 40 },
    ];

    const softSkills = [
        { name: "Communication", percent: 96 },
        { name: "Time Management", percent: 95 },
        { name: "Collaboration", percent: 95 },
        { name: "Attention to Detail", percent: 98 },
    ];

    const techStack = [
        "Git", "Docker", "AWS", "Firebase", "React", "Next.js", "Node.js", "Express.js",
        "TypeScript", "JavaScript", "Python", "Django", "PHP", "C++", "Java", "PostgreSQL",
        "MongoDB", "MySQL", "Tailwind CSS", "Figma"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 sm:py-32 px-[5%] md:px-[9%] overflow-hidden overflow-x-hidden">
            <motion.h2
                className="heading mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My <span className="text-gradient">Expertise</span>
            </motion.h2>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Coding Skills */}
                <motion.div
                    className="bg-[var(--glass-bg)] p-8 sm:p-10 rounded-2xl border border-[var(--glass-border)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:-translate-y-2 hover:border-[rgba(0,171,240,0.3)]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-[var(--text-color)] text-center">Coding Skills</h3>
                    <div className="space-y-6">
                        {codingSkills.map((skill, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between text-base font-medium mb-2">
                                    <span className="flex items-center gap-2"><i className={`${skill.icon} text-xl text-[var(--main-color)]`}></i> {skill.name}</span>
                                    <span className="text-[var(--text-muted)]">{skill.percent}%</span>
                                </div>
                                <div className="w-full h-2 bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(0,0,0,0.05)] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[var(--gradient)] rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                    className="bg-[var(--glass-bg)] p-8 sm:p-10 rounded-2xl border border-[var(--glass-border)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:-translate-y-2 hover:border-[rgba(0,171,240,0.3)]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-[var(--text-color)] text-center">Professional Skills</h3>
                    <div className="space-y-6">
                        {proSkills.map((skill, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between text-base font-medium mb-2">
                                    <span>{skill.name}</span>
                                    <span className="text-[var(--text-muted)]">{skill.percent}%</span>
                                </div>
                                <div className="w-full h-2 bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(0,0,0,0.05)] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[var(--gradient)] rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    className="bg-[var(--glass-bg)] p-8 sm:p-10 rounded-2xl border border-[var(--glass-border)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:-translate-y-2 hover:border-[rgba(0,171,240,0.3)] lg:col-span-1 md:col-span-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-[var(--text-color)] text-center">Soft Skills</h3>
                    <div className="space-y-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between text-base font-medium mb-2">
                                    <span>{skill.name}</span>
                                    <span className="text-[var(--text-muted)]">{skill.percent}%</span>
                                </div>
                                <div className="w-full h-2 bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(0,0,0,0.05)] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[var(--gradient)] rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="max-w-[1000px] mx-auto mt-24 text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Tech <span className="text-gradient">Stack</span>
                </motion.h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={i}
                            variants={itemVariants}
                            className="px-6 py-2.5 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-color)] rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:bg-[var(--main-color)] hover:text-white hover:-translate-y-1.5 hover:shadow-[0_5px_15px_rgba(0,171,240,0.3)] hover:border-transparent backdrop-blur-sm cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
