"use client";

import { useRef, useLayoutEffect, useState, useEffect, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const team = [
    {
        name: "Biluz Fernández",
        role: "Founder & CEO",
        image: "/images/team/biluz.png",
        highlight: true,
        description: "Magíster en Dirección de Comunicación Corporativa (URJC, España). Bachiller en Comunicación Social (UNMSM). Diplomados en ESAN y USMP. Experiencia con marcas nacionales e internacionales en Perú, España, México y Ecuador.",
        linkedin: "https://www.linkedin.com/in/luciernagacomunica/"
    },
    {
        name: "Karl Fernández",
        role: "Director C.",
        image: "/images/team/karl3.png",
        highlight: true,
        description: "Magíster en Formación Directiva (USAT). Diplomado en Marketing y Ventas (CENTRUM). Experto en estrategias comerciales, optimización de procesos y análisis de KPIs.",
        linkedin: "#"
    },
    {
        name: "Saúl Salazar",
        role: "Gestión de Crisis",
        image: "/images/team/Saul.png",
        description: "Especialista en gestión de crisis y comunicación política con amplia experiencia en el sector público y privado.",
        linkedin: "#"
    },
    {
        name: "Karol Luciano",
        role: "Relaciones P.",
        image: "/images/team/karol1.png",
        description: "Experta en relaciones públicas y gestión de influencers, conectando marcas con audiencias clave.",
        linkedin: "#"
    },
    {
        name: "Jean Pierre Battistini",
        role: "Branding",
        image: "/images/team/jean3.png",
        description: "Creativo apasionado por la construcción de marcas sólidas y memorables a través de identidad visual estratégica.",
        linkedin: "#"
    },
    {
        name: "Luigi Bravo",
        role: "Tech & Innovation",
        image: "/images/team/luigi5.png",
        description: "Impulsando la transformación digital, la innovación tecnológica y el marketing digital para el crecimiento de marcas.",
        linkedin: "https://www.linkedin.com/in/luigi-emerson-bravo-arribasplata-672a43219"
    }
];

// Logo filenames
const logoFiles = [
    "Logo ESAN.jpg", "Uni-logo_transparente_granate.png", "Untitled design (19).png",
    "Untitled design (20).png", "Untitled design (21).png", "Untitled design (22).png",
    "Untitled design (23).png", "Untitled design (24).png", "Untitled design (25).png",
    "Untitled design (26).png", "Untitled design (27).png", "Untitled design (28).png",
    "Untitled design (29).png", "Untitled design (30).png", "Untitled design (31).png",
    "Untitled design (32).png", "Untitled design (33).png", "Untitled design (34).png",
    "Untitled design (35).png", "Untitled design (36).png", "Untitled design (37).png",
    "Untitled design (38).png", "Untitled design (39).png", "Untitled design (40).png",
    "Untitled design (41).png", "Untitled design (42).png", "images (3)-Photoroom.png",
    "unnamed (5).jpg"
];

const col1 = logoFiles.slice(0, 9);
const col2 = logoFiles.slice(9, 19);
const col3 = logoFiles.slice(19, 28);

const LogoColumn = memo(function LogoColumn({ logos, direction = "up", speed = 30 }: { logos: string[], direction?: "up" | "down", speed?: number }) {
    const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center">
            <motion.div
                initial={{ y: direction === "up" ? 0 : "-50%" }}
                animate={{ y: direction === "up" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex flex-col gap-8 w-full items-center py-4"
            >
                {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-xl hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="relative w-full h-full">
                            <Image
                                src={`/images/logos/${logo}`}
                                alt="Logo cliente"
                                fill
                                className="object-contain"
                                sizes="120px"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
});

export default function EquipoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const ctaOverlayRef = useRef<HTMLDivElement>(null);
    const teamScrollRef = useRef<HTMLDivElement>(null);
    const [overlayDone, setOverlayDone] = useState(false);
    const [cardsReady, setCardsReady] = useState(false);

    useEffect(() => {
        if (overlayDone) {
            const timer = setTimeout(() => setCardsReady(true), 2500);
            return () => clearTimeout(timer);
        } else {
            setCardsReady(false);
        }
    }, [overlayDone]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top+=70px",
                    end: "+=180%",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1.2,
                }
            });

            tl.to(ctaOverlayRef.current, { autoAlpha: 1, duration: 0.8 });
            tl.to(ctaOverlayRef.current, {
                autoAlpha: 0, duration: 1.2, ease: "power2.inOut",
                onComplete: () => setOverlayDone(true),
                onReverseComplete: () => setOverlayDone(false)
            });

            // Hold pin while team cards animate in
            tl.to({}, { duration: 1.5 });

        }, sectionRef);

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
            ctx.revert();
        };
    }, []);

    const stairItems = [
        { text: "NIVEL", type: "parada", color: "gray" },
        { text: "EN CADA", type: "echada", color: "white" },
        { text: "RESULTADOS", type: "parada", color: "gray" },
        { text: "Y GENERA", type: "echada", color: "white" },
        { text: "POTENCIA", type: "parada", color: "gray" },
        { text: "DEFINE", type: "echada", color: "white" }
    ];

    return (
        <section ref={sectionRef} id="equipo" className="min-h-screen bg-[#023566] border-t border-border-dim relative z-10 overflow-hidden">

            {/* PERMANENT GRADIENT BOTTOM */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#F33869] via-[#F33869]/20 to-transparent opacity-30 z-0 pointer-events-none"></div>

            {/* BACKGROUND TITLE */}
            <div className="absolute top-[5%] left-0 w-full text-center pointer-events-none z-0 select-none">
                <h2 className="text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none tracking-tighter uppercase font-outline-2">
                    MENTES MAESTRAS
                </h2>
            </div>

            {/* CTA OVERLAY */}
            <div ref={ctaOverlayRef} className="absolute inset-0 z-50 bg-[#1F3FEA] text-white overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-azul-primary to-magenta opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-0"></div>

                {/* MAIN GRID LAYOUT */}
                <div className="absolute inset-0 w-full max-w-[1800px] mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-0 px-4 lg:px-8 items-center z-10 pointer-events-auto">

                    {/* LEFT COLUMN: LOGOS MARQUEE (col-span-4) — hidden on phones to save room */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:flex lg:col-span-4 h-full relative flex-col justify-center border-r border-transparent"
                    >
                        {/* ELEGANT YELLOW SEPARATOR - RIGHT SIDE */}
                        <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-amarillo/80 to-transparent z-30 shadow-[0_0_15px_rgba(255,193,7,0.5)]"></div>

                        <div
                            className="flex gap-6 h-[80%] w-full justify-center overflow-hidden relative"
                            style={{
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
                            }}
                        >
                            <LogoColumn logos={col1} direction="up" speed={40} />
                            <LogoColumn logos={col2} direction="down" speed={45} />
                            <LogoColumn logos={col3} direction="up" speed={42} />
                        </div>
                    </motion.div>

                    {/* CENTER COLUMN: EXPERIENCE TEXT (col-span-3) - CENTERED CONTENT */}
                    <div className="col-span-1 lg:col-span-3 h-full flex flex-col justify-center items-center text-center relative z-20 px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center w-full"
                        >
                            <h3 className="font-bold text-white leading-none">
                                <span className="block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black text-amarillo tracking-tighter leading-[0.8]">
                                    +10
                                </span>
                                <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 tracking-wide font-light">
                                    AÑOS DE<br />
                                    <strong className="font-black">EXPERIENCIA</strong>
                                </span>
                            </h3>

                            <p
                                className="mt-8 text-sm max-w-[240px] mx-auto leading-relaxed font-light tracking-wide text-center"
                                style={{ color: '#FFFFFF' }}
                            >
                                Transformando marcas con estrategias de alto impacto.
                            </p>

                            {/* CTA BUTTON - CENTERED WITH MARGIN */}
                            <motion.a
                                href="#contacto"
                                className="inline-flex items-center justify-center gap-4 bg-white text-azul-primary px-10 py-3 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-amarillo hover:text-black transition-all duration-300 border border-white/20 relative mt-16 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Comenzar Proyecto
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: STAIRCASE (col-span-5) - LIFTED. Hidden on small
                        viewports because the 3D perspective + 4000px depth doesn't
                        translate to a phone-sized canvas. */}
                    <div className="hidden lg:flex col-span-5 flex-col items-center justify-center relative perspective-[2000px] h-full z-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            style={{
                                perspective: "4000px",
                                transformStyle: "preserve-3d"
                            }}
                            className="flex flex-col items-center -mt-64 -ml-8"
                        >
                            {stairItems.map((item, i) => {
                                const isBlock2 = item.text === "RESULTADOS" || item.text === "Y GENERA";
                                let finalX = "0em";
                                let finalY = "0em";

                                if (item.text === "NIVEL") { finalX = "9.2em"; finalY = "5.1em"; }
                                else if (item.text === "EN CADA") { finalX = "7.5em"; finalY = "4.2em"; }
                                else if (isBlock2) { finalX = "3.0em"; finalY = "1.6em"; }
                                else if (item.text === "DEFINE") { finalX = "-1.0em"; finalY = "-0.5em"; }

                                const isLeftToRight = ["NIVEL", "Y GENERA", "DEFINE"].includes(item.text);
                                const hiddenX = isLeftToRight ? `calc(${finalX} - 100px)` : finalX;
                                const hiddenY = isLeftToRight ? finalY : `calc(${finalY} - 100px)`;
                                const reverseIndex = (stairItems.length - 1) - i;
                                const delayVal = reverseIndex * 0.4;

                                return (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: hiddenX, y: hiddenY },
                                            visible: {
                                                opacity: 1, x: finalX, y: finalY,
                                                transition: { delay: delayVal, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
                                            }
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            rotateX: item.type === "echada" ? 45 : -8,
                                            rotateZ: item.text === "POTENCIA" ? 8 : 10,
                                            rotateY: (item.text === "DEFINE") ? 28 : (item.text === "Y GENERA") ? 24 : (item.type === "echada" ? 20 : -45),
                                            skewX: item.type === "echada" ? -10 : 0,
                                            skewY: item.type === "echada" ? 10 : 10,
                                            marginTop: "-0.4em", zIndex: 10 - i, textShadow: "none"
                                        }}
                                        className="font-black italic uppercase select-none tracking-tighter"
                                    >
                                        <span
                                            className="block"
                                            style={{
                                                fontSize: 'clamp(2rem, 5vw, 6rem)', lineHeight: 0.85,
                                                ...(item.color === "gray" ? { color: "#023566" } : { color: "white" })
                                            }}
                                        >
                                            {item.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* =============================================
                REAL TEAM SECTION (Slats Layout Restored)
               ============================================= */}
            <div className="w-full h-full flex items-center justify-center relative z-10 px-4 md:px-12 lg:px-20 overflow-visible py-10 md:-mt-20">
                <div ref={teamScrollRef} className="max-w-[1900px] w-full flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] gap-12 md:gap-12">

                    {/* --- LEFT BLOCK --- */}
                    <div className="relative group z-30 flex-shrink-0 h-[380px] md:h-[450px] self-center ml-0 md:ml-8">
                        {/* SHADOW/FRAME - starts behind card, slides diagonally left-down */}
                        <motion.div
                            initial={{ x: 0, y: 0, skewX: -12 }}
                            animate={overlayDone ? { x: -65, y: 15, skewX: -12 } : { x: 0, y: 0, skewX: -12 }}
                            transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                            className="absolute top-4 left-[-10px] w-full h-full bg-magenta shadow-2xl origin-bottom"
                        ></motion.div>
                        <div className="relative h-full bg-white skew-x-[-12deg] shadow-2xl overflow-hidden flex flex-col justify-between items-center px-6 py-8 min-w-[240px] md:min-w-[280px]">
                            <div className="skew-x-[12deg] flex flex-col items-center text-center w-full h-full justify-center">
                                {/* Logo - shifted down and right */}
                                <div className="mb-5 mt-4 w-full flex justify-center pl-14">
                                    <Image
                                        src="/logo2.png"
                                        alt="Luciérnaga"
                                        width={140}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Title - smaller */}
                                <h2 className="text-lg md:text-xl font-bold leading-[0.95] mb-1" style={{ color: '#023566' }}>
                                    Somos
                                </h2>

                                {/* Líderes Badge - Diagonal Magenta Rectangle */}
                                <div className="relative inline-block mb-2">
                                    <div className="bg-magenta skew-x-[-8deg] px-6 py-2 shadow-lg">
                                        <span className="skew-x-[8deg] block text-white text-3xl md:text-4xl font-black uppercase tracking-tight">
                                            Líderes
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-2 my-1">
                                    <div className="h-[2px] w-8 bg-amarillo"></div>
                                    <div className="h-[6px] w-[6px] bg-amarillo rotate-45"></div>
                                    <div className="h-[2px] w-8 bg-amarillo"></div>
                                </div>

                                {/* Tagline */}
                                <p className="text-gray-500 text-xs max-w-[200px] font-medium leading-relaxed mb-2">
                                    Un equipo multidisciplinario que transforma visiones en resultados.
                                </p>

                                {/* Corporate Pillars - left aligned, moved up */}
                                <div className="flex flex-col gap-[5px] w-full self-start">
                                    <div className="flex items-center gap-3 bg-[#023566]/5 px-3 py-[5px] rounded-sm border-l-2 border-azul-electric">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#023566]">Estrategia</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-magenta/5 px-3 py-[5px] rounded-sm border-l-2 border-magenta">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#023566]">Creatividad</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-amarillo/5 px-3 py-[5px] rounded-sm border-l-2 border-amarillo">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#023566]">Tecnología</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: TEAM SLATS --- */}
                    <div className="flex-1 flex flex-wrap md:flex-nowrap items-center justify-center h-full gap-y-20 gap-x-6 md:gap-12 pl-0 md:pl-4 mt-12 md:mt-0">
                        {team.map((member, i) => {
                            let extraShift = "";
                            if (member.name.includes("Biluz")) extraShift = "translate-x-[-8%]";
                            if (member.name.includes("Karl") || member.name.includes("Jean")) extraShift = "translate-x-[8%]";

                            // Per-member label offset
                            let labelLeft = "-30px";
                            if (member.name.includes("Saúl")) labelLeft = "-45px";

                            // Validar link
                            const linkedinUrl = member.linkedin && member.linkedin !== "#" ? member.linkedin : "#";
                            const Component = linkedinUrl !== "#" ? motion.a : motion.div;
                            const props = linkedinUrl !== "#"
                                ? { href: linkedinUrl, target: "_blank", rel: "noopener noreferrer" }
                                : {};

                            return (
                                <Component
                                    key={i}
                                    {...props}
                                    initial={{ x: 1200, opacity: 0 }}
                                    animate={overlayDone ? { x: 0, opacity: 1 } : { x: 1200, opacity: 0 }}
                                    whileHover={cardsReady ? { x: 12, y: -12, transition: { duration: 0.4, delay: 0, ease: "easeOut" } } : undefined}
                                    transition={cardsReady
                                        ? { duration: 0.3, ease: "easeOut" }
                                        : { duration: 1.2, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1.0] }
                                    }
                                    className="relative group w-[110px] sm:w-[120px] md:w-[130px] lg:w-[160px] h-[300px] sm:h-[340px] md:h-[450px] z-10 hover:z-50"
                                >

                                    <div className="absolute inset-0 bg-[#F33869] skew-x-[-12deg] shadow-xl group-hover:bg-magenta transition-colors duration-300 overflow-visible">
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-60 z-0 pointer-events-none"></div>
                                    </div>

                                    <div
                                        className="absolute inset-0 z-20 pointer-events-none"
                                        style={{
                                            transform: 'skewX(-12deg)',
                                            clipPath: 'polygon(-200% 0, 100% 0, 100% 100%, -200% 100%)'
                                        }}
                                    >
                                        <div
                                            className="relative w-full h-full"
                                            style={{ transform: 'skewX(12deg)' }}
                                        >
                                            <div className={`absolute bottom-0 left-[-40%] w-[180%] h-[110%] flex items-end justify-center ${extraShift}`}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    loading="lazy"
                                                    className="object-contain object-bottom drop-shadow-2xl translate-y-[2%]"
                                                    sizes="(max-width: 768px) 100vw, 300px"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ALWAYS VISIBLE NAME & ROLE */}
                                    <div className="absolute -bottom-14 z-50 skew-x-[-12deg] pointer-events-none" style={{ left: labelLeft }}>
                                        <div className="inline-flex flex-col items-center">
                                            <h4 className="text-white font-bold text-sm uppercase leading-tight drop-shadow-md whitespace-nowrap">{member.name}</h4>
                                            <p className="text-amarillo text-[10px] font-bold uppercase tracking-widest drop-shadow-md mt-1 whitespace-nowrap">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* BIO HOVER POPUP - BELOW NAME/ROLE & LEFT ALIGNED */}
                                    <div className="absolute top-[calc(100%+30px)] left-[-150px] z-[60] w-[340px] pointer-events-none group-hover:pointer-events-auto">
                                        <div className="flex flex-col items-start text-left opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 bg-[#001021] p-6 rounded-none border-l-4 border-magenta shadow-2xl skew-x-[-12deg]">
                                            <div className="skew-x-[12deg]">
                                                {/* Eliminamos titulo duplicado, ya esta visible siempre */}

                                                <p className={`text-gray-300 text-xs font-light ${member.name.includes("Biluz") ? "leading-snug mb-1" : "leading-relaxed mb-4"}`}>
                                                    {member.description}
                                                </p>

                                                {/* Visual Button Only (Link is on parent) */}
                                                <div className="flex items-center gap-2 text-magenta text-xs font-bold uppercase tracking-widest group/link">
                                                    <span>Ver Perfil</span>
                                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Component>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
