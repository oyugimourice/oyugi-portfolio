"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[var(--border-color)] flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <p className="text-xs font-bold tracking-widest uppercase text-[var(--text-muted)]">STAY IN TOUCH</p>
                <div className="flex gap-4">
                    <Link href="https://github.com/oyugimourice" target="_blank" className="text-sm font-medium hover:text-[var(--text-muted)] transition-colors underline decoration-[var(--border-color)] underline-offset-4">GITHUB</Link>
                    <Link href="https://linkedin.com/in/oyugimourice" target="_blank" className="text-sm font-medium hover:text-[var(--text-muted)] transition-colors underline decoration-[var(--border-color)] underline-offset-4">LINKEDIN</Link>
                </div>
            </div>

            <Link
                href="#home"
                className="text-[10px] font-black tracking-widest uppercase bg-[var(--selection-bg)] px-3 py-2 rounded hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
            >
                BACK TO TOP ↑
            </Link>
        </footer>
    );
}
