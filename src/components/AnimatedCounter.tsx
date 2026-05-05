"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    label: string;
    duration?: number;
}

export default function AnimatedCounter({ value, label, duration = 2 }: AnimatedCounterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const displayRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });
    const [scrambling, setScrambling] = useState(false);

    const springValue = useSpring(0, {
        stiffness: 70,
        damping: 20,
        mass: 1,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            setScrambling(true);

            // Fast randomizer loop
            let scrambleInterval: ReturnType<typeof setInterval>;
            let scrambleCount = 0;
            const targetScrambleFrames = 40; // amount of fast changes (increased for longer duration)

            scrambleInterval = setInterval(() => {
                if (displayRef.current) {
                    // random number up to value + some overshoot
                    const randomVal = Math.floor(Math.random() * (value * 2));
                    displayRef.current.textContent = randomVal.toString();
                }

                scrambleCount++;
                if (scrambleCount > targetScrambleFrames) {
                    clearInterval(scrambleInterval);
                    setScrambling(false);
                    // trigger actual animation to final value
                    springValue.set(value);
                }
            }, 30); // faster interval

            return () => clearInterval(scrambleInterval);
        }
    }, [isInView, springValue, value]);

    // Update the DOM node directly for better performance
    useMotionValueEvent(springValue, "change", (latest) => {
        if (!scrambling && displayRef.current) {
            displayRef.current.textContent = Math.round(latest).toString();
        }
    });

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center p-4">
            <motion.div className="font-heading text-6xl md:text-8xl font-bold text-white tracking-tighter text-glow-red">
                <span ref={displayRef}>0</span>
                <span className="text-[var(--color-primary-red)] text-5xl ml-1">+</span>
            </motion.div>
            <div className="font-sans text-sm md:text-base tracking-widest text-[#a0a0a0] mt-2 uppercase font-semibold">
                {label}
            </div>
        </div>
    );
}
