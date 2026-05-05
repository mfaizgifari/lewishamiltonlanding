"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Footer() {
    const lenis = useLenis();

    const navLinks = [
        { name: "HOME", href: "#top" }, 
        { name: "ABOUT", href: "#about" },
        { name: "TROPHIES", href: "#career" },
        { name: "SCUDERIA", href: "#ferrari" },
        { name: "CARS", href: "#cars" },
        { name: "GALLERY", href: "#gallery" },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (lenis) {
            if (href === "#top") {
                lenis.scrollTo(0, { duration: 1.5 });
            } else {
                lenis.scrollTo(href, { duration: 1.5 });
            }
        } else {
            // Fallback if lenis isn't ready
            if (href === "#top") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    return (
        <footer className="relative bg-[#050505] border-t border-[#222] pt-24 pb-8 overflow-hidden flex flex-col items-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-red)] to-transparent opacity-30 blur-sm" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Massive Animated Navigation */}
                <nav className="flex flex-col mb-24 w-full">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="group relative flex overflow-hidden border-b border-[#111] last:border-b-0 py-2 md:py-4 cursor-pointer"
                        >
                            {link.name.split("").map((letter, i) => (
                                <span key={i} className="relative block overflow-hidden pointer-events-none">
                                    {/* Base Text (Visible by default) */}
                                    <span 
                                        className="block transition-transform duration-[0.6s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-[13vw] md:text-[9vw] font-black uppercase tracking-tighter text-transparent font-heading [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.4)] leading-[1] md:leading-[0.9]"
                                        style={{ transitionDelay: `${i * 0.03}s` }}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </span>
                                    {/* Hover Text (Revealed on hover from below) */}
                                    <span 
                                        className="absolute top-full left-0 block transition-transform duration-[0.6s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-[13vw] md:text-[9vw] font-black uppercase tracking-tighter text-[var(--color-primary-red)] font-heading leading-[1] md:leading-[0.9] text-glow-red"
                                        style={{ transitionDelay: `${i * 0.03}s` }}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </span>
                                </span>
                            ))}
                        </a>
                    ))}
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-heading text-2xl font-bold tracking-widest text-white italic">LEWIS HAMILTON</h3>
                        <p className="text-gray-400 font-sans text-sm max-w-xs">
                            Seven-Time Formula 1 World Champion. A legacy of speed, precision, and relentless pursuit of greatness.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-4">
                        <h4 className="font-heading text-lg font-bold tracking-widest text-[#ededed]">CONNECT</h4>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/lewishamilton" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] transition-all duration-300 border border-[#222]">
                                IG
                            </a>
                            <a href="https://twitter.com/lewishamilton" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] transition-all duration-300 border border-[#222]">
                                X
                            </a>
                            <a href="https://www.lewishamilton.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] transition-all duration-300 border border-[#222]">
                                W
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans tracking-wide">
                    <p>© {new Date().getFullYear()} Lewis Hamilton Tribute Portfolio. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Inspired by Lando Norris | Designed with Next.js, Framer Motion & GSAP</p>
                </div>
            </div>
        </footer>
    );
}
