"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Megaphone, TrendingUp, Brain } from "lucide-react";

const areas = [
    {
        title: "Comunicación Estratégica",
        icon: Megaphone,
        enfoque: "Acción orientada a la percepción.",
        queHace: "Construir imagen, gestionar reputación, conectar emocionalmente, crear comunidad.",
        incluye: "Redes sociales, PR digital, storytelling, posicionamiento de líderes, gestión de crisis.",
        accent: "border-azul-electric"
    },
    {
        title: "Marketing Digital",
        icon: TrendingUp,
        enfoque: "Crecimiento basado en data.",
        queHace: "Atraer, convertir, fidelizar y escalar audiencias con precisión.",
        incluye: "Campañas, anuncios, funnels, embudos, remarketing.",
        accent: "border-magenta"
    },
    {
        title: "Inteligencia Artificial",
        icon: Brain,
        enfoque: "Tecnología con propósito.",
        queHace: "Optimizar procesos, automatizar tareas, generar insights y crear experiencias inteligentes.",
        incluye: "Creación de contenidos inteligentes, análisis predictivo, personalización.",
        accent: "border-amarillo"
    },
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

    // Video state management
    // 0: Initial state (videos paused/hidden)
    // 1: Playing Intro (escena1.mp4)
    // 2: Playing Loop (escena2.mp4)
    const [videoStage, setVideoStage] = useState(0);
    const introVideoRef = useRef<HTMLVideoElement>(null);
    const loopVideoRef = useRef<HTMLVideoElement>(null);

    // Trigger video sequence when section comes into view
    useEffect(() => {
        if (isInView && videoStage === 0) {
            setVideoStage(1);
            if (introVideoRef.current) {
                introVideoRef.current.play();
            }
        }
    }, [isInView, videoStage]);

    // Handle end of intro video
    const handleIntroEnd = () => {
        setVideoStage(2);
        if (loopVideoRef.current) {
            loopVideoRef.current.play();
        }
    };

    return (
        <section ref={sectionRef} id="nosotros" className="relative w-full py-16 md:py-32 overflow-hidden bg-bg-dark border-t border-border-dim z-10">

            {/* --- BACKGROUND VIDEOS --- */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Overlay to darken video slightly for text readability */}
                <div className="absolute inset-0 bg-[#023566]/30 z-10 mix-blend-multiply" />

                {/* Intro Video (Plays once) */}
                <video
                    ref={introVideoRef}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${videoStage === 1 ? 'opacity-100' : 'opacity-0'}`}
                    src="/escena1.mp4"
                    muted
                    playsInline
                    onEnded={handleIntroEnd}
                />

                {/* Loop Video (Plays infinitely after intro) */}
                <video
                    ref={loopVideoRef}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${videoStage === 2 ? 'opacity-100' : 'opacity-0'}`}
                    src="/escena2.mp4"
                    muted
                    loop
                    playsInline
                />
            </div>


            {/* --- CONTENT (Z-20 to sit above video) --- */}
            <div className="wrapper relative z-20">

                {/* Intro Misión */}
                <div className="max-w-6xl mx-auto mb-24 px-4 text-center">
                    <motion.div
                        className="relative inline-block w-full max-w-5xl group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Shadow Frame (Amarillo) - Left to Right Gradient */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#FFED00] to-white/40 border border-amarillo/30 -translate-x-4 translate-y-3 group-hover:opacity-100 group-hover:-translate-x-5 group-hover:translate-y-4 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.95, skewX: -6 }}
                            whileInView={{ opacity: 0.7, scale: 1, skewX: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        />

                        {/* Main Glass Card */}
                        <div
                            className="relative bg-[#1F3FEA]/80 backdrop-blur-xl border border-white/20 group-hover:border-white/30 p-8 md:p-16 shadow-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                            style={{ transform: 'skewX(-6deg)' }}
                        >
                            {/* Content (Unskewed) */}
                            <div className="transform skew-x-[6deg]">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-amarillo font-mono text-lg md:text-xl mb-6 block tracking-widest uppercase"
                                >
                    // Quiénes Somos
                                </motion.span>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="!text-white !text-xl md:!text-3xl font-bold font-heading leading-tight"
                                >
                                    <span className="text-amarillo">Luciérnaga</span> es una consultora que acompaña a líderes, empresas y organizaciones a posicionarse, crecer y evolucionar en el ecosistema digital. Con un enfoque cercano y profesional, integramos comunicación, marketing y tecnología.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Cita Filosófica (Left Column) */}
                    <div className="lg:col-span-5 h-fit lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 border-l-2 border-amarillo bg-white/10 backdrop-blur-sm"
                        >
                            <h3 className="text-white font-semibold drop-shadow-lg text-xl md:text-2xl italic leading-relaxed mb-6">
                                "Hoy no basta con tener un buen producto o un cargo importante. Si tu marca no se comunica con estrategia, no conecta digitalmente y no evoluciona con inteligencia, pierde relevancia en un mercado que avanza más rápido que nunca."
                            </h3>

                        </motion.div>
                    </div>

                    {/* Pilares Detallados (Right Column) */}
                    <div className="lg:col-span-7">
                        <div className="space-y-8 pl-4 lg:pl-0">
                            {areas.map((area, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                    className="relative group h-full"
                                >
                                    {/* --- BOTTOM LAYER: GOLD/PREMIUM SHADOW FRAME --- */}
                                    <motion.div
                                        className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-[#FFED00] via-[#FFED00] to-white/80 opacity-60 group-hover:opacity-100 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 ease-out"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 0.6, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
                                            borderRadius: '2px' // Subtle softening
                                        }}
                                    />

                                    {/* --- TOP LAYER: GLASSMORPHISM CARD --- */}
                                    <div
                                        className="relative p-8 bg-[#1F3FEA]/90 backdrop-blur-xl border border-white/10 group-hover:border-white/20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)'
                                        }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            {/* Icon */}
                                            <div className="flex-shrink-0 p-3 bg-amarillo/10 rounded-lg group-hover:bg-amarillo/20 transition-colors">
                                                <area.icon className="w-6 h-6 text-amarillo" strokeWidth={2} />
                                            </div>

                                            {/* Title and Badge */}
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-amarillo transition-colors drop-shadow-md mb-2">
                                                    {area.title}
                                                </h3>
                                                <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-white/70 uppercase tracking-wider group-hover:border-amarillo group-hover:text-amarillo transition-colors font-semibold`}>
                                                    {area.enfoque}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                            <div>
                                                <span className="block text-xs uppercase text-text-secondary font-semibold mb-2 group-hover:text-amarillo transition-colors tracking-wide">Qué hacemos</span>
                                                <p className="text-sm text-text-secondary leading-relaxed font-medium group-hover:!text-white transition-colors">{area.queHace}</p>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase text-text-secondary font-semibold mb-2 group-hover:text-amarillo transition-colors tracking-wide">Incluye</span>
                                                <p className="text-sm text-text-secondary leading-relaxed group-hover:!text-white transition-colors font-medium">{area.incluye}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
