"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Branding",
        videoPath: "/images/servicios/video branding.mp4",
        items: [
            { name: "Manual de Marca", description: "Directrices estratégicas que definen la esencia y aplicación coherente de tu identidad visual." },
            { name: "Brandboard", description: "Herramienta visual que sintetiza los elementos clave de tu marca en un formato ejecutivo." },
            { name: "Logotipos", description: "Diseño de símbolos distintivos que representan la personalidad y valores de tu organización." },
            { name: "Animación", description: "Movimiento estratégico que da vida a tu identidad visual en formatos digitales." }
        ],
        description: "Construimos la identidad visual y estratégica de tu marca. Desde la concepción hasta la implementación, cada elemento comunica quién eres.",
    },
    {
        id: "02",
        title: "Producción Audiovisual",
        videoPath: "/images/servicios/audiovisuales.mp4",
        items: [
            { name: "Fotografía de producto", description: "Imágenes profesionales que destacan las características y valor de tus productos." },
            { name: "Fotografía corporativa", description: "Retratos y ambientes que proyectan la cultura y profesionalismo de tu organización." },
            { name: "Videos comerciales", description: "Contenido audiovisual persuasivo diseñado para generar conversiones y ventas." },
            { name: "Videos corporativos", description: "Piezas institucionales que comunican tu propósito, cultura y logros empresariales." }
        ],
        description: "Capturamos la esencia de tu marca a través de imágenes y videos que conectan, inspiran y venden.",
    },
    {
        id: "03",
        title: "Prevención de Crisis",
        videoPath: "/images/servicios/crisis.mp4",
        items: [
            { name: "Mapa de Riesgos", description: "Análisis anticipado de escenarios críticos que podrían comprometer tu reputación." },
            { name: "Comité de Crisis", description: "Equipo especializado preparado para responder eficazmente ante situaciones adversas." },
            { name: "Taller de Vocería", description: "Capacitación ejecutiva para comunicar con claridad y confianza en momentos críticos." },
            { name: "Manual de Crisis", description: "Protocolo estructurado de acción inmediata ante emergencias comunicacionales." }
        ],
        description: "Anticipamos, preparamos y protegemos. Tu reputación es tu activo más valioso y merece un blindaje estratégico.",
    },
    {
        id: "04",
        title: "Posicionamiento en Medios",
        videoPath: "/images/servicios/medios.mp4",
        items: [
            { name: "Difusión de Nota de Prensa", description: "Distribución estratégica de información relevante a medios clave de tu industria." },
            { name: "Gestión de entrevistas", description: "Coordinación y preparación de voceros para apariciones en medios tradicionales y digitales." },
            { name: "Difusión de reportes y/o estudios", description: "Amplificación del impacto de investigaciones y hallazgos de tu organización." }
        ],
        description: "Posicionamos tu marca en los medios que importan. Generamos cobertura, credibilidad y alcance real.",
    },
    {
        id: "05",
        title: "Responsabilidad Social",
        videoPath: "/images/servicios/responsabilidad social.mp4",
        items: [
            { name: "Estudios de Línea Base", description: "Diagnóstico inicial de condiciones sociales y ambientales previo a intervenciones." },
            { name: "Matriz de Riesgos", description: "Identificación y priorización de impactos potenciales en comunidades y stakeholders." },
            { name: "Mapa de Actores Sociales", description: "Análisis estratégico de grupos de interés y su influencia en tus operaciones." }
        ],
        description: "Integramos el impacto social en tu estrategia organizacional. Responsabilidad que genera valor compartido.",
    },
    {
        id: "06",
        title: "Desarrollo & Posicionamiento Web",
        videoPath: null, // Custom layout
        items: [
            { name: "Sitio Web", description: "Plataformas digitales optimizadas que convierten visitantes en clientes y oportunidades." },
            { name: "Posicionamiento SEO y SEM", description: "Estrategias de visibilidad orgánica y pagada que amplifican tu presencia digital." },
            { name: "Redacción de blog", description: "Contenido estratégico que educa, posiciona y genera autoridad en tu industria." }
        ],
        description: "Diseñamos experiencias digitales que posicionan tu marca y convierten visitantes en clientes. Explora nuestros casos de éxito:",
    }
];

