"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Sahil has an amazing attitude to lead and build any kind of project. From its ideation, brainstorming, definition, and build. It doesn't matter how big or small, rationale or crazy the concept is, he will put all of his heart into it.",
            name: "Marga López",
            role: "Senior Software Engineer & Technical Lead",
            image: "https://i.pravatar.cc/150?u=marga"
        },
        {
            quote: "What made it worthwhile was its hands-on, unfiltered format — everything done live, from brainstorming to coding and debugging. Not theory, the actual process of building a startup product step-by-step. I walked away with practical technical insights and a much clearer view of how to take an idea to a product.",
            name: "Aayush Pradhan",
            role: "Student & Aspiring Software Engineer",
            image: "https://i.pravatar.cc/150?u=aayush"
        }
    ];

    return (
        <section id="testimonials" className="py-20 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">TESTIMONIALS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-8 justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-base text-[var(--text-muted)] leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden grayscale border border-[var(--border-color)]">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold tracking-tight">{testimonial.name}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-tight text-[var(--text-muted)]">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
