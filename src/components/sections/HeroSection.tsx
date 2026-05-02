"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [startAnimation, setStartAnimation] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Detect mobile to drop heavy filter() animations (blur is GPU-
            // expensive on phones and causes the laggy feel the user reported).
            setIsMobile(window.matchMedia("(max-width: 1023px)").matches);

            const introShown = sessionStorage.getItem("introShown");
            if (introShown) {
                // Si ya se mostró antes, no animamos entrada, mostramos directo.
                // O animamos rápido.
                // Para consistencia con la petición "efecto de aparición", lo mantendré animado pero inmediato.
                setStartAnimation(true);
            }
        }

        const handleIntroComplete = () => {
            // AUMENTADO DELAY: Esperar 800ms a que el IntroLoader (framer motion exit) termine de desvanecerse
            // El IntroLoader tiene transition={{ duration: 0.8 }} en su salida.
            // Empezamos la animación del Hero justo cuando el telón ha caído.
            setTimeout(() => {
                setStartAnimation(true);
            }, 800);
        };

        window.addEventListener("intro-complete", handleIntroComplete);
        return () => window.removeEventListener("intro-complete", handleIntroComplete);
    }, []);

    // --- ANIMATION VALUES ---

    // 1. TEXTO TRASERO
    const textBackY = useTransform(scrollYProgress, [0, 0.7], ["38vh", "-50vh"]);
    const textBackOpacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [1, 0.5, 0]);
    // Mobile: skip blur — heavy GPU filter causes jank on phones
    const textBackBlur = useTransform(
        scrollYProgress,
        [0, 0.15, 0.45],
        isMobile
            ? ["blur(0px)", "blur(0px)", "blur(0px)"]
            : ["blur(0px)", "blur(6px)", "blur(14px)"]
    );

    // 2. TEXTO DELANTERO
    const textFrontY = useTransform(scrollYProgress, [0, 0.55], ["100vh", "56vh"]);

    // 3. TAGLINE
    const taglineOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
    const taglineBlur = useTransform(
        scrollYProgress,
        [0.4, 0.55],
        isMobile ? ["blur(0px)", "blur(0px)"] : ["blur(10px)", "blur(0px)"]
    );
    const taglineY = useTransform(scrollYProgress, [0.4, 0.55], ["10px", "0px"]);

    // 4. BLUE GLOW
    const blueGlowOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);

    // 5. BACKGROUND RADIAL
    const bgRadialOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);


    return (
        <section
            ref={containerRef}
            id="inicio"
            // lvh on mobile: stable measurement based on the *largest* viewport
            // (URL-bar hidden state). Avoids the "section shrinks suddenly when
            // URL bar collapses on first scroll" jump that left a black gap.
            className="relative w-full h-[180lvh] md:h-[180vh]"
        >
            <div
                // Inner stage uses lvh too so the fixed div always covers the
                // whole physical viewport — no black strip at the bottom when
                // mobile URL bar hides during scroll.
                className="fixed top-0 left-0 h-[100lvh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0"
                style={{
                    background: 'linear-gradient(180deg, #010b14 0%, #023566 50%, #1F3FEA 100%)'
                }}
            >

                {/* --- LAYER 0: Background Radial --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={startAnimation ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    style={{ opacity: bgRadialOpacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div
                        className="w-full h-full"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 45%, rgba(31,63,234,0.5) 0%, rgba(2,53,102,0.3) 40%, transparent 70%)'
                        }}
                    />
                </motion.div>

                {/* --- LAYER 1: TEXTO TRASERO --- */}
                <motion.h2
                    style={{
                        y: textBackY,
                        opacity: textBackOpacity,
                        filter: textBackBlur
                    }}
                    className="absolute w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 z-10 tracking-tighter px-4"
                >
                    {/* ENTRADA ESCALONADA */}
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }} // Starts almost immediately after startAnimation triggers (800ms global delay)
                        className="block text-[8vw] md:text-[5vw] leading-[1] uppercase whitespace-normal md:whitespace-nowrap"
                    >
                        Deja de pensar
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                        className="block text-[8vw] md:text-[5vw] leading-[1] uppercase whitespace-normal md:whitespace-nowrap"
                    >
                        En pequeño
                    </motion.span>
                </motion.h2>

                {/* --- LAYER 2: CEO IMAGE --- */}
                <div className="relative z-20 w-auto h-[50vh] md:h-[65vh] max-h-[900px] aspect-[3/4] flex items-end -mt-6 md:-mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ opacity: blueGlowOpacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#1F3FEA]/30 blur-[80px] md:blur-[100px] rounded-full"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={startAnimation ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/ceo.webp"
                            alt="CEO Luciernaga"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>

                {/* --- LAYER 3: TEXTO DELANTERO --- */}
                <motion.h2
                    style={{ y: textFrontY }}
                    className="absolute top-0 w-full text-center font-bold text-white uppercase tracking-tighter leading-[1] drop-shadow-xl z-30 pointer-events-none px-4"
                >
                    <span className="block text-[7vw] md:text-[4.5vw]">Es momento</span>
                    <span className="block text-[7vw] md:text-[4.5vw]">De liderar con</span>
                    <span className="block text-[7vw] md:text-[4.5vw] text-amarillo">Estrategia</span>
                </motion.h2>

                {/* --- LAYER 4: TAGLINE --- */}
                <motion.p
                    style={{
                        opacity: taglineOpacity,
                        filter: taglineBlur,
                        y: taglineY
                    }}
                    className="absolute top-0 w-full text-center text-white uppercase tracking-[0.15em] z-30 pointer-events-none px-6 md:px-20"
                >
                    <span
                        className="block mt-[calc(78vh+5vw)] md:mt-[calc(56vh+15vw)] text-[clamp(0.75rem,2.5vw,0.95rem)] md:text-[1vw] font-medium leading-relaxed max-w-md md:max-w-none mx-auto"
                    >
                        Diseñamos la arquitectura de influencia para el top 1% de líderes que exigen resultados medibles donde la comunicación convencional se detiene.
                    </span>
                </motion.p>

            </div>
        </section>
    );
}