const webProjects = [
    {
        title: "Promptive Agency",
        url: "https://promptiveagency.com",
        video: "/images/webs/promptive.mp4",
        category: "Agencia Growth & Marketing",
        longDesc: "Desarrollo de ecosistema digital de alto rendimiento. Implementación de secciones interactivas para servicios de IA, Web3 y estrategias de conversión."
    },
    {
        title: "Mandrágora Consultores",
        url: "https://mandragoraconsultores.com",
        video: "/images/webs/mandragora.mp4",
        category: "Consultoría Ambiental",
        longDesc: "Diseño y desarrollo de portal corporativo escalable. Estructuración de arquitectura de información para servicios complejos de ingeniería y sostenibilidad."
    },
    {
        title: "Ravmar Logistics",
        url: "https://www.ravmarlogistics.com",
        video: "/images/webs/ragma.mp4",
        category: "Agencia de Carga Internacional",
        longDesc: "Desarrollo web corporativo enfocado en UX internacional. Integración visual de credenciales BASC/IATA y sistema de presentación de trazabilidad logística."
    },
    {
        title: "Estudio Llacza & Asociados",
        url: "https://estudiollacza.com",
        video: "/images/webs/llazca.mp4",
        category: "Firma Legal Corporativa",
        longDesc: "Transformación digital completa. Diseño de interfaz sobria y profesional que optimiza la presentación de áreas de práctica legal y facilita la captación de clientes."
    },
    {
        title: "Morrison Pizza",
        url: "https://morrisonpizza.vercel.app",
        video: "/images/webs/morrizon-pizza.mp4",
        category: "E-commerce Gastronómico",
        longDesc: "Ingeniería de software a medida: Desarrollo de 'Pizza Builder' interactivo, carta inteligente con variantes complejas y motor de pedidos en tiempo real."
    },
    {
        title: "Gophora AI",
        url: "https://www.gophora.com/organizations",
        video: "/images/webs/gophora%20AI.mp4",
        category: "Plataforma Web3 & IA",
        longDesc: "Desarrollo End-to-End de plataforma descentralizada. Arquitectura de sistema de roles, integración de economía tokenizada y motor de IA para matchmaking."
    }
];

