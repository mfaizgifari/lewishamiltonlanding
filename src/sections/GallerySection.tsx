"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

const baseImages = [
    { src: "/Lewis pic.avif", alt: "Lewis Hamilton portrait", width: 600, height: 800 },
    { src: "/lewis car f1 track no 2.avif", alt: "Lewis Hamilton F1 car on track", width: 800, height: 500 },
    { src: "/lewis-hamilton-ferraril-closeup.avif", alt: "Lewis Hamilton Ferrari closeup", width: 500, height: 700 },
    { src: "/Lewis with old ferarri.avif", alt: "Lewis Hamilton with classic Ferrari", width: 1000, height: 600 },
    { src: "/lewis f1 ferarri on track.avif", alt: "Lewis Hamilton Ferrari on track", width: 800, height: 600 },
    { src: "/heropics.avif", alt: "Lewis Hamilton hero shot", width: 900, height: 700 },
    { src: "/f1-75lewis.avif", alt: "Lewis Hamilton F1-75", width: 1200, height: 800 },
    { src: "/mp4carlewis.avif", alt: "Lewis Hamilton McLaren MP4", width: 700, height: 900 },
    { src: "/w11lewis.avif", alt: "Lewis Hamilton W11", width: 1100, height: 600 },
    { src: "/lewisw11.avif", alt: "Lewis Hamilton W11 race", width: 800, height: 500 },
    { src: "/44lewishero.avif", alt: "Lewis Hamilton 44 logo", width: 600, height: 400 },
];

// Duplicate the images array to create a seamless loop
const images = [...baseImages, ...baseImages];

export default function GallerySection() {
    const { height } = useWindowSize();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section 
            id="gallery" 
            className="bg-[#0a0a0a] border-t border-[#222] py-24 overflow-hidden flex flex-col justify-center"
        >
            <div className="container mx-auto px-6 md:px-12 mb-12">
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-widest px-4">
                    <span className="text-[var(--color-primary-red)] text-glow-red md:mr-4">Visual</span>
                    Archive
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="w-full overflow-hidden flex">
                <motion.div 
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-4 md:gap-8 px-4 items-center w-max"
                >
                    {images.map((img, i) => {
                        const alignSelf = i % 3 === 0 ? "flex-start" : i % 3 === 1 ? "center" : "flex-end";
                        
                        return (
                            <motion.div
                                key={i}
                                className={`relative overflow-hidden group rounded-lg border border-[#333] shadow-xl bg-[#111] shrink-0`}
                                style={{ 
                                    width: `${Math.max(280, Math.min(img.width / 1.5, 600))}px`,
                                    height: `${Math.max(300, Math.min(img.height / 1.5, 500))}px`,
                                    alignSelf: mounted && height > 800 ? alignSelf : 'center'
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={80}
                                />
                                {/* Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-[var(--color-primary-red)] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                
                                {/* View Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[var(--color-primary-red)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                                    <div className="w-2 h-2 bg-[var(--color-primary-red)] rounded-full shadow-[0_0_10px_var(--color-primary-red)]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
