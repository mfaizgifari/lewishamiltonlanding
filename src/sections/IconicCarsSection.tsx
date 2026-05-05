"use client";

import { motion } from "framer-motion";

const cars = [
    {
        id: "mclaren",
        name: "McLaren MP4-23",
        year: "2008",
        engine: "Mercedes FO 108V 2.4 L V8",
        stats: "5 Wins, 1 Championship",
        image: "/mp4carlewis.avif",
        color: "from-[#FF8700] to-transparent"
    },
    {
        id: "mercedes",
        name: "Mercedes W11",
        year: "2020",
        engine: "Mercedes-AMG F1 M11 EQ Performance 1.6 L V6 t",
        stats: "11 Wins, 1 Championship",
        image: "/w11lewis.avif",
        color: "from-[#00A19B] to-transparent"
    },
    {
        id: "ferrari",
        name: "Ferrari F1-75",
        year: "2025",
        engine: "Ferrari 066/12 1.6 V6 t",
        stats: "A New Legacy",
        image: "/f1-75lewis.avif",
        color: "from-[#DC0000] to-transparent"
    }
];

export default function IconicCarsSection() {
    return (
        <section id="cars" className="py-24 bg-black overflow-hidden relative border-t border-[#222]">
            <div className="absolute inset-0 bg-carbon mix-blend-multiply opacity-50 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-tight mb-16 flex items-center gap-4">
                    <span className="text-[var(--color-primary-red)] text-glow-red">Iconic</span>
                    Machinery
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cars.map((car, i) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative h-[60vh] rounded-2xl overflow-hidden group border border-[#333] hover:border-[#666] transition-colors shadow-2xl"
                        >
                            {/* Car Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.33,1,0.68,1] group-hover:scale-110"
                                style={{ backgroundImage: `url('${car.image}')` }}
                            />

                            {/* Permanent Base Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80" />

                            {/* Hover Highlight Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${car.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-screen`} />

                            {/* Static Content */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="font-heading text-[var(--color-accent-yellow)] text-xl tracking-widest uppercase font-bold text-glow-yellow mb-2 block">{car.year}</span>
                                <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-wider">{car.name}</h3>
                            </div>

                            {/* Hover Reveal Content */}
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-center items-start translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1]">
                                <h4 className="font-heading text-4xl font-bold text-[var(--color-primary-red)] uppercase mb-6 tracking-wide text-glow-red">{car.name}</h4>

                                <div className="flex flex-col gap-4 font-sans text-gray-300 w-full">
                                    <div className="flex flex-col border-l-2 border-[#333] pl-4">
                                        <span className="text-xs uppercase tracking-widest text-gray-500">Engine Block</span>
                                        <span className="font-semibold text-white">{car.engine}</span>
                                    </div>
                                    <div className="flex flex-col border-l-2 border-[#333] pl-4 mt-2">
                                        <span className="text-xs uppercase tracking-widest text-gray-500">Season Stats</span>
                                        <span className="font-semibold text-[var(--color-accent-yellow)]">{car.stats}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
