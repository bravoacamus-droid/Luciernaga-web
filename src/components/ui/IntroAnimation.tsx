"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const words = ["Estrategia", "Impacto"];
const finalLogo = "/logo2.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);
    const [text, setText] = useState("Para una marca que brilla diferente");
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowHeight(window.innerHeight);
            document.body.style.overflow = "hidden";
        }

        const sequence = async () => {
            // Initial Hold
            await new Promise((r) => setTimeout(r, 800));
            setStep(0); // Show "Estrategia"

            await new Promise((r) => setTimeout(r, 1600));
            setStep(1); // Show "Impacto"

            await new Promise((r) => setTimeout(r, 1600));
            setStep(2); // Show Logo

            // Wait a bit before typing
            await new Promise((r) => setTimeout(r, 1000));
            setStep(3);

            // Typing Logic
            const baseText = " marca que brilla diferente";
            const deleteText = "Para una";
            const typeText = "Construye una";

            // Delete "Para una"
            let currentPrefix = deleteText;
            for (let i = deleteText.length; i >= 0; i--) {
                setText(currentPrefix.slice(0, i) + baseText);
                currentPrefix = currentPrefix.slice(0, i);
                await new Promise((r) => setTimeout(r, 40));
            }

            // Type "Construye una"
            for (let i = 0; i <= typeText.length; i++) {
                setText(typeText.slice(0, i) + baseText);
                await new Promise((r) => setTimeout(r, 60));
            }

            // Hold final state
            await new Promise((r) => setTimeout(r, 1800));
            setStep(4); // Trigger Exit Animation

            // Wait for exit animation to finish
            await new Promise((r) => setTimeout(r, 1200));

            if (typeof window !== "undefined") {
                document.body.style.overflow = "auto";
            }
            onComplete();
        };

        sequence();
    }, [onComplete]);

    const targetY = windowHeight ? -(windowHeight / 2) + 48 : -300;

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-[#023566] flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4">

                {/* LINE 1 Container */}
                <div className="h-24 md:h-32 w-full flex items-center justify-center relative mb-2">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.h1
                                key="word1"
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -80, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-4xl md:text-6xl font-bold text-white tracking-tight absolute font-sans"
                            >
                                {words[0]}
                            </motion.h1>
                        )}
                        {step === 1 && (
                            <motion.h1
                                key="word2"
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -80, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-4xl md:text-6xl font-bold text-white tracking-tight absolute font-sans"
                            >
                                {words[1]}
                            </motion.h1>
                        )}
                    </AnimatePresence>

                    {/* LOGO */}
                    {step >= 2 && (
                        <motion.div
                            initial={{ y: 80, opacity: 0, scale: 0.8 }}
                            animate={step === 4 ? {
                                y: targetY,
                                scale: 0.3,
                                opacity: 0
                            } : {
                                y: 0, opacity: 1, scale: 1
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                opacity: { duration: 0.5, delay: 0.7 }
                            }}
                            className="absolute z-20"
                        >
                            <Image
                                src={finalLogo}
                                alt="Luciérnaga"
                                width={400}
                                height={100}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    )}
                </div>

                {/* LINE 2: Typing Phrase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: (step >= 0 && step < 4) ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute mt-28 md:mt-36"
                >
                    <p className="text-lg md:text-xl text-white font-light tracking-wide text-center min-w-[300px] font-sans">
                        {text}
                        <span className="inline-block w-[2px] h-5 bg-white animate-pulse ml-1 align-middle"></span>
                    </p>
                </motion.div>

            </div>
        </motion.div>
    );
}
