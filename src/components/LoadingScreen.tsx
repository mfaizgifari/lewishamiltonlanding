"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        // Simple and fast timeout
        const timer = setTimeout(() => {
            setIsDone(true);
            onComplete();
        }, 1200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isDone && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-4xl md:text-6xl tracking-[0.2em] font-bold text-white uppercase text-glow-red"
                    >
                        LEWIS HAMILTON
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
