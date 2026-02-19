import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA: Same as BlogSection (Simulated for 2026) ---
// In a real app, this would be fetched from a CMS or API
const articles = [
    {
        id: 1,
        date: '18 FEBRERO 2026',
        title: '¿Es tu marca realmente soberana de su comunicación?',
        slug: 'soberania-digital',
        image: '/images/blog/marca.webp',
        category: 'Estrategia',
        excerpt: 'En un ecosistema dominado por algoritmos, la independencia ya no es opcional.'
    },
    {
        id: 2,
        date: '10 FEBRERO 2026',
        title: 'El color del año 2026: ¿Por qué el mundo del diseño reacciona así?',
        slug: 'color-2026',
        image: '/images/blog/colores.webp',
        category: 'Tendencias',
        excerpt: 'Pantone ha hablado y el "Ethereal Mist" divide opiniones. Un análisis profundo.'
    },
    {
        id: 3,
        date: '05 ENERO 2026',
        title: 'UX en la Era Agentica: Todo lo que debes saber sobre ChatGPT Atlas',
        slug: 'ux-agentica',
        image: '/images/blog/Agentica.webp',
        category: 'Tecnología',
        excerpt: 'La interfaz gráfica está muriendo. Bienvenido a la era de la intención.'
    },
    {
        id: 4,
        date: '28 DICIEMBRE 2025',
        title: 'El Renacimiento del Print: ¿Por qué las marcas digitales están imprimiendo revistas?',
        slug: 'renacimiento-print',
        image: '/images/blog/print.webp',
        category: 'Cultura Visual',
        excerpt: 'En un mundo efímero de stories de 24 horas, el papel se ha convertido en el nuevo lujo silencioso.'
    }
];

export const metadata = {
    title: 'Blog | Luciernaga Editorial',
    description: 'Artículos sobre estrategia, diseño y tecnología para entender el futuro digital.',
};

export default function BlogIndexPage() {
    // Highlight the first article as "Featured"
    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1);

    return (
        <div className="min-h-screen bg-white text-[#023566]">

            {/* --- HEADER --- */}
            <header className="pt-32 pb-16 px-6 md:px-12 border-b border-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <div className="bg-[#F33869] text-white font-black italic tracking-widest px-4 py-1 skew-x-[-10deg] mb-6 inline-block shadow-lg w-max">
                                <span className="block skew-x-[10deg] text-sm md:text-base">LUCIERNAGA EDITORIAL</span>
                            </div>
                            {/* Header Title Translated to Spanish */}
                            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter" style={{ color: '#023566' }}>
                                PENSAMIENTO <br /> <span style={{ color: '#1F3FEA' }}>FUTURO</span>
                            </h1>
                        </div>
                        <div className="max-w-md text-right md:text-left">
                            <p className="text-lg font-medium text-gray-500">
                                Explorando las intersecciones entre la estrategia de marca, la cultura visual y las tecnologías emergentes.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- FEATURED ARTICLE (HERO) --- */}
            <section className="py-16 px-6 md:px-12">
                <div className="container mx-auto">
                    <Link href={`/blog/${featuredArticle.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] overflow-hidden shadow-2xl skew-x-[-1deg] transition-transform duration-700 group-hover:skew-x-0 group-hover:scale-[1.01]">
                            <div className="absolute inset-0 bg-[#023566] opacity-10 mix-blend-multiply z-10"></div>
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Badge */}
                            <div className="absolute top-6 left-6 bg-[#FFED00] text-[#023566] font-black px-4 py-2 uppercase tracking-widest text-sm z-20">
                                Destacado
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4 text-sm font-bold tracking-widest text-gray-400 uppercase">
                                <span>{featuredArticle.date}</span>
                                <span className="w-1.5 h-1.5 bg-[#F33869] rounded-full"></span>
                                <span className="text-[#F33869]">{featuredArticle.category}</span>
                            </div>

                            {/* Featured Title Forced to #023566 */}
                            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 transition-colors duration-300 group-hover:opacity-80" style={{ color: '#023566' }}>
                                {featuredArticle.title}
                            </h2>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                                {featuredArticle.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#023566] group-hover:translate-x-2 transition-transform duration-300">
                                <span>Leer Artículo</span>
                                <ArrowRight size={18} className="text-[#F33869]" />
                            </div>
                        </div>

                    </Link>
                </div>
            </section>

            {/* --- LATEST ARTICLES GRID --- */}
            <section className="py-16 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto">

                    <div className="flex items-center justify-between mb-12">
                        {/* UPGRADED ICON (Arrow Down with Bounce) & NAVIGATION */}
                        <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3" style={{ color: '#023566' }}>
                            <ArrowDown className="w-6 h-6 text-[#F33869] animate-bounce" />
                            <span className="border-b-4 border-[#FFED00] pb-1">Más Recientes</span>
                        </h3>

                        {/* VISUAL NAVIGATION CONTROLS */}
                        <div className="flex gap-2">
                            <button className="p-3 border border-gray-200 bg-white hover:bg-[#023566] hover:text-white transition-colors rounded-full shadow-sm group" aria-label="Anterior">
                                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button className="p-3 border border-gray-200 bg-white hover:bg-[#023566] hover:text-white transition-colors rounded-full shadow-sm group" aria-label="Siguiente">
                                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {otherArticles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className="group flex flex-col gap-6">

                                {/* Image Thumb - WITH PLACEHOLDER LOGIC */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg border-b-4 border-[#023566] transition-transform duration-500 group-hover:-translate-y-2 bg-gray-100 flex items-center justify-center">
                                    {article.image ? (
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-gray-300">
                                            <Image
                                                width={40}
                                                height={40}
                                                src="/images/logo.png"
                                                alt="Logo Placeholder"
                                                className="opacity-20 mb-2 grayscale"
                                            />
                                            <span className="font-black uppercase tracking-widest text-xs">Próximamente</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                        <span>{article.category}</span>
                                        <span className="text-gray-300">|</span>
                                        <span>{article.date}</span>
                                    </div>

                                    {/* Grid Title Forced to #023566 */}
                                    <h4 className="text-2xl font-black uppercase leading-tight transition-colors group-hover:opacity-80" style={{ color: '#023566' }}>
                                        {article.title}
                                    </h4>

                                    <p className="text-gray-600 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>

                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* --- FOOTER CTA (Subscribe?) --- */}
            <section className="py-24 px-6 md:px-12 bg-[#023566] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F33869] transform skew-x-[-20deg] translate-x-1/2 opacity-20"></div>

                <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                            No te pierdas <span className="text-[#FFED00]">nada.</span>
                        </h2>
                        <p className="text-xl font-medium text-white/80">
                            Suscríbete a nuestra newsletter mensual para recibir los insights que no compartimos en redes sociales.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-colors"
                            />
                            <button className="bg-[#FFED00] text-[#023566] font-black px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
