"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Ventures() {
    const ventures = [
        {
            name: "KINARA",
            status: "Active",
            tagline: "An AI Operating System for Education.",
            desc: "Kiinara is where my heart is. We're rethinking how students learn ~ with AI at the core. It's the hardest thing I've ever built. And the most meaningful.",
            link: "#",
            linkLabel: "Learn more",
            color: "text-black"
        },
        {
            name: "KOSMOS labs",
            status: "Heading to beta",
            tagline: "Create once, publish everywhere.",
            desc: "KOSMOS streamlines how pharma teams create, approve, and deploy content ~ with compliance built in from the start.",
            link: "#",
            linkLabel: "Learn more",
            color: "text-indigo-600"
        },
        {
            name: "ADIMS",
            status: "Active",
            tagline: "The business system for driving instructors.",
            desc: "Lesson bookings. Student management. Accounts. Calendar. All in one place. ADIMS helps driving instructors ditch the paper diary and run their business with a click.",
            link: "#",
            linkLabel: "Visit ADIMS",
            color: "text-red-600"
        }
    ];

    return (
        <div className="content-area">
            <section className="py-12">
                <div className="flex flex-col gap-16">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">VENTURES</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-color)]">What I'm building.</h1>
                        <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mt-4">
                            These are the businesses I'm actively growing. Each one started with a problem worth solving.
                        </p>
                    </div>

                    {/* Ventures List */}
                    <div className="flex flex-col gap-6">
                        {ventures.map((v, i) => (
                            <motion.div
                                key={i}
                                className="p-10 bg-[var(--selection-bg)] rounded-2xl flex flex-col gap-8 transition-transform hover:scale-[1.005]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <h2 className={`text-2xl font-bold tracking-tighter ${v.color}`}>{v.name}</h2>
                                    <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold rounded uppercase tracking-widest">
                                        {v.status}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-mono text-sm text-[var(--text-muted)] italic">
                                        {v.tagline}
                                    </p>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                                        {v.desc}
                                    </p>
                                </div>
                                <Link href={v.link} className="text-xs font-bold border-b border-black w-max pb-0.5 mt-2 hover:border-transparent transition-all">
                                    {v.linkLabel} ↗
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Lab Section */}
                    <div className="flex flex-col gap-6 pt-20 border-t border-[var(--border-color)]">
                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">LAB</p>
                            <h2 className="text-3xl font-bold tracking-tight mt-2">Experiments & open source.</h2>
                            <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mt-4">
                                Smaller bets. Prototypes, tools, and open source projects I build in public ~ some ship, some don't, all teach me something.
                            </p>
                        </div>
                        <Link href="/lab" className="flex items-center gap-3 px-6 py-2.5 border border-[var(--border-color)] text-[var(--text-color)] font-bold rounded-lg w-max hover:bg-[var(--selection-bg)] transition-all">
                            <i className="bx bx-vial text-xl"></i>
                            Visit the Lab
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
