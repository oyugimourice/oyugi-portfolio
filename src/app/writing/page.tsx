"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Writing() {
    const essays = [
        {
            date: "2026-03-10",
            title: "MCP Solved Tools. A2A Solved Messaging. What Solves Memory?",
            desc: "The agentic stack is taking shape — but memory remains the missing primitive. This essay explores what comes next.",
            link: "#"
        },
        {
            date: "2026-02-28",
            title: "Building with Intention in an AI-First World",
            desc: "How we shift from 'writing code' to 'architecting systems' when the cost of production drops to zero.",
            link: "#"
        },
        {
            date: "2026-02-15",
            title: "The Case for Minimalist Engineering",
            desc: "Why the best code is the code you never wrote, and why simplicity is the ultimate sophistication in software design.",
            link: "#"
        }
    ];

    return (
        <div className="content-area">
            <section className="py-12">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">WRITING</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-color)]">Essays</h1>
                        <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mt-4">
                            Long-form thinking on AI, building, and what it means to create with intention.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 mt-12">
                        {essays.map((essay, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="text-sm font-mono text-[var(--text-muted)] pt-1">
                                    {essay.date}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <Link href={essay.link} className="group-hover:text-[var(--text-muted)] transition-colors">
                                        <h2 className="text-2xl font-bold tracking-tight leading-snug text-[var(--text-color)] group-hover:text-inherit">
                                            {essay.title}
                                        </h2>
                                    </Link>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                                        {essay.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
