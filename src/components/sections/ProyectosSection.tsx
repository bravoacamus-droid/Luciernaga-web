'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Correctly mapping the mixed file extensions
const projectImages = [
    // SET 1: Black & White (1-9)
    { id: 1, src: "/images/proyects/1.webp" },
    { id: 2, src: "/images/proyects/2.webp" },
    { id: 3, src: "/images/proyects/3.png" },
    { id: 4, src: "/images/proyects/4.png" },
    { id: 5, src: "/images/proyects/5.png" }, // Adjusted order to grid logic
    { id: 6, src: "/images/proyects/6.webp" },
    { id: 7, src: "/images/proyects/7.webp" },
    { id: 8, src: "/images/proyects/8.png" },
    { id: 9, src: "/images/proyects/9.webp" },

    // SET 2: Color (10-18)
    { id: 10, src: "/images/proyects/10.jpeg" },
    { id: 11, src: "/images/proyects/11.png" },
    { id: 12, src: "/images/proyects/12.png" },
    { id: 13, src: "/images/proyects/13.png" },
    { id: 14, src: "/images/proyects/14.jpeg" }, // Center Image of Set 2
    { id: 15, src: "/images/proyects/15.png" },
    { id: 16, src: "/images/proyects/16.png" },
    { id: 17, src: "/images/proyects/17.png" },
    { id: 18, src: "/images/proyects/18.webp" },
];

