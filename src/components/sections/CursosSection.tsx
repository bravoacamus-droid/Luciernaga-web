'use client';

import React, { useState, useRef, memo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// --- DATA ---
const courses = [
    {
        id: 'prompting',
        title: 'Prompting para ChatGPT y herramientas IA',
        type: 'DIPLOMADO INTERNACIONAL',
        detail: 'Diplomado Internacional',
        imgName: 'prompting.png',
        logoName: 'logoprompting.png',
        description: 'Domina la ingeniería de prompts. Aprende a estructurar comandos precisos para maximizar el potencial de ChatGPT y otras IAs generativas.',
        target: 'Profesionales, Marketers y Devs.'
    },
    {
        id: 'linkedin',
        title: 'LinkedIN desde cero con IA',
        type: 'TALLER PRESENCIAL',
        detail: '+ 150 asistentes',
        imgName: 'linkedin.png',
        logoName: 'logolinkedin.png',
        description: 'Potencia tu marca personal y estrategia B2B. Optimiza tu perfil, genera contenido viral y conecta con oportunidades de alto valor.',
        target: 'Emprendedores y Buscadores de Empleo.'
    },
    {
        id: 'netzun',
        title: 'Cursos Netzun',
        type: 'PLATAFORMA ONLINE',
        detail: '+ 8MIL Capacitados',
        imgName: 'netzun.png',
        logoName: 'netzunlogo.png',
        description: 'Acceso ilimitado a una biblioteca de conocimiento. Fórmate en las habilidades más demandadas con una plataforma líder.',
        target: 'Estudiantes y Profesionales.'
    },
    {
        id: 'liderazgo',
        title: 'LIDERAZGO FEMENINO EN LA ERA DE LA IA',
        type: 'PROGRAMA EXCLUSIVO',
        detail: '+ 60 asistentes',
        imgName: 'liderazgo.png',
        logoName: 'logoliderazgo.png',
        description: 'Un programa exclusivo que fusiona habilidades directivas con el poder de la Inteligencia Artificial para mujeres visionarias.',
        target: 'Mujeres Ejecutivas y Líderes.'
    },
    {
        id: 'iaparamarcas',
        title: 'IA PARA MARCAS CON GARRA',
        type: 'BOOTCAMP INTENSIVO',
        detail: '+ 150 asistentes',
        imgName: 'iaparamarcas.png',
        logoName: 'logoiaparamarcas.png',
        description: 'Marketing disruptivo. Crea identidades de marca sólidas y campañas impactantes utilizando herramientas de vanguardia.',
        target: 'Agencias y Brand Managers.'
    }
];

// --- COMPONENT: FolderCard (Memoized) ---
const FolderCard = memo(function FolderCard({
    course,
    isActive,
    isOpen,
    positionState,
    onClick
}: {
    course: typeof courses[0],
    isActive: boolean,
    isOpen: boolean,
    positionState: string,
    onClick?: () => void
}) {

    // Animation Variants
    const cardVariants = {
        center: { x: 0, scale: 1, opacity: 1, zIndex: 20 },
        left: { x: -380, scale: 0.65, opacity: 0.6, zIndex: 10 },
        right: { x: 380, scale: 0.65, opacity: 0.6, zIndex: 10 },
        hidden: { x: 0, scale: 0.4, opacity: 0, zIndex: 0 }
    };

    const sheetState = isActive && isOpen ? "open" : "closed";

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[850px] flex flex-col items-center justify-end cursor-pointer perspective-1000"
            variants={cardVariants}
            animate={positionState}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            onClick={onClick}
        >

            {/* The Folder Wrapper */}
            <motion.div
                className="relative w-[400px] h-[300px] mb-14 origin-bottom flex items-end justify-center"
                animate={sheetState}
                initial="closed"
            >
                {/* --- LADO A (Back) --- */}
                <div className="absolute inset-x-0 bottom-0 z-10 w-full h-[300px]">
                    <Image
                        src="/images/cursos/ladoa.png"
                        alt="Folder Back"
                        fill
                        sizes="400px"
                        className="object-contain object-bottom"
                        priority={isActive}
                    />
                </div>

                {/* --- SHEETS (Content) --- */}
                <div className="absolute inset-x-0 bottom-[10px] h-[600px] z-20 flex justify-center items-end pointer-events-none">

                    {/* Left Sheet: Image */}
                    <motion.div
                        className="absolute w-[360px] h-[460px] origin-bottom sm:origin-bottom-center md:origin-bottom-center z-20"
                        variants={{
                            closed: { y: -50, x: 0, rotate: 0, scale: 0.1, opacity: 0, transition: { duration: 0.35, ease: "backIn" } },
                            open: { y: -260, x: -180, rotate: -10, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 70, damping: 12, delay: 0.1 } }
                        }}
                    >
                        <Image
                            src={`/images/cursos/${course.imgName}`}
                            alt={course.title}
                            fill
                            sizes="360px"
                            loading={isActive ? undefined : 'lazy'}
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Right Sheet: INFO (Square Corners) */}
                    <motion.div
                        className="absolute w-[340px] h-[420px] bg-white shadow-2xl border-l border-gray-100 p-8 flex flex-col justify-start origin-bottom z-10 text-left overflow-hidden rounded-none"
                        variants={{
                            closed: { y: -50, x: 0, rotate: 0, scale: 0.1, opacity: 0, transition: { duration: 0.35, ease: "backIn" } },
                            open: { y: -220, x: 180, rotate: 10, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 70, damping: 12, delay: 0.2 } }
                        }}
                    >
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F33869] to-[#1F3FEA]"></div>

                        {/* Badge - Square */}
                        <div className="mb-4 pt-2">
                            <span className="bg-[#023566]/10 text-[#023566] text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-[#023566]/20 rounded-none">
                                {course.detail}
                            </span>
                        </div>

                        {/* Description Section */}
                        <div className="mb-5">
                            <h5 className="text-[#F33869] font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-100 pb-1">
                                Descripción
                            </h5>
                            <p className="text-[#023566] text-sm leading-relaxed font-medium">
                                {course.description}
                            </p>
                        </div>

                        {/* Separator with Amarillo */}
                        <div className="w-12 h-1 bg-[#FFED00] mb-5 rounded-none"></div>

                        {/* Target Audience Section */}
                        <div>
                            <h5 className="text-[#1F3FEA] font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-100 pb-1">
                                Dirigido a
                            </h5>
                            <ul className="text-gray-600 text-sm italic">
                                <li className="flex items-start">
                                    <span className="text-[#F33869] mr-2">▸</span>
                                    {course.target}
                                </li>
                            </ul>
                        </div>

                        {/* Bottom decorative logo/icon opacity */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5 pointer-events-none">
                            <Image
                                src={`/images/cursos/${course.logoName}`}
                                alt="Watermark"
                                fill
                                sizes="128px"
                                loading="lazy"
                                className="object-contain"
                            />
                        </div>

                    </motion.div>
                </div>

                {/* --- LADO B (Front) --- */}
                <motion.div
                    className="absolute bottom-0 left-[2.5%] w-[95%] h-[220px] z-30 origin-bottom transform-style-3d"
                    variants={{
                        closed: { rotateX: 0, transition: { duration: 0.35 } },
                        open: { rotateX: 35, transition: { type: "spring", stiffness: 100, damping: 14, delay: 0.1 } }
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/cursos/ladob.png"
                            alt="Folder Front"
                            fill
                            sizes="400px"
                            className="object-fill object-bottom drop-shadow-2xl"
                            priority={isActive}
                        />

                        {/* Logo Centered */}
                        <div className="absolute inset-0 flex items-center justify-center pt-0 pointer-events-none">
                            <div className="relative w-28 h-28 bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 shadow-inner flex items-center justify-center transform translate-y-[-10px]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`/images/cursos/${course.logoName}`}
                                        alt="Course Logo"
                                        fill
                                        sizes="112px"
                                        loading={isActive ? undefined : 'lazy'}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
});

// --- MAIN SECTION ---
export default function CursosSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Inicialmente CERRADO para esperar a que entre en vista
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Pinning Logic
    const containerRef = useRef(null);

    // Detectar cuando la sección es visible
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    // Cuando entra en vista, abrir la carpeta (solo una vez gracias a once: true)
    useEffect(() => {
        if (isInView) {
            setIsOpen(true);
        }
    }, [isInView]);

    const getPositionState = (index: number) => {
        if (index === activeIndex) return 'center';
        const total = courses.length;
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;
        if (index === prev) return 'left';
        if (index === next) return 'right';
        return 'hidden';
    };

    const handleSlideChange = (direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsOpen(false);

        // Lógica de cambio de slide (abre y cierra carpeta para transición)
        setTimeout(() => {
            setActiveIndex(prev => {
                const total = courses.length;
                if (direction === 'next') return (prev + 1) % total;
                return (prev - 1 + total) % total;
            });
            setTimeout(() => {
                setIsOpen(true);
                setIsAnimating(false);
            }, 700);
        }, 400);
    };

    return (
        <div id="cursos" className="contents">
        {/* Desktop: original sticky carousel (untouched) */}
        <section ref={containerRef} className="hidden lg:block relative w-full h-[150vh] bg-[#1F3FEA]">

            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">

                {/* --- HEADER (Relative Flow, Large Top Padding) --- */}
                {/* Changed from absolute to relative block with pt-28 to clear navbar */}
                <div className="w-full pt-20 pb-4 text-center bg-transparent z-40 relative">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase drop-shadow-md">
                        CURSOS Y TALLERES
                    </h2>
                    <div className="w-24 h-1.5 bg-[#FFED00] mx-auto rounded-none mt-2 shadow-[0_0_15px_rgba(255,237,0,0.6)]"></div>
                </div>

                {/* Content Container - Takes remaining space */}
                <div className="flex-1 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

                    {/* --- COLUMN LEFT: 3D CAROUSEL (Col 1-8) --- */}
                    <div className="lg:col-span-8 h-full flex items-center justify-center relative">

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => handleSlideChange('prev')}
                            className={`absolute left-4 z-50 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20 shadow-lg ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isAnimating}
                        >
                            <ChevronLeft size={32} strokeWidth={3} />
                        </button>

                        <button
                            onClick={() => handleSlideChange('next')}
                            className={`absolute right-4 z-50 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20 shadow-lg ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isAnimating}
                        >
                            <ChevronRight size={32} strokeWidth={3} />
                        </button>

                        {/* Carousel Container */}
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <AnimatePresence>
                                {courses.map((course, index) => (
                                    <FolderCard
                                        key={course.id}
                                        course={course}
                                        isActive={index === activeIndex}
                                        isOpen={isOpen}
                                        positionState={getPositionState(index)}
                                        onClick={() => {
                                            const pos = getPositionState(index);
                                            if (pos === 'left') handleSlideChange('prev');
                                            if (pos === 'right') handleSlideChange('next');
                                        }}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* --- COLUMN RIGHT: TITLE PANEL (Col 9-12) --- */}
                    <div className="lg:col-span-4 h-full flex flex-col justify-center px-8 lg:pr-24 relative z-20 text-white pointer-events-none group">

                        <div className="max-w-md pointer-events-auto">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-[#023566] p-8 rounded-none shadow-2xl border border-white/10 mb-8"
                                >
                                    <div className="mb-4 inline-block px-3 py-1 bg-[#FFED00] text-[#023566] rounded-none shadow-sm">
                                        <span className="font-bold text-xs tracking-widest uppercase">
                                            {courses[activeIndex].type}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl lg:text-4xl font-black mb-0 leading-tight uppercase tracking-tight text-white">
                                        {courses[activeIndex].title}
                                    </h2>

                                </motion.div>
                            </AnimatePresence>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-base group mt-4"
                            >
                                <div className="w-12 h-[3px] bg-[#F33869] group-hover:w-24 transition-all duration-300 ease-out"></div>
                                <span className="hover:text-[#F33869] transition-colors duration-300">Saber más</span>
                                <ArrowRight size={20} className="text-[#F33869]" />
                            </motion.button>
                        </div>

                    </div>

                </div>

                {/* Background Texture & Gradient */}
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1F3FEA]/50 to-[#023566]/90 pointer-events-none"></div>
            </div>
        </section>

        {/* ============================================================
            MOBILE: simple stacked course cards. No 3D folder, no
            sticky pin, no scaling tricks — every course shows its
            badge, image, title, description and target inline.
           ============================================================ */}
        <section className="lg:hidden relative z-20 bg-[#1F3FEA] py-14 px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-widest uppercase drop-shadow-md">
                    CURSOS Y TALLERES
                </h2>
                <div className="w-20 h-1.5 bg-[#FFED00] mx-auto mt-3 shadow-[0_0_15px_rgba(255,237,0,0.6)]" />
            </div>

            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                {courses.map((course) => (
                    <article
                        key={course.id}
                        className="bg-white shadow-2xl overflow-hidden relative"
                    >
                        {/* Decorative Top Stripe */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F33869] to-[#1F3FEA] z-10" />

                        {/* Badge */}
                        <div className="px-6 pt-6 pb-2 flex items-center gap-3">
                            <div className="bg-[#FFED00] text-[#023566] inline-flex items-center px-3 py-1">
                                <span className="font-bold text-[10px] tracking-widest uppercase">
                                    {course.type}
                                </span>
                            </div>
                            <span className="bg-[#023566]/10 text-[#023566] text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-[#023566]/20">
                                {course.detail}
                            </span>
                        </div>

                        {/* Hero image */}
                        <div className="relative w-full aspect-video bg-gray-50 overflow-hidden flex items-center justify-center px-8 pt-4 pb-6">
                            <Image
                                src={`/images/cursos/${course.imgName}`}
                                alt={course.title}
                                width={500}
                                height={400}
                                loading="lazy"
                                className="object-contain max-h-full w-auto drop-shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="px-6 pb-7">
                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight mb-4" style={{ color: '#023566' }}>
                                {course.title}
                            </h3>

                            <div className="mb-4">
                                <h5 className="text-[#F33869] font-bold text-[10px] uppercase tracking-widest mb-2 border-b border-gray-100 pb-1">
                                    Descripción
                                </h5>
                                <p className="text-[#023566] text-sm leading-relaxed font-medium">
                                    {course.description}
                                </p>
                            </div>

                            <div className="w-12 h-1 bg-[#FFED00] mb-4" />

                            <div>
                                <h5 className="text-[#1F3FEA] font-bold text-[10px] uppercase tracking-widest mb-2 border-b border-gray-100 pb-1">
                                    Dirigido a
                                </h5>
                                <p className="text-gray-600 text-sm italic flex items-start">
                                    <span className="text-[#F33869] mr-2">▸</span>
                                    {course.target}
                                </p>
                            </div>

                            {/* Watermark logo */}
                            <div className="mt-5 flex justify-end">
                                <div className="relative w-16 h-16 opacity-30">
                                    <Image
                                        src={`/images/cursos/${course.logoName}`}
                                        alt="Logo curso"
                                        fill
                                        sizes="64px"
                                        loading="lazy"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
        </div>
    );
}
