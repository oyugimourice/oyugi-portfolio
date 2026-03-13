"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Latest() {
    return (
        <section id="latest" className="py-20 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">LATEST</p>
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--text-color)]">Fresh from the desk</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <Link href="/writing" className="block p-10 bg-[var(--selection-bg)]/30 rounded-3xl border border-[var(--border-color)] relative transition-all hover:bg-[var(--selection-bg)]/50">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                    <i className="bx bx-edit-alt"></i>
                                    Essay
                                </span>
                                <span className="text-[var(--border-color)]">•</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Coming Soon</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                                MCP Solved Tools. A2A Solved Messaging. What Solves Memory?
                            </h3>
                            
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                                The agentic stack is taking shape — but memory remains the missing primitive. This essay explores what comes next.
                            </p>
                        </div>
                        
                        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                            <i className="bx bx-right-arrow-alt text-2xl"></i>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
