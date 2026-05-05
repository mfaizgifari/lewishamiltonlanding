"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function FerrariEraSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax for the background
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const xCarRaw = useTransform(scrollYProgress, [0.2, 0.3], ["100%", "15%"]);
    const xCar = useSpring(xCarRaw, {
        stiffness: 50,
        damping: 30,
        mass: 2
    });

    const scaleText = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
    const opacityText = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

    return (
        <section
            id="ferrari"
            ref={sectionRef}
            className="relative w-full h-[150vh] bg-black overflow-hidden flex items-center"
        >
            {/* Dynamic Background */}
            <motion.div
                className="absolute inset-0 z-0 h-[120%]"
                style={{ y: yBg }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[var(--color-primary-red)] to-[#050000] opacity-30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-carbon mix-blend-overlay opacity-60" />
            </motion.div>

            {/* Main Content Container inside sticky container to deal with 150vh */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Typography */}
                <motion.div
                    className="absolute font-heading text-[15rem] md:text-[25rem] font-bold text-[#DC0000] opacity-10 whitespace-nowrap z-0 pointer-events-none tracking-tighter"
                    style={{ x: useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]) }}
                >
                    SCUDERIA FERRARI
                </motion.div>

                <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between pointer-events-none">

                    <motion.div
                        className="w-full md:w-1/2 flex flex-col items-start gap-4 md:gap-6 font-sans text-left px-4 md:px-0"
                        style={{ scale: scaleText, opacity: opacityText }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-[var(--color-accent-yellow)]" />
                            <span className="text-[var(--color-accent-yellow)] tracking-[0.3em] font-bold uppercase text-glow-yellow">A New Chapter</span>
                        </div>
                        <h2 className="font-heading text-5xl md:text-8xl text-white font-bold leading-none tracking-tight text-glow-red">
                            IL CAVALLINO <br /> RAMPANTE
                        </h2>
                        <p className="text-gray-300 text-lg md:text-2xl mt-4 font-light leading-relaxed max-w-xl">
                            Joining Scuderia Ferrari marks the union of the most successful driver in history with the sport's most iconic and storied constructor. A partnership bound by prestige, passion, and the pursuit of the ultimate prize.
                        </p>
                    </motion.div>
                </div>

                {/* Parallax Car Element */}
                <motion.div
                    className="absolute bottom-10 right-0 w-[150vw] md:w-[80vw] z-10 pointer-events-none"
                    style={{ x: xCar }}
                >
                    {/* We use an image with an aggressive blur trailing it for speed effect */}
                    <div className="relative">
                        {/* Speed trails */}
                        <div className="absolute top-1/2 -right-20 w-[60%] h-12 bg-gradient-to-l from-[var(--color-primary-red)] to-transparent blur-xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute top-1/3 -right-32 w-[80%] h-4 bg-gradient-to-l from-[var(--color-accent-yellow)] to-transparent blur-md opacity-40 -translate-y-1/2 translate-x-1/2" />

                        {/* Native AVIF — no further Next.js conversion needed */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/Lewis with old ferarri.avif"
                                alt="Lewis Hamilton with Ferrari"
                                fill
                                quality={80}
                                className="object-cover rounded-xl shadow-[0_0_50px_rgba(220,0,0,0.5)] border-2 border-[#ffdbdb20]"
                                sizes="(max-width: 768px) 150vw, 80vw"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Gradient Overlay at bottom for clean transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />
        </section>
    );
}
