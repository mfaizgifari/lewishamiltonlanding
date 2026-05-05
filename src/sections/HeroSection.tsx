"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Background parallax movement
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // Foreground textual parallax and fade
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#070505]">
        {/* Background Image Parallax */}
            <motion.div
                className="absolute inset-0 z-0 h-[120%]"
                style={{ y: yBg }}
            >
                {/* Next.js Image for LCP optimization */}
                <Image
                    src="/heropics.avif"
                    alt="Lewis Hamilton Hero"
                    fill
                    priority
                    quality={85}
                    className="object-cover brightness-75 mix-blend-luminosity"
                    sizes="100vw"
                />
                {/* Dynamic Vignette / Lighting Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#070505_100%)] opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070505]/40 to-[#0A0A0A]" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16"
                style={{ y: yText, opacity: opacityText }}
            >
                {/* Subtitle / Pre-title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-2 mb-4"
                >
                    <Image
                        src="/44lewishero.avif"
                        alt="44 Lewis Hero Logo"
                        width={100}
                        height={100}
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,40,0,0.5)]"
                    />
                    <span className="font-sans text-[var(--color-accent-yellow)] tracking-[0.3em] text-sm md:text-base font-semibold uppercase text-glow-yellow">
                        Scuderia Ferrari HP
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a0a0a0] tracking-tighter leading-none m-0 p-0 mb-4"
                >
                    LEWIS HAMILTON
                </motion.h1>

                {/* Cinematic Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="font-sans text-xl md:text-3xl text-[#ededed] font-light italic tracking-wider max-w-2xl"
                >
                    𝖤̶𝗂̶𝗀̶𝗁̶𝗍̶ Seven-Time Formula 1 World Champion
                </motion.p>

                {/* Animated Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24 mt-12 md:mt-20"
                >
                    <AnimatedCounter value={353} label="Total Races" duration={2} />
                    <AnimatedCounter value={105} label="Race Wins" duration={2} />
                    <AnimatedCounter value={201} label="Podiums" duration={2} />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="font-sans text-xs tracking-widest text-[#a0a0a0] uppercase">Scroll to Accelerate</span>
                <div className="w-px h-16 bg-[#333] relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-primary-red)] shadow-[0_0_10px_var(--color-primary-red)]"
                        animate={{ top: ["-50%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
