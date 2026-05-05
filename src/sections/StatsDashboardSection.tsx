"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Gauge, Flag, Trophy, Timer, Flame } from "lucide-react";

export default function StatsDashboardSection() {
    return (
        <section className="py-24 bg-carbon border-b border-[#222]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-1 bg-[var(--color-primary-red)]" />
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-widest text-glow-red">
                        Telemetry Dashboard
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* Stat Cards */}
                    <StatCard icon={<Trophy className="text-[var(--color-accent-yellow)]" />} value={7} label="Championships" />
                    <StatCard icon={<Flag className="text-[var(--color-primary-red)]" />} value={105} label="Race Wins" />
                    <StatCard icon={<Flame className="text-orange-500" />} value={201} label="Podiums" />
                    <StatCard icon={<Timer className="text-blue-400" />} value={104} label="Pole Positions" />
                    <StatCard icon={<Gauge className="text-green-400" />} value={353} label="Total Races" />
                </div>
            </div>
        </section>
    );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] border border-[#222] rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[var(--color-primary-red)] transition-colors duration-300"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#222] to-transparent opacity-20 group-hover:from-[var(--color-primary-red)] transition-colors duration-500 rounded-bl-full" />

            <div className="mb-4 bg-black p-4 rounded-full border border-[#222] group-hover:border-[var(--color-primary-red)] group-hover:shadow-[0_0_15px_var(--color-primary-red)] transition-all duration-300">
                {icon}
            </div>

            <AnimatedCounter value={value} label={label} duration={2} />
        </motion.div>
    );
}
