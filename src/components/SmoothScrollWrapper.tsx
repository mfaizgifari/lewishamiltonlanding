"use client";

import { useEffect, ReactNode, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    useEffect(() => {
        // Sync Lenis scroll with GSAP's ticker for seamless animations
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            root
            ref={lenisRef}
            autoRaf={false}
            options={{
                lerp: 0.08,             // Slower lerp for that heavy, accelerating feel
                duration: 1.5,          // Slower duration
                smoothWheel: true,
                orientation: "vertical",
                gestureOrientation: "vertical",
                wheelMultiplier: 1,
            }}
        >
            {children as any}
        </ReactLenis>
    );
}