export default function ServiciosSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Video refs for standard panels
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Project refs for the complex 3D fan effect
    const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const projectVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const [hoveredItems, setHoveredItems] = useState<{ [key: string]: string | null }>({});

    const activeProjectRef = useRef<number>(-1);

    // Refs for horizontal scroll container
    const horizontalContainerRef = useRef<HTMLDivElement>(null);
    const horizontalWrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Parallax title
            gsap.to(titleRef.current, {
                y: 800,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.2,
                }
            });

            // 2. Vertical panel stacking
            const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
            const totalPanels = panels.length;

            panels.forEach((panel, i) => {
                if (i > 0) gsap.set(panel, { yPercent: 100 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stackRef.current,
                    start: "top top",
                    end: `+=${(totalPanels + 2) * 100}%`, // Added duration for horizontal part
                    pin: true,
                    pinSpacing: true,
                    scrub: 1, // Smoother scrub for better control
                    onEnter: () => {
                        if (videoRefs.current[0]) videoRefs.current[0]?.play().catch(() => { });
                    },
                    onEnterBack: () => {
                        if (videoRefs.current[0]) videoRefs.current[0]?.play().catch(() => { });
                    }
                }
            });

            tl.to({}, { duration: 0.3 }); // Initial hold

            panels.forEach((panel, i) => {
                if (i === 0) return;

                // Vertical slide transition
                tl.to(panel, {
                    yPercent: 0,
                    ease: "power2.inOut",
                    duration: 1.5,
                    onStart: () => {
                        // Play current video
                        if (videoRefs.current[i]) {
                            videoRefs.current[i].currentTime = 0; // Reset
                            videoRefs.current[i].play().catch(() => { });
                        }
                        // Pause previous video strictly
                        if (i > 0 && videoRefs.current[i - 1]) videoRefs.current[i - 1]?.pause();
                    },
                    onReverseComplete: () => {
                        // Pause current video
                        if (videoRefs.current[i]) videoRefs.current[i]?.pause();
                        // Play previous video strictly if backing up
                        if (i > 0 && videoRefs.current[i - 1]) videoRefs.current[i - 1]?.play().catch(() => { });
                    }
                });

                // Reading hold time
                tl.to({}, { duration: 0.5 });
            });

            // 3. Horizontal 3D Fan Logic (The complex part)
            if (horizontalContainerRef.current && horizontalWrapperRef.current) {
                // Initial setup for 3D Cards
                // Set initial state: rotated and offset

                const scrollWidth = horizontalContainerRef.current.scrollWidth;
                const wrapperWidth = horizontalWrapperRef.current.offsetWidth;
                const scrollDistance = scrollWidth - wrapperWidth + wrapperWidth * 0.5; // Scroll extra to clear

                // The Horizontal Tween
                tl.to(horizontalContainerRef.current, {
                    x: -scrollDistance,
                    ease: "none",
                    duration: 8, // Determines "weight" of horizontal section in total scroll
                    onUpdate: function () {
                        // 3D Fan Effect Logic running on every frame of the scroll
                        // We calculate the center of the viewport and rotation based on distance

                        const wrapperCenter = wrapperWidth / 2;
                        const containerX = gsap.getProperty(horizontalContainerRef.current, "x") as number;

                        let activeFoundInThisFrame = -1;

                        projectRefs.current.forEach((card, index) => {
                            if (!card) return;

                            // Calculate card's center position relative to wrapper
                            const cardRect = card.getBoundingClientRect();
                            const cardCenter = cardRect.left + cardRect.width / 2;
                            // Since standard getBoundingClientRect is relative to viewport, and our wrapper is pinned/fixed 
                            // we need to be careful. Here stack is pinned. Wrapper is fixed relative to screen. 
                            // So getBoundingClientRect works perfectly for "visual center".

                            // Calculate distance from center of the right-side panel
                            // The right panel is approx 60% of screen width.
                            // Let's assume the wrapper IS the viewport for these cards.

                            const wrapperRect = horizontalWrapperRef.current!.getBoundingClientRect();
                            const relativeCenter = cardCenter - wrapperRect.left - (wrapperRect.width / 2);

                            // Normalized distance (-1 to 1 based on wrapper width)
                            const distNorm = relativeCenter / (wrapperRect.width / 1.5);

                            // Logic for 3D Rotation ("The Fan")
                            // Left side (negative dist): Rotate positive Y (face right)
                            // Right side (positive dist): Rotate negative Y (face left)
                            let rotationY = -distNorm * 45; // Max 45 degrees
                            rotationY = Math.max(-60, Math.min(60, rotationY)); // Clamp

                            // Scale logic: Center is biggest
                            const scale = 1 - Math.abs(distNorm) * 0.3;

                            // Opacity/Focus logic
                            const isCenter = Math.abs(distNorm) < 0.25; // Threshold for "centered"

                            // Apply transforms
                            gsap.set(card, {
                                rotateY: rotationY,
                                scale: scale,
                                zIndex: isCenter ? 50 : 10 - Math.abs(index), // Center always on top
                                opacity: 1 - Math.abs(distNorm) * 0.5, // Fade out on edges
                                filter: isCenter ? 'brightness(1)' : 'brightness(0.5)',
                            });

                            // Automatic Video Playback for Center Card
                            const video = projectVideoRefs.current[index];
                            if (video) {
                                if (isCenter) {
                                    activeFoundInThisFrame = index;
                                    if (video.paused) video.play().catch(() => { });
                                } else {
                                    if (!video.paused) video.pause();
                                }
                            }
                        });

                        // Only update state if the active project actually CHANGED
                        if (activeFoundInThisFrame !== activeProjectRef.current) {
                            activeProjectRef.current = activeFoundInThisFrame;

                            if (activeFoundInThisFrame !== -1) {
                                setHoveredItems(prev => ({ ...prev, 'project_desc': webProjects[activeFoundInThisFrame].longDesc }));
                            } else {
                                setHoveredItems(prev => ({ ...prev, 'project_desc': null }));
                            }
                        }
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="servicios" className="relative z-20">

            {/* ====== INTRO PANEL ====== */}
            <div
                className="relative min-h-screen flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: '#ffffff' }}
            >
                {/* Title */}
                <div className="flex-1 flex items-center px-6 sm:px-8 md:px-16 lg:px-24 pt-24">
                    <div className="max-w-6xl">
                        <h2
                            ref={titleRef}
                            className="text-4xl sm:text-6xl md:text-9xl lg:text-[11rem] font-black uppercase leading-[0.95] md:leading-[0.88] tracking-tighter"
                            style={{ color: '#023566' }}
                        >
                            Transformamos <span style={{ color: '#F33869' }}>ideas</span><br />
                            en impacto, estrategia<br />
                            en resultados.
                        </h2>
                    </div>
                </div>
                {/* Footer Label */}
                <div className="w-full py-12 lg:py-24 px-6 sm:px-8 md:px-16 lg:px-24" style={{ backgroundColor: '#023566' }}>
                    <span className="text-sm font-bold uppercase tracking-[0.4em] text-white/80">Servicios</span>
                    <div className="h-[1px] w-24 mt-3 bg-white/30"></div>
                </div>
            </div>

            {/* ====== STACKED SERVICE PANELS ====== */}
            <div ref={stackRef} className="relative h-screen w-full">
                {services.map((service, i) => (
                    <div
                        key={service.id}
                        ref={(el) => { panelRefs.current[i] = el; }}
                        className="absolute inset-0 w-full h-full will-change-transform flex overflow-hidden"
                        style={{
                            backgroundColor: '#1F3FEA',
                            zIndex: i + 1,
                        }}
                    >
                        {service.id === "06" ? (
                            /* ====== WEB DEV 3D FAN LAYOUT ====== */
                            <div className="w-full h-full flex flex-col lg:flex-row">
                                {/* LEFT Panel */}
                                <div className="w-full lg:w-[40%] flex items-center justify-center px-4 lg:px-0 py-8 lg:py-0 lg:pl-12 xl:pl-16 relative z-20 bg-[#1F3FEA]">
                                    <div
                                        className="w-full min-h-0 lg:min-h-[75vh] px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12 lg:py-20 relative overflow-hidden flex flex-col justify-center"
                                        style={{
                                            backgroundColor: '#023566',
                                            boxShadow: '6px 6px 30px rgba(0,0,0,0.35)',
                                        }}
                                    >
                                        <div className="mb-8">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                                                {service.id} / 0{services.length}
                                            </span>
                                            <div className="h-[1px] w-12 bg-white/15 mt-3"></div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-[0.95] tracking-tight mb-8">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-col group/list mt-auto">
                                            {service.items.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className="group/item relative py-4 border-b border-white/8 last:border-b-0 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
                                                    onMouseEnter={() => setHoveredItems({ ...hoveredItems, [service.id]: item.description })}
                                                    onMouseLeave={() => setHoveredItems({ ...hoveredItems, [service.id]: null })}
                                                >
                                                    <div className="flex items-center gap-4 relative">
                                                        <div className="absolute -left-4 w-2 h-2 rounded-full bg-white opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ease-out"></div>
                                                        <span className="text-white/15 text-xs font-mono min-w-[24px]">
                                                            {String(j + 1).padStart(2, '0')}
                                                        </span>
                                                        <span className="text-white text-base md:text-lg lg:text-xl font-medium tracking-tight group-hover/item:text-[#FFED00] transition-colors duration-300">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-4 border-t border-white/8 min-h-[40px]">
                                            <p className={`text-white/30 text-xs leading-relaxed transition-all duration-300 ${hoveredItems[service.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                {hoveredItems[service.id] || ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT: 3D Fan Scroll Track */}
                                <div
                                    ref={horizontalWrapperRef}
                                    className="w-full lg:w-[60%] h-full flex flex-col justify-center overflow-hidden relative bg-[#1F3FEA]"
                                    style={{ perspective: '1200px' }} // Critical for 3D effect
                                >
                                    <div
                                        ref={horizontalContainerRef}
                                        className="flex items-center h-[70vh] pl-[50%] pr-[50%]" // Padding centers the first/last items
                                        style={{ width: 'max-content', transformStyle: 'preserve-3d' }}
                                    >
                                        {webProjects.map((project, k) => (
                                            <a
                                                key={k}
                                                ref={(el) => { projectRefs.current[k] = el; }}
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative flex flex-col w-[300px] md:w-[360px] lg:w-[420px] flex-shrink-0 mx-[-40px]" // Negative margin for overlap
                                                style={{ transformStyle: 'preserve-3d' }}
                                            >
                                                {/* Card Content */}
                                                <div
                                                    className="w-full aspect-[9/16] lg:aspect-video bg-black/20 border border-white/10 rounded-sm overflow-hidden relative shadow-2xl"
                                                >
                                                    <video
                                                        ref={(el) => { projectVideoRefs.current[k] = el; }}
                                                        className="w-full h-full object-cover transition-all duration-500"
                                                        loop
                                                        muted
                                                        playsInline
                                                    // No autoplay, controlled by scroll logic
                                                    >
                                                        <source src={project.video} type="video/mp4" />
                                                    </video>

                                                    {/* Central Indicator */}
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <div className="w-16 h-16 rounded-full border border-[#F33869]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <div className="w-3 h-3 bg-[#F33869] rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Labels */}
                                                <div className="mt-8 pl-4 border-l-2 border-[#F33869] transition-all duration-300">
                                                    <h4 className="text-2xl font-bold text-white uppercase leading-none mb-2">
                                                        {project.title}
                                                    </h4>
                                                    <p className="text-xs text-white/60 font-mono uppercase tracking-widest">
                                                        {project.category}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Bottom Description Area */}
                                    <div className="absolute bottom-24 left-12 right-12 h-auto border-t border-white/10 pt-6 z-50 pointer-events-none pb-4">
                                        <p
                                            className="!text-white !opacity-100 text-sm md:text-lg font-medium tracking-wide transition-all duration-300"
                                            style={{ color: '#FFFFFF', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                                        >
                                            <span className="text-[#F33869] font-bold mr-3">{hoveredItems['project_desc'] ? 'PROYECTO ACTIVO:' : ''}</span>
                                            {hoveredItems['project_desc']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* ====== STANDARD VERTICAL LAYOUT ====== */
                            <div className="h-full w-full flex flex-col lg:flex-row">
                                <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-0">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-white/30 text-sm font-mono tracking-wider">
                                            {service.id} / 0{services.length}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-10">
                                        {service.description}
                                    </p>
                                    <div className="relative w-full max-w-2xl aspect-video bg-black/20 overflow-hidden border border-white/10 rounded-sm">
                                        {service.videoPath ? (
                                            <>
                                                <video
                                                    ref={(el) => { videoRefs.current[i] = el; }}
                                                    className="w-full h-full object-cover"
                                                    loop
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                >
                                                    <source src={service.videoPath} type="video/mp4" />
                                                </video>
                                                <div className="absolute bottom-3 left-4 z-10">
                                                    <span className="text-white/80 text-xs font-mono uppercase tracking-wider bg-black/40 px-2 py-1 rounded">
                                                        Reel — {service.title}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white/30">No Preview</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full lg:w-[42%] flex items-center justify-center px-4 lg:px-0 py-8 lg:py-0 lg:pr-12 xl:pr-16">
                                    <div
                                        className="w-full min-h-[75vh] px-8 md:px-10 lg:px-12 py-14 md:py-16 lg:py-20 relative overflow-hidden flex flex-col"
                                        style={{
                                            backgroundColor: '#023566',
                                            boxShadow: '-6px 6px 30px rgba(0,0,0,0.35)',
                                        }}
                                    >
                                        <div className="mb-8">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                                                Servicios
                                            </span>
                                            <div className="h-[1px] w-12 bg-white/15 mt-3"></div>
                                        </div>
                                        <div className="flex flex-col group/list">
                                            {service.items.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className="group/item relative py-4 border-b border-white/8 last:border-b-0 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
                                                    onMouseEnter={() => setHoveredItems({ ...hoveredItems, [service.id]: item.description })}
                                                    onMouseLeave={() => setHoveredItems({ ...hoveredItems, [service.id]: null })}
                                                >
                                                    <div className="flex items-center gap-4 relative">
                                                        <div className="absolute -left-4 w-2 h-2 rounded-full bg-white opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ease-out"></div>
                                                        <span className="text-white/15 text-xs font-mono min-w-[24px]">
                                                            {String(j + 1).padStart(2, '0')}
                                                        </span>
                                                        <span className="text-white text-base md:text-lg lg:text-xl font-medium tracking-tight group-hover/item:text-[#FFED00] transition-colors duration-300">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-10 pt-6 border-t border-white/8 min-h-[60px]">
                                            <p className={`text-white/30 text-xs leading-relaxed transition-all duration-300 ${hoveredItems[service.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                {hoveredItems[service.id] || ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
