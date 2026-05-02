'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const consultorias = [
    {
        id: "01",
        title: "Marca Personal",
        image: "/images/consultorias/marca personal.webp",
        tag: "Líder profesional",
        target: "Dirigida a líderes, CEOs, emprendedores, mujeres profesionales, etc.",
        quote: "“Tu nombre ya es una marca, te des cuenta o no. Hagamos que juegue a tu favor”.",
        desc: "Activa tu posicionamiento como líder, conecta con oportunidades y construye una huella digital que represente tu verdadero valor."
    },
    {
        id: "02",
        title: "Comunicación Corporativa",
        image: "/images/consultorias/comunicacion corporativa.webp",
        tag: "Empresa",
        target: "Para empresas, instituciones, consultoras.",
        quote: "“Si tu marca no comunica con intención, otros llenarán el silencio por ti.”",
        desc: "Transforma tu comunicación en una ventaja competitiva y convierte cada punto de contacto en un refuerzo de tu reputación."
    },
    {
        id: "03",
        title: "Comunicación Interna",
        image: "/images/consultorias/comunicacion interna.webp",
        tag: "Colaboradores",
        target: "Para gestionar cultura organizacional y clima laboral.",
        quote: "“Una cultura fuerte no se improvisa: se comunica, se escucha y se construye cada día.”",
        desc: "Activa una comunicación que inspire, alinee y conecte emocionalmente a tu equipo con la visión de tu empresa."
    },
    {
        id: "04",
        title: "Comunicación Política",
        image: "/images/consultorias/comunicacion politica.webp",
        tag: "Perfil político",
        target: "Para candidatos, autoridades, partidos, equipos técnicos.",
        quote: "“No basta con tener la razón, necesitas conectar y persuadir con estrategia.”",
        desc: "Consolida tu liderazgo, controla la narrativa y gana influencia real en el terreno donde hoy se decide todo: lo digital."
    }
];

export default function ConsultoriasSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        // Pin solo en desktop. En mobile renderizamos un layout stackeado
        // sin pin con la descripcion completa de cada consultoria visible.
        const isDesktop =
            typeof window !== "undefined" &&
            window.matchMedia("(min-width: 1024px)").matches;
        if (!isDesktop) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=50%",
                pin: true,
                scrub: true,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
        <section ref={sectionRef} id="consultorias" className="hidden lg:flex relative w-full flex-col lg:flex-row h-screen overflow-hidden" style={{ backgroundColor: '#1F3FEA' }}>
            {/* Top Separators - Estilo Corporativo & Notorio */}
            <div className="absolute top-0 left-0 w-full z-30 flex flex-col items-center">
                {/* Línea Principal Fuerte (Borde de sección) */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

                {/* Línea Secundaria (Detalle estético) */}
                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-40 mt-1.5"></div>

                {/* Elemento Central: Rombo Corporativo */}
                <div className="absolute top-0 -translate-y-1/2 w-3 h-3 bg-[#1F3FEA] border border-white rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.8)] z-40">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
            </div>

            {/* --- LEFT COLUMN: Images (1:1 Square Look) ---
                We make this container take full height on desktop, 
                and ensure the image behaves responsively within that space.
            */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden flex items-center justify-center">
                {/* Inner container to constrain image size */}
                <div className="relative w-[60%] lg:w-[65%] aspect-square shadow-2xl rounded-sm">
                    {consultorias.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded-sm"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
                {/* Overlay gradient for text legibility if needed (mobile mainly) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#023566]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>

            {/* --- RIGHT COLUMN: Content List & Description --- */}
            <div
                className="w-full lg:w-1/2 h-[50vh] lg:h-full flex flex-col justify-between px-8 md:px-16 py-12 lg:py-20 lg:pb-32 relative z-20"
                style={{ backgroundColor: '#1F3FEA' }}
            >
                {/* 1. Services List */}
                <div className="flex flex-col gap-6 lg:gap-8 mt-8 lg:mt-12">
                    <h2 className="text-white text-sm font-mono tracking-widest uppercase mb-4 font-bold">
                        Consultorías Especializadas
                    </h2>

                    <div className="flex flex-col gap-4">
                        {consultorias.map((item, index) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index); }}
                                className="group cursor-pointer flex items-center gap-4 transition-all duration-300"
                            >
                                {/* Hover Circle Indicator */}
                                <div className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:scale-50'
                                    }`} />

                                {/* Title */}
                                <h3 className={`text-3xl md:text-5xl lg:text-5xl font-bold transition-all duration-300 ${activeIndex === index
                                    ? 'text-white opacity-100 translate-x-2'
                                    : 'text-white opacity-40 hover:opacity-100'
                                    }`}>
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Bottom Description Panel (Dynamic) */}
                <div className="mt-8 lg:mt-0 transition-all duration-500 ease-in-out">
                    <div className="border-t border-white/20 pt-6">
                        <div className="flex flex-col gap-4">
                            {/* Header Info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                <span className="bg-[#FFED00] text-black px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold shadow-md">
                                    {consultorias[activeIndex].tag}
                                </span>
                                <span className="font-medium !text-white !opacity-100" style={{ color: '#FFFFFF' }}>
                                    {consultorias[activeIndex].target}
                                </span>
                            </div>

                            {/* Quote */}
                            <p className="text-xl md:text-2xl font-light italic !text-white !opacity-100 leading-snug" style={{ color: '#FFFFFF' }}>
                                {consultorias[activeIndex].quote}
                            </p>

                            {/* Full Description */}
                            <p className="!text-white !opacity-100 text-sm md:text-base leading-relaxed max-w-xl font-medium" style={{ color: '#FFFFFF' }}>
                                {consultorias[activeIndex].desc}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* ============================================================
            MOBILE: stacked cards with full description always visible.
            No pin, no hover-driven swap — every consultoria shows its
            image + tag + target + quote + desc inline.
           ============================================================ */}
        <section className="lg:hidden relative z-20 py-14 px-4 sm:px-6" style={{ backgroundColor: '#1F3FEA' }}>
            {/* Section header */}
            <div className="max-w-2xl mx-auto mb-10">
                <h2 className="text-white text-sm font-mono tracking-widest uppercase mb-3 font-bold">
                    Consultorías Especializadas
                </h2>
                <div className="h-[2px] w-16 bg-amarillo" />
            </div>

            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                {consultorias.map((item) => (
                    <article
                        key={item.id}
                        className="bg-[#023566] shadow-2xl overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/30">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, 600px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#023566] via-transparent to-transparent" />
                            {/* Tag badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#FFED00] text-black px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold shadow-md">
                                    {item.tag}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-5 pt-5 pb-6">
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-white/70 text-xs font-medium mb-4">
                                {item.target}
                            </p>

                            <p className="text-white text-base font-light italic leading-snug border-l-2 border-amarillo pl-4 mb-4">
                                {item.quote}
                            </p>

                            <p className="text-white/85 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
        </>
    );
}
