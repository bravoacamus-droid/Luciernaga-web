"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#metodologia", label: "Método" },
    { href: "#servicios", label: "Servicios" },
    { href: "#equipo", label: "Equipo" },
    { href: "#cursos", label: "Cursos" },
    { href: "#blog", label: "Blog" },
    { href: "#contacto", label: "Contáctanos" }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isIntroDone, setIsIntroDone] = useState(false);

    useEffect(() => {
        // Chequear si ya se vio el intro en esta sesión
        if (typeof window !== "undefined") {
            const introShown = sessionStorage.getItem("introShown");
            if (introShown) {
                setIsIntroDone(true);
            }
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleIntroComplete = () => {
            setIsIntroDone(true);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("intro-complete", handleIntroComplete);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("intro-complete", handleIntroComplete);
        };
    }, []);

    return (
        <>
            <motion.header
                id="main-navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b safe-top ${isScrolled
                    ? "bg-bg-dark/80 backdrop-blur-md border-border-light py-4"
                    : "bg-transparent border-transparent py-6"
                    }`}
            >
                <div className="wrapper flex items-center justify-between relative safe-x">

                    {/* IZQUIERDA: Botón Hamburguesa Animado */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex flex-col gap-1.5 z-50 p-3 bg-[#023566] border border-white/20 shadow-lg group hover:bg-[#034482] transition-colors"
                        aria-label="Menu"
                        animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <span className="w-8 h-[2px] bg-white transition-colors group-hover:bg-[#FFED00]" />
                        <span className="w-8 h-[2px] bg-white transition-colors group-hover:bg-[#FFED00]" />
                        <span className="w-8 h-[2px] bg-white transition-colors group-hover:bg-[#FFED00]" />
                    </motion.button>

                    {/* CENTRO: LOGO - Solo visible si terminó el intro */}
                    <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <div className={`transition-opacity duration-300 ${isIntroDone ? "opacity-100" : "opacity-0"}`}>
                            <Image
                                src="/logo1.png"
                                alt="Luciérnaga"
                                width={160}
                                height={36}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* DERECHA: BOTÓN 'HABLEMOS' RESTAURADO */}
                    <a
                        href="#contacto"
                        className={`hidden lg:inline-flex text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-3 transition-all hover:bg-white hover:text-black ${isScrolled ? "bg-transparent" : "bg-transparent"
                            }`}
                    >
                        Hablemos
                    </a>

                </div>
            </motion.header>

            {/* FULLSCREEN MENU OVERLAY - CORPORATE REDESIGN */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#023566] flex items-center justify-center p-8 lg:p-20 overflow-hidden"
                    >
                        {/* GRIDO DE 2 COLUMNAS (Desktop) */}
                        <div className="w-full h-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                            {/* --- COLUMNA IZQUIERDA: INFORMACIÓN Y REDES (Col 1-5) --- */}
                            <div className="hidden lg:flex lg:col-span-5 flex-col justify-between h-full border-r border-white/10 pr-12 relative">

                                {/* Top: Info extra */}
                                <div className="space-y-6 pt-20">
                                    <h4 className="text-white/50 text-sm font-bold uppercase tracking-widest">
                                        Síguenos
                                    </h4>
                                    <div className="flex gap-4">
                                        <a href="https://www.facebook.com/luciernagacomunica" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FFED00] hover:text-[#023566] hover:border-[#FFED00] transition-all duration-300">
                                            <Facebook size={20} />
                                        </a>
                                        <a href="https://www.instagram.com/luciernagacomunica/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FFED00] hover:text-[#023566] hover:border-[#FFED00] transition-all duration-300">
                                            <Instagram size={20} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/luciernagacomunica/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FFED00] hover:text-[#023566] hover:border-[#FFED00] transition-all duration-300">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom: Frase Inspiradora */}
                                <div className="pb-10">
                                    <div className="w-12 h-1 bg-[#FFED00] mb-6"></div>
                                    <p className="text-2xl md:text-3xl font-light text-white leading-tight">
                                        "Iluminamos el camino hacia la <span className="font-bold text-[#FFED00]">excelencia empresarial</span> con estrategias que transforman."
                                    </p>
                                    <p className="text-white/40 text-sm mt-4 font-mono">
                                        © 2026 Luciérnaga Comunicaciones.
                                    </p>
                                </div>
                            </div>

                            {/* --- COLUMNA DERECHA: NAVEGACIÓN (Col 6-12) --- */}
                            <div className="lg:col-span-7 flex flex-col justify-center h-full">
                                <nav className="flex flex-col gap-4 lg:gap-2">
                                    {navLinks.map((link, i) => ( // Filter out Contact button from list if desired, but kept for list completeness
                                        link.href !== '#contacto' && (
                                            <motion.a
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 100 }}
                                                className="group flex items-center justify-between border-b border-white/10 pb-4 lg:pb-5 hover:border-[#FFED00] transition-colors"
                                            >
                                                <span className="text-3xl lg:text-5xl font-bold text-white group-hover:text-[#FFED00] transition-colors uppercase tracking-tight">
                                                    {link.label}
                                                </span>
                                                <ArrowUpRight className="text-white/20 group-hover:text-[#FFED00] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 transform" size={32} />
                                            </motion.a>
                                        )
                                    ))}
                                    {/* Contacto styled differently or at end */}
                                    <motion.a
                                        href="#contacto"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="group flex items-center justify-between border-b border-white/10 pb-4 lg:pb-5 hover:border-[#FFED00] transition-colors"
                                    >
                                        <span className="text-3xl lg:text-5xl font-bold text-white group-hover:text-[#FFED00] transition-colors uppercase tracking-tight">
                                            Contáctanos
                                        </span>
                                        <ArrowUpRight className="text-white/20 group-hover:text-[#FFED00] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 transform" size={32} />
                                    </motion.a>
                                </nav>

                                {/* Mobile Socials (Only Visible on Mobile) */}
                                <div className="lg:hidden mt-12 flex gap-4 justify-center">
                                    <a href="https://www.facebook.com/luciernagacomunica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Facebook size={18} /></a>
                                    <a href="https://www.instagram.com/luciernagacomunica/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Instagram size={18} /></a>
                                    <a href="https://www.linkedin.com/in/luciernagacomunica/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Linkedin size={18} /></a>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