export default function ProyectosSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const grid1Ref = useRef<HTMLDivElement>(null);
    const grid2Ref = useRef<HTMLDivElement>(null);
    const overlay1Ref = useRef<HTMLDivElement>(null);
    const overlayFinalRef = useRef<HTMLDivElement>(null);
    const zoomImageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=500%", // Long scroll distance for cinematic effect
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // PHASE 0: Navbar Transparency (Force Override)
            const navbar = document.querySelector("#main-navbar");
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=500%",
                onToggle: (self) => {
                    if (self.isActive && navbar) {
                        gsap.set(navbar, {
                            backgroundColor: "transparent",
                            backdropFilter: "none",
                            borderBottomColor: "transparent",
                        });
                    } else if (navbar) {
                        gsap.set(navbar, { clearProps: "backgroundColor,backdropFilter,borderBottomColor" });
                    }
                }
            });

            // PHASE 1: 3D Puzzle Emergence (Grid 1 - B&W)
            const cells1 = gsap.utils.toArray(".grid-cell-1");
            tl.fromTo(cells1,
                { scale: 0, opacity: 0, z: -500, rotationX: 45 },
                {
                    scale: 1,
                    opacity: 1,
                    z: 0,
                    rotationX: 0,
                    stagger: {
                        amount: 0.8,
                        grid: [3, 3],
                        from: "center"
                    },
                    duration: 2,
                    ease: "power2.out"
                }
            );

            // PHASE 2: Overlay 1 (Intro Text)
            tl.to(overlay1Ref.current, { opacity: 1, duration: 1 });
            tl.to({}, { duration: 1 }); // Pause
            tl.to(overlay1Ref.current, { opacity: 0, duration: 1 });

            // PHASE 3: Sequential Color Replacement (Grid 2 - Color)
            // STRICT SEQUENTIAL: One finishes, next starts.
            const cells2 = gsap.utils.toArray(".grid-cell-2");
            // Total duration needs to stem from stagger. 
            // Duration of tween = 0.5, Stagger = 0.5 => Sequential.
            tl.fromTo(cells2,
                { clipPath: "inset(0 0 0 100%)" },
                {
                    clipPath: "inset(0 0 0 0%)",
                    stagger: 0.5, // Wait fully for previous to end
                    duration: 0.5, // Short wipe per image
                    ease: "power1.inOut"
                }
            );

            // Hide Grid 1 to prevent double-layering during zoom
            tl.to(grid1Ref.current, { opacity: 0, duration: 0.1 });

            // PHASE 4: Subtle Center Zoom (Whole Grid)
            // Slight zoom to the center of the 9 images
            tl.to(grid2Ref.current, {
                scale: 1.3, // Subtle zoom
                transformOrigin: "center center",
                duration: 2,
                ease: "power1.inOut"
            }, "+=0.2");

            // PHASE 5: Final Overlay (Experience & Contact)
            tl.to(overlayFinalRef.current, { opacity: 1, duration: 1.5 });

            // Small pause at the end
            tl.to({}, { duration: 1 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const set1 = projectImages.slice(0, 9);
    const set2 = projectImages.slice(9, 18);

    // Mobile-only object-position overrides per image id.
    // Desktop (lg+) keeps the default 50% 50% (centered) — `max-lg:` prefix
    // ensures these only apply below the lg breakpoint (Android/iOS phones
    // and small tablets), so the desktop puzzle/grid layout is untouched.
    const mobilePositionFor = (id: number): string => {
        const map: Record<number, string> = {
            // SET 1 — B&W (1-9)
            // #2 (top row middle): mover a la derecha / centrar mas
            2: "max-lg:[object-position:65%_50%]",
            // #5 (center of grid, row 2 middle): mover a la derecha
            5: "max-lg:[object-position:70%_50%]",
            // #6 (row 2 right): mover a la derecha
            6: "max-lg:[object-position:70%_50%]",

            // SET 2 — Color (10-18)
            // #13 (row 2 first): mover a la izquierda
            13: "max-lg:[object-position:30%_50%]",
            // #15 (row 2 third): mover a la izquierda
            15: "max-lg:[object-position:30%_50%]",
            // #16 (row 3 first): un poquito mas a la derecha
            16: "max-lg:[object-position:60%_50%]",
        };
        return map[id] || "";
    };

    return (
        <section ref={sectionRef} id="proyectos" className="relative w-full h-screen bg-black overflow-hidden">

            <div ref={containerRef} className="relative w-full h-full">

                {/* --- GRID 1: B&W Images (1-9) --- */}
                <div ref={grid1Ref} className="absolute inset-0 grid grid-cols-3 grid-rows-3 w-full h-full gap-0">
                    {set1.map((img) => (
                        <div key={img.id} className="grid-cell-1 relative w-full h-full overflow-hidden border border-black/50">
                            <Image
                                src={img.src}
                                alt={`Proyecto Luciernaga ${img.id}`}
                                fill
                                className={`object-cover grayscale ${mobilePositionFor(img.id)}`}
                            />
                        </div>
                    ))}
                </div>

                {/* --- GRID 2: Color Images (10-18) --- */}
                {/* Removed clipPath from container, now applied to cells */}
                <div ref={grid2Ref} className="absolute inset-0 grid grid-cols-3 grid-rows-3 w-full h-full gap-0 z-10">
                    {set2.map((img, index) => {
                        return (
                            <div
                                key={img.id}
                                className="grid-cell-2 relative w-full h-full overflow-hidden border border-black/50"
                                style={{ clipPath: 'inset(0 0 0 100%)' }} // Start hidden (masked)
                            >
                                <Image
                                    src={img.src}
                                    alt={`Proyecto Luciernaga ${img.id}`}
                                    fill
                                    className={`object-cover ${mobilePositionFor(img.id)}`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* --- OVERLAY 1: Intro Text --- */}
                <div ref={overlay1Ref} className="absolute inset-0 bg-black/90 flex items-center justify-center z-20 opacity-0 pointer-events-none">
                    <h2 className="text-white text-4xl md:text-6xl font-light uppercase tracking-widest text-center px-4">
                        Donde la estrategia cobra vida
                    </h2>
                </div>

                {/* --- OVERLAY FINAL: Experience & Contact --- */}
                <div ref={overlayFinalRef} className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 opacity-0 px-6 md:px-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        EXPERIENCIA COMPROBADA
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
                        Desde emprendimientos audaces hasta agencias, consultoras, campañas políticas y entidades del Estado. En Luciérnaga hemos iluminado el camino digital de múltiples sectores, transformando desafíos en impacto real. Nuestro portafolio es la evidencia de una metodología que funciona.
                    </p>

                    <a
                        href="#contacto"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1F3FEA] text-white font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#1F3FEA]"
                    >
                        <span className="relative z-10">Contáctanos Ahora</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
                    </a>
                </div>

            </div>

        </section>
    );
}
