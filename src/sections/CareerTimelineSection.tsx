"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

const timelineData = [
    { year: "2007", title: "Montreal Magic", desc: "First career win at the Canadian Grand Prix in his rookie season." },
    { year: "2008", title: "Interlagos Drama", desc: "Secures first World Championship on the final corner of the final lap." },
    { year: "2014", title: "The Hybrid Era", desc: "Wins 11 races and clinches his second World Championship with Mercedes." },
    { year: "2018", title: "Singapore Masterclass", desc: "Delivers one of the greatest qualifying laps in F1 history." },
    { year: "2020", title: "Record Breaker", desc: "Surpasses Michael Schumacher's record of 91 Grand Prix victories." },
    { year: "2021", title: "Century Mark", desc: "Becomes the first driver in history to reach 100 wins and 100 pole positions." },
    { year: "2024", title: "Silverstone Return", desc: "Wins the British Grand Prix, breaking the record for most wins at a single circuit." }
];

export default function CareerTimelineSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const container = scrollContainerRef.current;

        if (!section || !container) return;

        // The amount we need to scroll horizontally
        // is the container's scrollWidth minus the viewport width
        const scrollWidth = container.scrollWidth - window.innerWidth;

        const ctx = gsap.context(() => {
            // Pin the section and animate the container horizontally
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                    start: "form start", // Equivalent to "top top"
                    end: () => `+=${scrollWidth}`,
                    anticipatePin: 1,
                }
            });

            tl.to(container, {
                x: -scrollWidth,
                ease: "none"
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="career"
            ref={sectionRef}
            className="h-screen w-full bg-[#111] overflow-hidden relative flex flex-col"
        >
            <div className="absolute top-16 left-6 md:left-12 z-10">
                <h2 className="font-heading text-4xl md:text-6xl text-white font-bold tracking-tight uppercase flex items-center gap-4">
                    Legacy Timeline
                    <MoveRight className="text-[var(--color-primary-red)] w-8 h-8 md:w-12 md:h-12" />
                </h2>
                <p className="font-sans text-gray-400 mt-2">Scroll to explore historic moments</p>
            </div>

            <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />

            {/* The Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex items-center h-full px-[10vw] gap-12 md:gap-32 flex-nowrap w-max relative pt-20"
            >
                {/* Timeline Center Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary-red)] to-[#333] -translate-y-1/2 z-0" />

                {timelineData.map((item, index) => (
                    <div
                        key={item.year}
                        className={`relative w-[80vw] md:w-[30vw] flex-shrink-0 flex flex-col ${index % 2 === 0 ? "justify-start mt-[-20vh]" : "justify-end mb-[-20vh]"} h-[60vh] z-10 timeline-card`}
                    >
                        {/* Timeline Dot connecting to the center line */}
                        <div className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-[var(--color-primary-red)] shadow-[0_0_15px_var(--color-primary-red)] ${index % 2 === 0 ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"}`} />

                        <div className={`w-full p-8 bg-[#0a0a0a] border border-[#222] hover:border-[var(--color-primary-red)] transition-colors duration-500 rounded-xl relative overflow-hidden group shadow-xl`}>
                            <div className="absolute top-0 right-0 p-4 font-heading text-[6rem] leading-none font-bold text-[#1a1a1a] group-hover:text-[#222] transition-colors z-0 select-none">
                                {item.year.substring(2)}
                            </div>

                            <div className="relative z-10">
                                <span className="font-heading text-[var(--color-accent-yellow)] text-xl md:text-2xl font-bold tracking-widest">{item.year}</span>
                                <h3 className="font-sans text-white text-2xl md:text-3xl font-bold mt-2 mb-4 leading-tight">{item.title}</h3>
                                <p className="font-sans text-gray-400 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Red hover accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-primary-red)] group-hover:w-full transition-all duration-500 ease-out" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
