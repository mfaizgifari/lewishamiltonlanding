"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/Lewis pic.avif", alt: "Lewis Hamilton portrait", className: "md:col-span-2 md:row-span-2" },
    { src: "/lewis car f1 track no 2.avif", alt: "Lewis Hamilton F1 car on track", className: "md:col-span-1 md:row-span-1" },
    { src: "/lewis-hamilton-ferraril-closeup.avif", alt: "Lewis Hamilton Ferrari closeup", className: "md:col-span-1 md:row-span-2" },
    { src: "/Lewis with old ferarri.avif", alt: "Lewis Hamilton with classic Ferrari", className: "md:col-span-2 md:row-span-1" },
    { src: "/lewis f1 ferarri on track.avif", alt: "Lewis Hamilton Ferrari on track", className: "md:col-span-1 md:row-span-1" },
    { src: "/heropics.avif", alt: "Lewis Hamilton hero shot", className: "md:col-span-2 md:row-span-2" },
    { src: "/f1-75lewis.avif", alt: "Lewis Hamilton F1-75", className: "md:col-span-1 md:row-span-1" },
    { src: "/mp4carlewis.avif", alt: "Lewis Hamilton McLaren MP4", className: "md:col-span-1 md:row-span-2" },
    { src: "/w11lewis.avif", alt: "Lewis Hamilton W11", className: "md:col-span-2 md:row-span-1" },
    { src: "/lewisw11.avif", alt: "Lewis Hamilton W11 race", className: "md:col-span-1 md:row-span-1" },
    { src: "/44lewishero.avif", alt: "Lewis Hamilton 44 logo", className: "md:col-span-3 md:row-span-2" },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="py-24 bg-[#0a0a0a] border-t border-[#222]">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-16 px-4">
                    <span className="text-[var(--color-primary-red)] text-glow-red md:mr-4">Visual</span>
                    Archive
                </h2>

                {/* Masonry-style CSS Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.5) }}
                            className={`relative overflow-hidden group rounded-lg border border-[#333] shadow-xl bg-[#111] ${img.className}`}
                        >
                            {/* Next.js Image — lazy loaded automatically */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                quality={75}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-[var(--color-primary-red)] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* View Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[var(--color-primary-red)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                                <div className="w-2 h-2 bg-[var(--color-primary-red)] rounded-full shadow-[0_0_10px_var(--color-primary-red)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
