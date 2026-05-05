"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function QuoteSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-10%" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden border-t border-b border-[#222]">
            {/* Background Animated Racing Lights - Hyper Fast */}
            <div className="absolute inset-0 z-0 opacity-60">
                <motion.div
                    animate={{
                        x: ["-100vw", "100vw"],
                    }}
                    transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.05
                    }}
                    className="absolute top-1/4 h-3 w-[70vw] bg-gradient-to-r from-transparent via-[var(--color-primary-red)] to-transparent blur-md"
                />
                <motion.div
                    animate={{
                        x: ["-100vw", "100vw"],
                    }}
                    transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.1
                    }}
                    className="absolute top-1/2 h-2 w-[40vw] bg-gradient-to-r from-transparent via-[var(--color-accent-yellow)] to-transparent blur-[3px]"
                />
                <motion.div
                    animate={{
                        x: ["-100vw", "100vw"],
                    }}
                    transition={{
                        duration: 0.25,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.02
                    }}
                    className="absolute bottom-1/4 h-6 w-[80vw] bg-gradient-to-r from-transparent via-[var(--color-primary-red)] to-transparent blur-xl opacity-80"
                />
                <motion.div
                    animate={{
                        x: ["100vw", "-100vw"],
                    }}
                    transition={{
                        duration: 0.35,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.15
                    }}
                    className="absolute top-3/4 h-1 w-[60vw] bg-gradient-to-l from-transparent via-white to-transparent blur-sm opacity-50"
                />
            </div>

            <motion.div
                className="relative z-10 text-center px-6"
                style={{ scale, opacity }}
            >
                <motion.div
                    animate={{
                        x: [0, -3, 3, -1, 1, -4, 4, 0],
                        y: [0, 2, -2, 1, -1, 3, -3, 0]
                    }}
                    transition={{
                        duration: 0.15,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear"
                    }}
                >
                    <motion.p
                        className="font-heading text-7xl md:text-[10rem] font-bold text-white uppercase tracking-tighter"
                        animate={{
                            textShadow: [
                                "0 0 20px var(--color-primary-red), -5px 0 0px var(--color-primary-red)",
                                "0 0 40px var(--color-primary-red), 5px 0 0px var(--color-accent-yellow)",
                                "0 0 20px var(--color-primary-red), -5px 0 0px var(--color-primary-red)",
                            ]
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <span className="italic pr-4">"STILL I RISE"</span>
                    </motion.p>
                </motion.div>

                <motion.div
                    animate={{
                        width: ["100%", "120%", "100%"],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                    className="w-32 h-2 bg-[var(--color-primary-red)] mx-auto mt-8 mb-6 shadow-[0_0_20px_var(--color-primary-red)]"
                />

                <motion.p
                    animate={{
                        opacity: [0.7, 1, 0.7],
                        x: [-1, 1, -1]
                    }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="font-sans text-gray-200 tracking-[0.5em] uppercase text-lg md:text-2xl font-bold"
                >
                    Lewis Hamilton
                </motion.p>
            </motion.div>
        </section>
    );
}
