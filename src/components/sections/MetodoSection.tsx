"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const methodSteps = [
    {
        char: "S",
        title: "Situación",
        subtitle: "Diagnóstico",
        text: "Evaluamos el estado actual de tu marca, su posicionamiento, percepción y canales digitales para identificar fortalezas, oportunidades y brechas.",
        color: "#1F3FEA",
        imgHorizontal: "/images/metodo/fase1horizontal.webp",
        imgVertical: "/images/metodo/fase1vertical.webp"
    },
    {
        char: "E",
        title: "Estrategia",
        subtitle: "Hoja de Ruta",
        text: "Trazamos el camino. Definimos objetivos claros, públicos clave y la dirección que alineará todas tus acciones con tus metas de negocio.",
        color: "#F33869",
        imgHorizontal: "/images/metodo/fase2horizontal.webp",
        imgVertical: "/images/metodo/fase2vertical.webp"
    },
    {
        char: "N",
        title: "Narrativa",
        subtitle: "Voz Auténtica",
        text: "Construimos tu voz. Diseñamos el mensaje central, tono, pilares de contenido y storytelling que conecten con tu audiencia desde la autenticidad.",
        color: "#FFED00",
        imgHorizontal: "/images/metodo/fase3horizontal.webp",
        imgVertical: "/images/metodo/fase3vertical.webp"
    },
    {
        char: "T",
        title: "Tácticas",
        subtitle: "Visibilidad",
        text: "Seleccionamos los canales y acciones más efectivos (redes, web, email, UGC/EGC) para que tu marca se vea donde importa y cuando importa.",
        color: "#1F3FEA",
        imgHorizontal: "/images/metodo/fase4horizontal.webp",
        imgVertical: "/images/metodo/fase4vertical.webp"
    },
    {
        char: "I",
        title: "Impulso",
        subtitle: "Aceleración Digital",
        text: "Activamos campañas, contenidos, automatizaciones y herramientas de IA que potencien tu presencia, generen interacción y conviertan.",
        color: "#F33869",
        imgHorizontal: "/images/metodo/fase5horizontal.webp",
        imgVertical: "/images/metodo/fase5vertical.webp"
    },
    {
        char: "D",
        title: "Despliegue",
        subtitle: "Ejecución",
        text: "Ejecutamos con orden. Implementamos tu plan integral asegurando coherencia visual, discursiva y estratégica en todos los frentes.",
        color: "#FFED00",
        imgHorizontal: "/images/metodo/fase6horizontal.webp",
        imgVertical: "/images/metodo/fase6vertical.webp"
    },
    {
        char: "O",
        title: "Optimización",
        subtitle: "Mejora Continua",
        text: "Medimos, analizamos y afinamos. A partir de los datos, ajustamos continuamente para maximizar resultados y garantizar evolución constante.",
        color: "#1F3FEA",
        imgHorizontal: "/images/metodo/fase7horizontal.webp",
        imgVertical: "/images/metodo/fase7vertical.webp"
    },
];

