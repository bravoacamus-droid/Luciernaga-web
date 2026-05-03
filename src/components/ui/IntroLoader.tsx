"use client";

import { motion, AnimatePresence, Easing } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const finalLogo = "/logo1.png";

export default function IntroLoader() {
    const [show, setShow] = useState(true);
    const [step, setStep] = useState(0);
    const [prefix, setPrefix] = useState("Para");
    const baseText = " una marca que brilla diferente";
    const [windowHeight, setWindowHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const words = ["Estrategia", "Impacto"];

    const CUSTOM_EASE: Easing = [0.16, 1, 0.3, 1];

    // MÁS LENTO: 1.5s la rotación
    const FLIP_TRANSITION = {
        duration: 1.5,
        ease: CUSTOM_EASE
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowHeight(window.innerHeight);
            // Mobile: rotateX/perspective animations frame-drop on phones,
            // making the intro look static or jumpy. Switch to lighter
            // fade+slide variants below.
            setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
            document.body.style.overflow = "hidden";
        }

        const sequence = async () => {
            // 0. Inicio
            await new Promise((r) => setTimeout(r, 50));
            setStep(0);

            // Tiempo lectura palabra 1 (Estrategia) - 1.4s
            await new Promise((r) => setTimeout(r, 1400));
            setStep(1);

            // Tiempo lectura palabra 2 (Impacto) - 1.8s
            await new Promise((r) => setTimeout(r, 1800));
            setStep(2); // Logo ENTRA

            await new Promise((r) => setTimeout(r, 800));
            setStep(3);

            // Tipeo de "Construye"
            const deleteWord = "Para";
            const typeWord = "Construye";

            // Borrar "Para"
            let currentPrefix = deleteWord;
            for (let i = deleteWord.length; i >= 0; i--) {
                setPrefix(currentPrefix.slice(0, i));
                currentPrefix = currentPrefix.slice(0, i);
                await new Promise((r) => setTimeout(r, 50));
            }

            // Escribir "Construye"
            for (let i = 0; i <= typeWord.length; i++) {
                setPrefix(typeWord.slice(0, i));
                await new Promise((r) => setTimeout(r, 80));
            }

            // Pausa antes de bajada
            await new Promise((r) => setTimeout(r, 800));

            // Paso 4: Salida final
            setStep(4);

            // Pausa abajo
            await new Promise((r) => setTimeout(r, 1600));

            // Paso 5: Logo sube
            setStep(5);

            // Esperar viaje del logo
            await new Promise((r) => setTimeout(r, 1800));

            if (typeof window !== "undefined") {
                sessionStorage.setItem("introShown", "true");
                window.dispatchEvent(new Event("intro-complete"));
                document.body.style.overflow = "auto";
            }
            setShow(false);
        };

        sequence();
    }, []);

    // AJUSTE POSICIÓN FINAL: 46
    const targetY = windowHeight ? 46 - (windowHeight / 2) : -300;
    const targetScale = 0.40;

    // Mobile-aware variants: drop the heavy 3D rotateX/perspective combo
    // on phones (causes frame drops, animations look broken). On desktop
    // we keep the original rotate-flip effect.
    const flipVariants = useMemo(() => (
        isMobile
            ? {
                enter: { y: 30, opacity: 0 },
                center: { y: 0, opacity: 1 },
                exit: { y: -30, opacity: 0 },
            }
            : {
                enter: { rotateX: -90, y: 20, opacity: 0, transformOrigin: "50% 50% -20px" },
                center: { rotateX: 0, y: 0, opacity: 1, transformOrigin: "50% 50% -20px" },
                exit: { rotateX: 90, y: -20, opacity: 0, transformOrigin: "50% 50% -20px" },
            }
    ), [isMobile]);

    const logoVariants = useMemo(() => (
        isMobile
            ? {
                enter: { y: 30, opacity: 0, scale: 1, transition: { duration: 0.8, ease: CUSTOM_EASE } },
                center: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: CUSTOM_EASE } },
                drop: { y: 60, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" as Easing } },
                fly: { y: targetY, x: 0, opacity: 1, scale: targetScale, transition: { duration: 1.2, ease: "easeInOut" as Easing } },
            }
            : {
                enter: { rotateX: -90, y: 20, opacity: 0, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: CUSTOM_EASE } },
                center: { rotateX: 0, y: 0, opacity: 1, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: CUSTOM_EASE } },
                drop: { rotateX: 0, y: 80, opacity: 1, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.0, ease: "easeInOut" as Easing } },
                fly: { rotateX: 0, y: targetY, x: 3, opacity: 1, scale: targetScale, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: "easeInOut" as Easing } },
            }
    ), [targetY, targetScale, isMobile]);

    // VARIANTS PARA LÍNEA 2
    const line2Variants = useMemo(() => (
        isMobile
            ? {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: CUSTOM_EASE } },
                exit: { y: 30, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" as Easing } },
            }
            : {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: CUSTOM_EASE } },
                exit: { rotateX: -90, y: 40, opacity: 0, transformOrigin: "50% 50% -20px", transition: { duration: 1.0, ease: "easeInOut" as Easing } },
            }
    ), [isMobile]);

    // Tipografias mobile vs desktop
    const word1Class = isMobile
        ? "!text-2xl font-bold !text-white tracking-widest absolute uppercase font-[family-name:var(--font-heading)]"
        : "!text-3xl md:!text-5xl font-bold !text-white tracking-widest absolute uppercase font-[family-name:var(--font-heading)] backface-hidden";

    const line2Class = isMobile
        ? "!text-base !text-white font-normal tracking-wide text-center font-[family-name:var(--font-body)] drop-shadow-md leading-snug"
        : "!text-xl md:!text-3xl !text-white font-normal tracking-wide text-center font-[family-name:var(--font-body)] drop-shadow-md leading-tight backface-hidden";

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[#023566] flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`relative flex flex-col items-center justify-center w-full max-w-6xl px-4 ${isMobile ? "" : "perspective-[1000px]"}`}>

                        {/* CONTENEDOR PRINCIPAL */}
                        <div className={`h-20 md:h-24 w-full flex items-center justify-center relative mb-0 ${isMobile ? "" : "perspective-[1000px]"} overflow-visible`}>

                            {/* PALABRAS - LINEA 1 */}
                            <AnimatePresence mode="popLayout" initial={false}>
                                {step === 0 && (
                                    <motion.h1
                                        key="word1"
                                        variants={flipVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={FLIP_TRANSITION}
                                        className={word1Class}
                                    >
                                        {words[0]}
                                    </motion.h1>
                                )}
                                {step === 1 && (
                                    <motion.h1
                                        key="word2"
                                        variants={flipVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={FLIP_TRANSITION}
                                        className={word1Class}
                                    >
                                        {words[1]}
                                    </motion.h1>
                                )}
                            </AnimatePresence>

                            {/* LOGO */}
                            {step >= 2 && (
                                <motion.div
                                    key="logo-slot"
                                    variants={logoVariants}
                                    initial="enter"
                                    animate={step >= 5 ? "fly" : step === 4 ? "drop" : "center"}
                                    className={`absolute z-20 flex justify-center items-center ${isMobile ? "" : "backface-hidden"}`}
                                >
                                    <Image
                                        src={finalLogo}
                                        alt="Luciérnaga"
                                        width={300}
                                        height={100}
                                        className="object-contain"
                                        priority
                                        style={{ maxHeight: isMobile ? '70px' : '100px', width: 'auto' }}
                                    />
                                </motion.div>
                            )}

                            {/* LINEA 2 - SINCRONIZADA CON VARIANTS */}
                            <AnimatePresence>
                                {step < 4 && (
                                    <motion.div
                                        key="line2"
                                        variants={line2Variants}
                                        initial="hidden"
                                        animate={step >= 0 ? "visible" : "hidden"}
                                        exit="exit"
                                        className={`absolute top-16 md:top-24 w-full flex justify-center items-center z-10 px-4 ${isMobile ? "" : "perspective-[1000px]"}`}
                                    >
                                        <p className={line2Class}>
                                            {/* prefix wrapped in inline-block min-width so the
                                                whole sentence does not horizontally shift while
                                                "Para" is deleted and "Construye" is typed letter
                                                by letter — keeps text-center stable. */}
                                            <span
                                                className="inline-block text-left align-baseline"
                                                style={{
                                                    minWidth: isMobile ? '5.5em' : '6em',
                                                    color: (prefix.startsWith("C") || prefix.startsWith("c")) ? "#FFED00" : "white",
                                                }}
                                            >
                                                {prefix}
                                            </span>
                                            {baseText}
                                            <span className={`inline-block w-[2px] ${isMobile ? "h-4" : "h-6 md:h-8"} bg-white animate-pulse ml-2 align-middle`}></span>
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
