"use client";

import { motion } from "framer-motion";

export default function Community() {
    return (
        <section id="community" className="py-20 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">COMMUNITY</p>
                </div>

                <motion.div
                    className="bg-[#fffbeb] dark:bg-[#1a1a1a] p-12 md:p-20 rounded-3xl flex flex-col items-center text-center gap-10"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            You're not building alone.
                        </h2>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto">
                            A space for developers and founders who want to grow, share, and build with intention. No gatekeeping. Just real conversations.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="flex items-center gap-3 px-8 py-3.5 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl transition-transform hover:scale-[1.02]">
                            <i className="bx bxl-discord-alt text-xl"></i>
                            Join the Circle
                        </button>
                        <button className="flex items-center gap-3 px-8 py-3.5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 font-bold rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            Join our Newsletter
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
