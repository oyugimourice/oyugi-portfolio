"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-[50vh] flex flex-col justify-center py-20 pb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8"
            >
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-color)] leading-[0.9]">
                    Build With Intention
                </h1>

                <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
                    Great tech starts with purpose, not code. I help founders <br className="hidden md:block" />
                    turn clarity into product.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Link href="/newsletter" className="flex items-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg transition-transform hover:scale-[1.02]">
                        <i className="bx bx-envelope text-lg"></i>
                        Join the Newsletter
                    </Link>
                    <Link href="/work-with-me" className="flex items-center gap-3 px-6 py-3 border border-[var(--border-color)] text-[var(--text-color)] font-bold rounded-lg hover:bg-[var(--selection-bg)] transition-all">
                        <i className="bx bx-briefcase-alt-2 text-lg"></i>
                        Work With Me
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
