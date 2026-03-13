"use client";

import { motion } from "framer-motion";

export default function About() {
    const services = [
        {
            tag: "For: Founders & Startups",
            title: "I've made the mistakes so you don't have to.",
            desc: "From strategy to shipped product — I help you make the right decisions, build the right thing, and avoid the mistakes that kill startups.",
            button: "Book a Call",
            bg: "bg-[#e7f3ef] dark:bg-[#1a2e28]",
            textColor: "text-neutral-900 dark:text-neutral-100"
        },
        {
            tag: "For: Events & Conferences",
            title: "I share what I've learned — on stages that matter.",
            desc: "I speak on AI-first development, building with intention, and the future of how we build software. Keynotes, panels, podcasts — let's talk.",
            button: "Invite Me",
            bg: "bg-[#f5f1e9] dark:bg-[#2e2a22]",
            textColor: "text-neutral-900 dark:text-neutral-100"
        },
        {
            tag: "For: Developers & Aspiring Founders",
            title: "Launch your career with purpose.",
            desc: "From code to career, I help you build skills that compound. Technical growth with intention, not just tutorials.",
            button: "Apply Now",
            bg: "bg-[#f0f0f0] dark:bg-[#222222]",
            textColor: "text-neutral-900 dark:text-neutral-100",
            fullWidth: true
        }
    ];

    return (
        <section id="about" className="py-20 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">WORK WITH ME</p>
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--text-color)]">How I can help you</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${service.bg} p-10 rounded-3xl flex flex-col gap-8 justify-between ${service.fullWidth ? "md:col-span-2" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                                    {service.tag}
                                </span>
                                <h3 className="text-2xl font-bold tracking-tight leading-tight max-w-md text-neutral-900">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                                    {service.desc}
                                </p>
                            </div>
                            <button className="w-max px-4 py-2 bg-transparent border border-black/20 rounded-lg text-[10px] font-bold uppercase tracking-widest text-neutral-900 hover:bg-black/5 transition-colors">
                                {service.button}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