function MethodPhase({ step, i }: { step: any, i: number }) {
    const isFirst = i === 0;
    const isLast = i === 6;

    return (
        <div
            className={`relative flex-1 min-h-[260px] lg:min-h-0 group transition-[flex-grow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:grow-[6] border-r border-white/10 lg:-skew-x-6 bg-[#030712] ${isFirst ? "lg:-ml-8 lg:pl-8" : ""} ${isLast ? "lg:-mr-8 lg:pr-8" : ""}`}
        >
            {/* Background Image Container - Clipped to Skew Shape */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Counter-skew wrapper for image (only at lg+ where parent is skewed) */}
                <div className="w-full lg:w-[150%] h-full lg:-ml-[25%] lg:skew-x-6 relative">
                    <img
                        src={step.imgHorizontal}
                        alt={step.title}
                        className="hidden lg:block w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    />
                    <img
                        src={step.imgVertical}
                        alt={step.title}
                        className="block lg:hidden w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent z-[1] group-hover:opacity-0 transition-opacity duration-700"></div>
                {/* Reduced opacity for non-active state */}
                <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-700 z-[2]"></div>
            </div>

            {/* Content Container - Counter Skewed (only at lg+) */}
            <div className={`absolute inset-0 z-20 lg:skew-x-6 flex flex-col items-center pointer-events-none ${i % 2 === 0 ? "justify-end pb-8 lg:pb-12" : "justify-start pt-24 lg:pt-32"}`}>

                {/* Letter & Circle Animated Container - RESTORED EXACT POSITIONING & ANIMATION */}
                <div
                    className="absolute -top-11 md:-top-18 left-1/2 -translate-x-1/2 flex items-center justify-center z-30 pointer-events-none w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-transparent transition-all duration-300 ease-out group-hover:scale-110"
                    style={{
                        borderColor: 'transparent',
                    }}
                >
                    {/* Simulated Border on Hover */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ borderColor: step.color }}
                    ></div>

                    {/* Letter */}
                    <span
                        className="text-3xl md:text-5xl font-black select-none pt-1"
                        style={{ color: step.color }}
                    >
                        {step.char}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 lg:px-10 w-full flex flex-col items-center text-center pointer-events-auto">

                    <div className="bg-[#023566]/20 backdrop-blur-2xl border border-white/10 py-6 lg:py-7 px-8 lg:px-12 flex flex-col items-center w-full max-w-3xl transition-all duration-500 group-hover:bg-[#023566]/30 group-hover:border-white/20 shadow-2xl backdrop-filter">

                        {/* Inner content wrapper */}
                        <div className="w-full flex flex-col items-center">
                            <div className="flex flex-row items-center gap-3 mb-2">
                                <span className="text-[10px] lg:text-xs font-mono text-amarillo uppercase tracking-[0.3em]">Fase 0{i + 1}</span>
                                <div className="h-3 w-[1px] bg-white/30"></div>
                                <span className="text-[10px] lg:text-xs font-bold text-white/90 uppercase tracking-[0.2em]">{step.subtitle}</span>
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-black text-white group-hover:text-amarillo transition-colors duration-500">
                                {step.title}
                            </h3>

                            <div className="overflow-hidden max-h-0 opacity-0 -translate-y-4 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-6 transition-all duration-700 ease-in-out">
                                <p className="!text-white text-lg lg:text-xl leading-relaxed font-bold drop-shadow-md">
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Accent Line */}
            <div
                className={`absolute top-0 left-0 h-1.5 z-20 group-hover:h-2 transition-all duration-500 ${isLast ? "w-full lg:w-[calc(100%-2rem)]" : "w-full"}`}
                style={{ backgroundColor: step.color }}
            ></div>
        </div>
    );
}

export default function MetodoSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Removed CTA logic - Moving to EquipoSection for cleaner transition

    return (
        <section ref={sectionRef} id="metodologia" className="relative lg:sticky lg:top-0 z-0 min-h-[100svh] lg:h-screen lg:mb-[90vh] overflow-hidden bg-[#023566] text-white flex flex-col pt-12 pb-20 lg:pt-0 lg:pb-0">

            {/* Header Intro */}
            <div className="w-full px-4 md:px-8 lg:px-16 py-12 lg:pt-12 lg:pb-8 bg-[#023566] relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="text-left">
                        <span className="text-amarillo font-mono text-sm uppercase tracking-widest block mb-2">
                            // Nuestro Framework
                        </span>
                        <h2 className="text-white text-3xl lg:text-4xl font-black">
                            Método S.E.N.T.I.D.O.
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm lg:text-base max-w-xl border-l-4 border-amarillo pl-4">
                        Framework de Posicionamiento Estratégico. Un proceso lineal y evolutivo.
                    </p>
                </div>
            </div>

            {/* Accordion Container */}
            <div className="flex flex-col lg:flex-row flex-1 w-full relative z-20 gap-12 lg:gap-2 mt-12 lg:mt-20 px-4 lg:px-0">
                {methodSteps.map((step, i) => (
                    <MethodPhase key={i} step={step} i={i} />
                ))}
            </div>
        </section>
    );
}
