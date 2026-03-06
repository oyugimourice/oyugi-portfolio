"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Make sure to replace these IDs with actual valid EmailJS service, template, and public key
        emailjs
            .sendForm(
                "service_2l2sler", // Service ID
                "template_d6q7w68", // Template ID
                formRef.current!,
                "eM2mO7s0WlBN_kuoc" // Public Key
            )
            .then(
                () => {
                    alert("Message sent successfully! 📩");
                    formRef.current?.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    alert("Oops! Something went wrong. ❌");
                    console.error(error);
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section id="contact" className="py-24 sm:py-32 px-[5%] md:px-[9%] overflow-hidden">
            <motion.h2
                className="heading mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Let's <span className="text-gradient">Connect</span>
            </motion.h2>

            <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                className="max-w-[800px] mx-auto bg-[var(--glass-bg)] p-10 sm:p-12 rounded-[2rem] border border-[var(--glass-border)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full p-4 rounded-xl text-lg bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.02)] border border-[var(--glass-border)] text-[var(--text-color)] focus:border-[var(--main-color)] focus:bg-[rgba(255,255,255,0.05)] focus:ring-4 focus:ring-[rgba(0,171,240,0.1)] transition-all outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full p-4 rounded-xl text-lg bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.02)] border border-[var(--glass-border)] text-[var(--text-color)] focus:border-[var(--main-color)] focus:bg-[rgba(255,255,255,0.05)] focus:ring-4 focus:ring-[rgba(0,171,240,0.1)] transition-all outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <input
                        type="tel"
                        name="mobile"
                        inputMode="tel"
                        pattern="^\+?[0-9\s\-]{7,15}$"
                        placeholder="Mobile Number"
                        required
                        className="w-full p-4 rounded-xl text-lg bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.02)] border border-[var(--glass-border)] text-[var(--text-color)] focus:border-[var(--main-color)] focus:bg-[rgba(255,255,255,0.05)] focus:ring-4 focus:ring-[rgba(0,171,240,0.1)] transition-all outline-none"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full p-4 rounded-xl text-lg bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.02)] border border-[var(--glass-border)] text-[var(--text-color)] focus:border-[var(--main-color)] focus:bg-[rgba(255,255,255,0.05)] focus:ring-4 focus:ring-[rgba(0,171,240,0.1)] transition-all outline-none"
                    />
                </div>

                <textarea
                    name="message"
                    cols={30}
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full p-4 rounded-xl text-lg bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,0,0,0.02)] border border-[var(--glass-border)] text-[var(--text-color)] focus:border-[var(--main-color)] focus:bg-[rgba(255,255,255,0.05)] focus:ring-4 focus:ring-[rgba(0,171,240,0.1)] transition-all outline-none resize-none mb-10"
                ></textarea>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-4 rounded-xl text-xl font-bold text-white transition-all outline-none disabled:opacity-70 flex justify-center items-center"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <i className='bx bx-loader-alt animate-spin text-2xl'></i> Sending...
                        </span>
                    ) : "Send Request"}
                </button>
            </motion.form>
        </section>
    );
}
