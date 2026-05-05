"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const milestones = [
    { year: "2007", title: "F1 Debut", desc: "Podium in first race, 4 wins in rookie season." },
    { year: "2008", title: "First Championship", desc: "Youngest F1 World Champion at the time." },
    { year: "2014-2020", title: "Mercedes Dominance", desc: "Won 6 additional World Championships." },
    { year: "2020", title: "Record Breaker", desc: "Matched Michael Schumacher's 7 titles." },
    { year: "2025", title: "Scuderia Ferrari", desc: "Joins the most historic team in Formula 1." },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section id="about" ref={sectionRef} className="relative w-full min-h-screen bg-[#0a0a0a] py-32 overflow-hidden border-t border-[#222]">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-carbon opacity-50 z-0 pointer-events-none" />

            {/* Decorative large typography behind */}
            <motion.div
                className="absolute top-1/4 -right-1/4 font-heading text-[20rem] font-bold text-[#111] z-0 opacity-50 select-none whitespace-nowrap"
                style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
            >
                STILL I RISE
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* Left Side: Portrait Image */}
                <motion.div
                    className="w-full lg:w-5/12 aspect-[3/4] relative rounded-lg overflow-hidden border border-[#333] shadow-2xl group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Parallax Image Content */}
                    <motion.div
                        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/lewis-hamilton-ferraril-closeup.avif')",
                            y: imgY
                        }}
                    />
                    {/* Subtle Red Overlay on Hover */}
                    <div className="absolute inset-0 bg-[var(--color-primary-red)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out mix-blend-multiply" />

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary-red)] opacity-50" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-primary-red)] opacity-50" />
                </motion.div>

                {/* Right Side: Animated Text Reveal & Timeline */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider uppercase">
                            The Legend <span className="text-[var(--color-primary-red)] text-glow-red">Evolves</span>
                        </h2>
                        <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
                            From a stunning debut to cementing his status as the most successful driver in Formula 1 history.
                            Sir Lewis Hamilton's journey is defined by raw speed, unmatched racecraft, and an unyielding commitment to excellence both on and off the track.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative border-l-2 border-[#333] pl-8 flex flex-col gap-8">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className="relative"
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: "easeOut" }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-[#111] border-2 border-[var(--color-primary-red)] z-10 shadow-[0_0_10px_var(--color-primary-red)]" />

                                <div className="flex flex-col">
                                    <span className="font-heading text-xl font-bold text-[var(--color-accent-yellow)] tracking-widest uppercase">{item.year}</span>
                                    <h3 className="font-sans text-2xl text-white font-semibold mt-1 mb-2 tracking-wide">{item.title}</h3>
                                    <p className="font-sans text-gray-500 text-sm md:text-base">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
