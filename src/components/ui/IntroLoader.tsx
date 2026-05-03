"use client";

import { motion, AnimatePresence, Easing } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";

const finalLogo = "/logo1.png";

export default function IntroLoader() {
    const [show, setShow] = useState(true);
    const [step, setStep] = useState(0);
    const [prefix, setPrefix] = useState("Para");
    const baseText = " una marca que brilla diferente";
    const [windowHeight, setWindowHeight] = useState(0);
    // Ref al wrapper del logo del intro -- usado para medir su rect
    // y calcular el delta exacto hasta el logo del navbar.
    const introLogoRef = useRef<HTMLDivElement>(null);
    // Target dinamico para la variant "fly". Defaults a los valores
    // anteriores hardcoded por si la medicion falla.
    const [flyTarget, setFlyTarget] = useState<{ x: number; y: number; scale: number } | null>(null);
    // Lazy init: detectamos mobile en el primer render (no en useEffect)
    // para que la primera animacion ya use las variants correctas. Si
    // detectamos mobile en useEffect, el primer paint usa variants
    // desktop (rotateX) y el texto queda atascado en rotateX -90 (invisible)
    // porque framer-motion no las resetea cuando cambian las variants.
    const [isMobile] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(max-width: 1023px)").matches;
    });

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

    // ====================================================================
    // CALCULO EXACTO DEL TARGET DEL LOGO HACIA EL NAVBAR
    // ====================================================================
    // Mide ambos logos (navbar e intro) y calcula el delta exacto para
    // que el logo del intro aterrice pixel-perfect sobre la posicion del
    // navbar logo.
    //
    // CRITICAL: hay que medir SOLO cuando el logo del intro esta en
    // estado "center" (sin transform). Si medimos durante "enter"
    // (rotateX -90 en desktop), getBoundingClientRect devuelve un rect
    // distorsionado (altura ~0 por la rotacion 3D) y el calculo da Y
    // negativos demas -- el logo termina volando muy arriba.
    //
    // Timeline:
    //   step 2 (logo enters): ~3250ms desde mount
    //   logo "center" anim:   1.5s en desktop, 0.8s en mobile
    //   logo en posicion natural: ~4750ms (desktop) / ~4050ms (mobile)
    //   step 4 (drop):        ~5450ms (logo se mueve y:80)
    //
    // Empezamos a medir a 4800ms (despues de center anim en ambos casos)
    // y paramos antes de los 5400ms (antes del drop).
    useEffect(() => {
        if (typeof window === "undefined") return;

        let measured = false;

        const measure = (): boolean => {
            if (measured) return true;
            const navLogo = document.querySelector<HTMLElement>('#main-navbar a img');
            const introLogo = introLogoRef.current;
            if (!navLogo || !introLogo) return false;

            const navRect = navLogo.getBoundingClientRect();
            const introRect = introLogo.getBoundingClientRect();

            // Validacion: rects deben tener dimensiones razonables. Si
            // height es muy chica (< 30px) probablemente el logo esta en
            // mid-animation con rotateX y getBoundingClientRect devuelve
            // un rect distorsionado.
            if (navRect.width < 50 || navRect.height < 20) return false;
            if (introRect.width < 50 || introRect.height < 30) return false;

            const scale = navRect.width / introRect.width;
            const navCenterX = navRect.left + navRect.width / 2;
            const navCenterY = navRect.top + navRect.height / 2;
            const introCenterX = introRect.left + introRect.width / 2;
            const introCenterY = introRect.top + introRect.height / 2;

            setFlyTarget({
                x: navCenterX - introCenterX,
                y: navCenterY - introCenterY,
                scale,
            });
            measured = true;
            return true;
        };

        // Esperar hasta que la animacion "center" del logo termine (4.8s).
        let pollInterval: ReturnType<typeof setInterval> | null = null;
        const startTimer = setTimeout(() => {
            // Intentar inmediatamente
            if (measure()) return;
            // Si no, polling cada 100ms hasta antes del drop (~5400ms)
            pollInterval = setInterval(() => {
                if (measure() && pollInterval) {
                    clearInterval(pollInterval);
                }
            }, 100);
        }, 4800);

        // Stop polling antes del drop animation (a los ~5400ms)
        const stopTimer = setTimeout(() => {
            if (pollInterval) clearInterval(pollInterval);
        }, 5400);

        // Recalcular en resize (re-mide aunque ya este medido)
        const onResize = () => {
            measured = false;
            measure();
        };
        window.addEventListener("resize", onResize);

        return () => {
            clearTimeout(startTimer);
            clearTimeout(stopTimer);
            if (pollInterval) clearInterval(pollInterval);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // Fallback a los valores antiguos si la medicion aun no se completo.
    const fallbackY = windowHeight ? 46 - (windowHeight / 2) : -300;
    const targetY = flyTarget?.y ?? fallbackY;
    const targetX = flyTarget?.x ?? (isMobile ? 0 : 3);
    const targetScale = flyTarget?.scale ?? 0.40;

    // Mobile-aware variants: drop the heavy 3D rotateX/perspective combo
    // on phones (causes frame drops, animations look broken). On desktop
    // we keep the original rotate-flip effect. Mobile variants explicitly
    // set rotateX:0 to neutralize any sticky 3D state.
    const flipVariants = useMemo(() => (
        isMobile
            ? {
                enter: { rotateX: 0, y: 30, opacity: 0 },
                center: { rotateX: 0, y: 0, opacity: 1 },
                exit: { rotateX: 0, y: -30, opacity: 0 },
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
                enter: { rotateX: 0, y: 30, opacity: 0, scale: 1, transition: { duration: 0.8, ease: CUSTOM_EASE } },
                center: { rotateX: 0, y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: CUSTOM_EASE } },
                drop: { rotateX: 0, y: 60, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" as Easing } },
                fly: { rotateX: 0, y: targetY, x: targetX, opacity: 1, scale: targetScale, transition: { duration: 1.2, ease: "easeInOut" as Easing } },
            }
            : {
                enter: { rotateX: -90, y: 20, opacity: 0, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: CUSTOM_EASE } },
                center: { rotateX: 0, y: 0, opacity: 1, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: CUSTOM_EASE } },
                drop: { rotateX: 0, y: 80, opacity: 1, scale: 1, transformOrigin: "50% 50% -20px", transition: { duration: 1.0, ease: "easeInOut" as Easing } },
                fly: { rotateX: 0, y: targetY, x: targetX, opacity: 1, scale: targetScale, transformOrigin: "50% 50% -20px", transition: { duration: 1.5, ease: "easeInOut" as Easing } },
            }
    ), [targetY, targetX, targetScale, isMobile]);

    // VARIANTS PARA LÍNEA 2 -- fade puro (sin desplazamiento) para
    // sentirse suave. Misma logica en desktop y mobile: la linea solo
    // aparece y desaparece, sin animaciones pesadas.
    const line2Variants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
        exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" as Easing } },
    }), []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[#023566] flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* perspective y backface-hidden solo se aplican en desktop:
                        son necesarios para el flip 3D real, pero en mobile (que
                        no usa rotateX) son overhead puro -- fuerzan una capa de
                        compositing GPU para toda la jerarquia hijo, lo que causa
                        el LAG/jank reportado por el usuario en celular. */}
                    <div className={`relative flex flex-col items-center justify-center w-full max-w-6xl px-4 ${isMobile ? "" : "perspective-[1000px]"}`}>

                        {/* CONTENEDOR PRINCIPAL */}
                        <div className={`h-20 md:h-24 w-full flex items-center justify-center relative mb-0 overflow-visible ${isMobile ? "" : "perspective-[1000px]"}`}>

                            {/* PALABRAS - LINEA 1 -- en mobile usamos mode "wait"
                                para no superponer dos motion elements (cero costo
                                de layout-pop). En desktop mantenemos popLayout. */}
                            <AnimatePresence mode={isMobile ? "wait" : "popLayout"} initial={false}>
                                {step === 0 && (
                                    <motion.h1
                                        key="word1"
                                        variants={flipVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={FLIP_TRANSITION}
                                        className={`!text-3xl md:!text-5xl font-bold !text-white tracking-widest absolute uppercase font-[family-name:var(--font-heading)] ${isMobile ? "" : "backface-hidden"}`}
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
                                        className={`!text-3xl md:!text-5xl font-bold !text-white tracking-widest absolute uppercase font-[family-name:var(--font-heading)] ${isMobile ? "" : "backface-hidden"}`}
                                    >
                                        {words[1]}
                                    </motion.h1>
                                )}
                            </AnimatePresence>

                            {/* LOGO */}
                            {step >= 2 && (
                                <motion.div
                                    key="logo-slot"
                                    ref={introLogoRef}
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
                                        style={{ maxHeight: '100px', width: 'auto' }}
                                    />
                                </motion.div>
                            )}

                            {/* LINEA 2 - fade puro */}
                            <AnimatePresence>
                                {step < 4 && (
                                    <motion.div
                                        key="line2"
                                        variants={line2Variants}
                                        initial="hidden"
                                        animate={step >= 0 ? "visible" : "hidden"}
                                        exit="exit"
                                        className={`absolute top-16 md:top-24 w-full flex justify-center items-center z-10 ${isMobile ? "" : "perspective-[1000px]"}`}
                                    >
                                        <p className={`!text-base sm:!text-xl md:!text-3xl !text-white font-normal tracking-wide text-center font-[family-name:var(--font-body)] drop-shadow-md leading-snug md:leading-tight ${isMobile ? "" : "backface-hidden"}`}>
                                            <span style={{ color: (prefix.startsWith("C") || prefix.startsWith("c")) ? "#FFED00" : "white" }}>
                                                {prefix}
                                            </span>
                                            {baseText}
                                            <span className="inline-block w-[2px] h-5 md:h-8 bg-white animate-pulse ml-2 align-middle"></span>
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
