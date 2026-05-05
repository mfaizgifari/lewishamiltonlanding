"use client";

import { useState } from "react";
import { Instagram, Twitter, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#career", label: "CAREER" },
    { href: "#ferrari", label: "SCUDERIA" },
    { href: "#gallery", label: "GALLERY" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
            setMobileOpen(false); // close mobile menu on scroll down
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-colors duration-300 ${
                    scrolled || mobileOpen
                        ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222]"
                        : "bg-transparent"
                }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-heading text-2xl font-bold italic tracking-wider text-white">44</span>
                    <div className="w-px h-6 bg-[#333] mx-2" />
                    <span className="font-heading text-xl font-medium tracking-widest text-[#ededed] uppercase">
                        Lewis Hamilton
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest text-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`hover:text-[var(--color-primary-red)] transition-colors ${
                                link.label === "SCUDERIA" ? "text-glow-yellow" : ""
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right: Social + Hamburger */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://instagram.com/lewishamilton"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Lewis Hamilton Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://twitter.com/lewishamilton"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Lewis Hamilton Twitter"
                    >
                        <Twitter size={20} />
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-[64px] left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222] overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-0 py-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.25 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="w-full text-center py-4 font-heading text-lg tracking-widest text-gray-300 hover:text-[var(--color-primary-red)] hover:bg-[#111] transition-all border-b border-[#1a1a1a] last:border-0"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
