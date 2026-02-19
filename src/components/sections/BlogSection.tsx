'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
    {
        id: 1,
        date: '18 FEBRERO 2026',
        title: '¿Es tu marca realmente soberana de su comunicación?',
        slug: 'soberania-digital',
        image: '/images/blog/marca.webp',
        category: 'Estrategia'
    },
    {
        id: 2,
        date: '10 FEBRERO 2026',
        title: 'El color del año 2026: ¿Por qué el mundo del diseño reacciona así?',
        slug: 'color-2026',
        image: '/images/blog/colores.webp',
        category: 'Tendencias'
    },
    {
        id: 3,
        date: '05 ENERO 2026',
        title: 'UX en la Era Agentica: Todo lo que debes saber sobre ChatGPT Atlas',
        slug: 'ux-agentica',
        image: '/images/blog/Agentica.webp',
        category: 'Tecnología'
    }
];

export default function BlogSection() {
    return (
        <section id="blog" className="w-full py-24 px-4 overflow-hidden relative z-10" style={{ backgroundColor: '#ffffff' }}>
            <div className="container mx-auto">

                {/* --- HEADER --- */}
                <div className="flex flex-col items-center justify-center text-center mb-16">

                    {/* Badge */}
                    <div className="bg-[#F33869] text-white font-black italic tracking-widest px-4 py-1 skew-x-[-10deg] mb-4 shadow-lg">
                        <span className="block skew-x-[10deg] text-sm md:text-base">ÚLTIMAS NOTICIAS</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4 tracking-tight" style={{ color: '#023566' }}>
                        PARA CONTINUAR TU LECTURA
                    </h2>

                    <p className="text-lg max-w-2xl font-medium mt-2" style={{ color: 'rgba(2, 53, 102, 0.7)' }}>
                        Nuestros artículos decodifican la comunicación, el diseño y lo digital para ayudarte a ver más claro.
                    </p>
                </div>

                {/* --- GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
                    {articles.map((article, index) => (
                        <Link href={`/blog/${article.slug}`} key={article.id} className="block group">

                            {/* 
                            CARD CONTAINER with "Pitcher" (Jarra) Hover Effect
                            rotate: 3deg (tilt right)
                            x: 10px (slide right)
                            y: -15px (lift up)
                        */}
                            <motion.article
                                className="relative w-full aspect-[4/5] bg-gray-900 shadow-xl overflow-hidden cursor-pointer origin-bottom-left"
                                whileHover={{
                                    rotate: 3,      // Tilt like pouring a pitcher
                                    x: 10,          // Slight shift
                                    y: -15,         // Lift
                                    boxShadow: "20px 20px 40px rgba(0,0,0,0.3)" // Enhanced shadow for depth
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >

                                {/* Image with Scale effect */}
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        loading="lazy"
                                        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#023566] via-transparent to-transparent opacity-90" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 flex flex-col items-start gap-4">

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-white/80">
                                        <span className="uppercase">{article.date}</span>
                                        <span className="w-1.5 h-1.5 bg-[#FFED00] rounded-full"></span>
                                        <span className="text-[#FFED00] uppercase">{article.category}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-[#FFED00] transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    {/* "Read Article" - Only visible on hover or kept visible for clarity */}
                                    <div className="flex items-center gap-2 mt-2 text-sm font-bold uppercase tracking-widest text-[#F33869] transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <span>Leer artículo</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>

                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F33869] via-[#FFED00] to-[#1F3FEA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            </motion.article>
                        </Link>
                    ))}
                </div>

                {/* --- BOTTOM CTA --- */}
                <div className="flex justify-center mt-16">
                    <Link href="/blog" className="group relative inline-block">
                        <div className="absolute inset-0 bg-[#023566] transform skew-x-[-10deg] transition-transform duration-300 group-hover:scale-105 shadow-xl"></div>
                        <div className="relative px-12 py-4 flex items-center gap-4 text-white font-black tracking-widest uppercase text-lg">
                            <span>Visita nuestro Blog</span>
                            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2 text-[#FFED00]" />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
}
