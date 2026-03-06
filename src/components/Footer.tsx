"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex flex-col md:flex-row justify-between items-center px-[5%] md:px-[9%] py-8 bg-[var(--second-bg-color)] border-t border-[var(--glass-border)] gap-6 text-center md:text-left">
            <div className="text-[var(--text-muted)] text-base font-medium">
                <p>Copyright &copy; {year} by Oyugi | Crafting Digital Excellence</p>
            </div>

            <div>
                <Link
                    href="#home"
                    aria-label="Back to Top"
                    className="inline-flex justify-center items-center w-12 h-12 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-3xl text-[var(--text-color)] transition-all duration-300 hover:bg-[var(--gradient)] hover:text-white hover:-translate-y-1 hover:border-transparent"
                >
                    <i className="bx bx-up-arrow-alt"></i>
                </Link>
            </div>
        </footer>
    );
}
