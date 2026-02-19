import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, MonitorSmartphone, Share2, Tag } from 'lucide-react';

// --- DATA (Simulated Content for 2026) ---
const articles = [
    {
        slug: 'soberania-digital',
        date: '18 FEBRERO 2026',
        title: '¿Es tu marca realmente soberana de su comunicación?',
        subtitle: 'En un ecosistema donde los algoritmos deciden quién te ve, la verdadera independencia digital ya no es una opción, es una estrategia de supervivencia.',
        image: '/images/blog/marca.webp',
        category: 'Estrategia',
        readTime: '8 min lectura',
        content: (
            <>
                <p className="mb-6 first-letter:text-5xl first-letter:font-black first-letter:text-[#F33869] first-letter:mr-2 first-letter:float-left leading-relaxed">
                    Durante la última década, hemos construido imperios digitales sobre terrenos alquilados. Facebook, Instagram, TikTok y ahora Threads nos prometieron alcance gratuito, pero el algoritmo de 2026 ha cerrado finalmente el grifo. El alcance orgánico promedio ha caído por debajo del 0.5% para marcas comerciales, obligando a las empresas a pagar un "peaje" cada vez más alto por acceder a su propia audiencia.
                </p>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">El fin del 'Inquilino Digital'</h3>
                <p className="mb-6 leading-relaxed">
                    Ser un "inquilino digital" significa que tu conexión con tu audiencia depende enteramente de un intermediario. Si mañana Meta cambia sus términos, decide que tu contenido infringe una norma opaca o si TikTok es prohibido en más regiones, tu negocio pierde su voz instantáneamente. La soberanía de marca no se trata de abandonar las redes sociales —siguen siendo excelentes canales de descubrimiento—, sino de dejar de depender de ellas como tu único canal de distribución y retención.
                </p>
                <p className="mb-6 leading-relaxed">
                    El concepto de "Shadowban" ya no es una teoría de conspiración, es una realidad algorítmica. Las marcas que no pagan publicidad ven su visibilidad estrangulada. La única respuesta estratégica viable es construir infraestructuras propias donde tú dictas las reglas.
                </p>
                <blockquote className="border-l-4 border-[#FFED00] pl-6 py-2 my-8 italic text-xl text-[#023566] font-medium bg-gray-50 pr-4">
                    "La base de datos propia es el nuevo oro. Si no tienes el email o el teléfono de tu cliente, no tienes un cliente, tienes un seguidor prestado."
                </blockquote>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">Estrategias de Retorno al Origen: El Renacimiento del Owned Media</h3>
                <p className="mb-6 leading-relaxed">
                    Las marcas más inteligentes de 2026 están invirtiendo agresivamente en canales propios (Owned Media). No es un retorno nostálgico al pasado, es una adaptación a la fragmentación de la atención. Esto incluye:
                </p>
                <ul className="list-none space-y-6 mb-8 pl-4">
                    <li className="flex items-start gap-4">
                        <span className="text-[#F33869] font-black text-xl">01.</span>
                        <div>
                            <strong className="text-[#023566] block mb-1">Newsletters Editoriales (No Promocionales)</strong>
                            <span className="text-gray-600">El email marketing ha evolucionado. Ya no se trata de enviar catálogos, sino de crear publicaciones editoriales de nicho. Substack y Beehiiv nos enseñaron que la gente quiere leer calidad en su bandeja de entrada, lejos del ruido del feed.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-[#F33869] font-black text-xl">02.</span>
                        <div>
                            <strong className="text-[#023566] block mb-1">Comunidades Privadas y "Dark Social"</strong>
                            <span className="text-gray-600">Slack, Discord, Telegram o plataformas propias (Circle) donde el algoritmo no filtra la conversación. Aquí se gesta la verdadera lealtad y el "Word of Mouth" digital que las herramientas de atribución no pueden medir.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-[#F33869] font-black text-xl">03.</span>
                        <div>
                            <strong className="text-[#023566] block mb-1">La Web como Hub de Experiencia</strong>
                            <span className="text-gray-600">Tu sitio web no puede ser solo un folleto estático; debe ser una herramienta útil. Calculadoras, diagnósticos interactivos, bibliotecas de recursos y experiencias inmersivas que justifiquen una visita directa.</span>
                        </div>
                    </li>
                </ul>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">Data Zero-Party: El Activo Definitivo</h3>
                <p className="mb-6 leading-relaxed">
                    Con la muerte de las cookies de terceros, la data que tus usuarios te entregan voluntariamente (Zero-Party Data) es invaluable. Preferencias, intenciones de compra, fechas importantes... esta información solo se comparte en un entorno de confianza soberana, no en un feed público.
                </p>
                <p className="mb-6 leading-relaxed">
                    La pregunta para este año no es cuántos seguidores nuevos ganaste, sino cuántos de esos seguidores podrías contactar directamente si Instagram desapareciera mañana. La soberanía no es un lujo, es el seguro de vida de tu marca.
                </p>
            </>
        )
    },
    {
        slug: 'color-2026',
        date: '10 FEBRERO 2026',
        title: 'El color del año 2026: ¿Por qué el mundo del diseño reacciona así?',
        subtitle: 'Pantone ha hablado y el "Ethereal Mist" está dividiendo opiniones. Un análisis de por qué buscamos calma visual en medio del caos de la IA.',
        image: '/images/blog/colores.webp',
        category: 'Tendencias',
        readTime: '6 min lectura',
        content: (
            <>
                <p className="mb-6 leading-relaxed">
                    Después del vibrante "Viva Magenta" de años pasados y el optimismo tecnológico neón del 2025, el 2026 nos trae un giro inesperado en la narrativa cromática global. El color del año, oficialmente bautizado como <strong>"Ethereal Mist"</strong> (una mezcla sutil, casi imperceptible, de gris perla y azul cián pálido), ha sido recibido con una mezcla de alivio profundo y confusión inicial.
                </p>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">La Psicología del Silencio Visual</h3>
                <p className="mb-6 leading-relaxed">
                    Para entender esta elección, debemos mirar el contexto. Vivimos saturados. La generación de imágenes por IA ha inundado nuestras retinas con colores hipersaturados, contrastes imposibles y perfecciones plásticas que rozan lo inquietante ("Uncanny Valley"). En respuesta a este ruido digital constante, el ojo humano fisiológicamente anhela descanso.
                </p>
                <p className="mb-6 leading-relaxed">
                    "Ethereal Mist" no es aburrido; es un respiro. Representa la neblina antes del amanecer, un momento de pausa, incertidumbre suave y claridad potencial. Es el color del "Silencio Visual". En un mundo que grita por atención, el lujo definitivo es la ausencia de estridencia.
                </p>
                <div className="bg-[#023566] text-white p-6 my-8 skew-x-[-2deg] shadow-xl border-l-8 border-[#FFED00]">
                    <p className="text-lg font-bold text-center italic skew-x-[2deg]">
                        "El diseño de 2026 no grita, susurra. Y en un mundo de gritos, el susurro es lo único que se escucha con atención."
                    </p>
                </div>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">Aplicación en UI Digital: Adiós al Glassmorphism</h3>
                <p className="mb-6 leading-relaxed">
                    Para los diseñadores de interfaces, este cambio marca el fin de la era "Glassmorphism" brillante y saturada. Estamos entrando en la era del <strong>"Soft Matte"</strong>. Superficies que simulan papel de alta calidad, texturas granulosas sutiles, sombras difusas y tipografías con mucho aire (tracking positivo y grandes interlineados).
                </p>
                <p className="mb-6 leading-relaxed">
                    Las interfaces de 2026 priorizan la legibilidad y la calma cognitiva. Menos notificaciones rojas, más estados de "focus". Colores de fondo que no cansan la vista tras 8 horas de pantalla.
                </p>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">El Diseño Regenerativo</h3>
                <p className="mb-6 leading-relaxed">
                    Más allá de la estética, este color habla de sostenibilidad. Los pigmentos necesarios para imprimir colores neón son químicamente más agresivos. Los tonos naturales y desaturados como el "Ethereal Mist" evocan materiales reciclados, procesos orgánicos y una vuelta a lo esencial. Las marcas que adopten esta paleta comunicarán madurez, transparencia ecológica y, sobre todo, una humanidad tranquila que la IA aún le cuesta replicar.
                </p>
            </>
        )
    },
    {
        slug: 'ux-agentica',
        date: '05 ENERO 2026',
        title: 'UX en la Era Agéntica: Todo lo que debes saber sobre ChatGPT Atlas',
        subtitle: 'La interfaz gráfica está muriendo. Bienvenido a la era de la intención, donde los agentes de IA navegan la web por ti.',
        image: '/images/blog/Agentica.webp',
        category: 'Tecnología',
        readTime: '10 min lectura',
        content: (
            <>
                <p className="mb-6 leading-relaxed">
                    Hasta 2025, el paradigma del diseño web era simple: diseñábamos interfaces para dedos (móvil) y ojos (desktop) humanos. Hacíamos botones grandes (CTA), cuidábamos el contraste visual y optimizábamos "user flows" para guiar el clic. Con el lanzamiento masivo de <strong>ChatGPT Atlas</strong> y los modelos de acción autónoma (LAMs), esto ha cambiado para siempre.
                </p>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">La Muerte de la GUI (Graphical User Interface)</h3>
                <p className="mb-6 leading-relaxed">
                    La nueva paradigma es la LUI (Language User Interface) y, más radical aún, la "No-UI". En la Era Agéntica, el usuario ya no visita tu web de e-commerce, navega categorías, aplica filtros y busca el botón de compra. El usuario simplemente le dice a su agente personal: <em>"Cómprame esas zapatillas que vi ayer en el video de MKBHD, pero en rojo y talla 42, busca el mejor precio"</em>.
                </p>
                <p className="mb-6 leading-relaxed">
                    El agente navega por ti. Lee el código de las tiendas, compara precios en milisegundos y ejecuta la transacción. Si tu web es visualmente hermosa pero semánticamente un desastre, el agente la ignorará.
                </p>
                <blockquote className="border-l-4 border-[#F33869] pl-6 py-2 my-8 italic text-xl text-[#023566] font-medium bg-gray-50">
                    "Tu sitio web ya no necesita ser solo fácil de usar para humanos; necesita ser fácil de leer e interpretar para robots. La legibilidad máquina es el nuevo SEO."
                </blockquote>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">De SEO a LLMO (Large Language Model Optimization)</h3>
                <p className="mb-6 leading-relaxed">
                    El SEO técnico tradicional se ha transformado en AIO (Artificial Intelligence Optimization) o LLMO. Ya no optimizamos para keywords, optimizamos para <strong>contexto y autoridad</strong>. ¿Cómo preparas tu marca?
                </p>
                <ul className="list-disc list-inside space-y-4 mb-6 text-[#023566] font-medium pl-4">
                    <li>
                        <strong className="text-[#F33869]">Datos Estructurados (Schema.org) al extremo:</strong> Cada producto, precio, reseña y autor debe estar etiquetado para que el agente entienda "qué es" sin ambigüedad.
                    </li>
                    <li>
                        <strong className="text-[#F33869]">APIs Públicas y "Manifests":</strong> Las webs modernas exponen un archivo `ai-plugin.json` o similar que le dice al agente: "Aquí puedes buscar productos", "Aquí puedes ver stock".
                    </li>
                    <li>
                        <strong className="text-[#F33869]">Contenido libre de retórica vacía:</strong> Los LLMs penalizan el "fluff" (relleno). Quieren datos, hechos, tablas comparativas y respuestas directas.
                    </li>
                </ul>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">El Futuro: "Headless Brands"</h3>
                <p className="mb-6 leading-relaxed">
                    Nos dirigimos hacia un futuro de "Marcas Headless". Tu marca existirá como una API de servicios y valores que se manifiesta en diferentes interfaces: en una conversación de WhatsApp, en una respuesta de voz de Alexa, o renderizada visualmente en unas gafas de AR.
                </p>
                <p className="mb-6 leading-relaxed">
                    El diseñador UX del futuro no pintará pantallas en Figma. Diseñará <strong>intenciones, permisos y personalidades</strong> de IA. Diseñará cómo se "siente" una conversación con la marca, no cómo se ve el botón de "Enviar".
                </p>
            </>
        )
    },
    {
        slug: 'renacimiento-print',
        date: '28 DICIEMBRE 2025',
        title: 'El Renacimiento del Print: ¿Por qué las marcas digitales están imprimiendo revistas?',
        subtitle: 'En un mundo efímero de stories de 24 horas, el papel se ha convertido en el nuevo lujo silencioso.',
        image: '/images/blog/print.webp',
        category: 'Cultura Visual',
        readTime: '7 min lectura',
        content: (
            <>
                <p className="mb-6 leading-relaxed">
                    Parece contraintuitivo. Mientras Mark Zuckerberg nos empuja hacia el Metaverso y Apple nos quiere vender computadoras espaciales, las marcas más "cool" y nativas digitales del planeta están haciendo algo radicalmente obsoleto: <strong>imprimir cosas.</strong>.
                </p>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">El Papel como "Lujo Silencioso"</h3>
                <p className="mb-6 leading-relaxed">
                    Vivimos en una economía de la atención donde el scroll es infinito y el contenido es efímero. Una Story de Instagram dura 24 horas; un tweet, minutos. En este contexto, el objeto impreso ha adquirido un nuevo estatus: es permanente, es táctil y, sobre todo, es <strong>intencional</strong>.
                </p>
                <p className="mb-6 leading-relaxed">
                    Marcas como Airbnb (con su revista ya extinta pero icónica), Bumble, e incluso plataformas de crypto, están lanzando publicaciones impresas de alta gama. No lo hacen por alcance (el alcance digital es imbatible), lo hacen por <strong>profundidad y prestigio</strong>.
                </p>
                <div className="bg-[#023566] text-white p-6 my-8 skew-x-[-2deg] shadow-xl border-l-8 border-[#F33869]">
                    <p className="text-lg font-bold text-center italic skew-x-[2deg]">
                        "Imprimir es decirle a tu cliente: 'Lo que tengo que decir es tan importante que merece ocupar espacio físico en tu mesa de café'."
                    </p>
                </div>
                <h3 className="text-2xl font-black text-[#023566] mt-8 mb-4 uppercase tracking-tight">Fatiga Digital y "Slow Media"</h3>
                <p className="mb-6 leading-relaxed">
                    El cerebro humano está saturado de luz azul. El movimiento "Slow Media" aboga por el consumo de información pausado, reflexivo y monocalizado. Una revista no tiene notificaciones, no tiene pop-ups y no vibra. Ofrece una experiencia de usuario (UX) que ninguna pantalla puede replicar: <strong>atención plena</strong>.
                </p>
                <ul className="list-none space-y-4 mb-8 pl-4">
                    <li className="flex items-start gap-4">
                        <span className="text-[#F33869] font-black text-xl">01.</span>
                        <div>
                            <strong className="text-[#023566] block mb-1">Haptic Branding</strong>
                            <span className="text-gray-600">El peso del papel, la textura del relieve, el olor de la tinta. Son estímulos sensoriales que crean memorias de marca mucho más fuertes que un píxel.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-[#F33869] font-black text-xl">02.</span>
                        <div>
                            <strong className="text-[#023566] block mb-1">Curaduría vs. Algoritmo</strong>
                            <span className="text-gray-600">En digital, el algoritmo decide qué ves. En print, hay un editor humano curando una experiencia. Eso es valor.</span>
                        </div>
                    </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                    Para 2026, esperamos ver más marcas híbridas. Su ecosistema será digital para la transacción y la velocidad, pero analógico para la construcción de mito y comunidad.
                </p>
            </>
        )
    }
];

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const article = articles.find((a) => a.slug === decodedSlug);

    if (!article) return { title: 'Artículo no encontrado' };

    // Update this to your real domain when deploying
    const baseUrl = 'https://luciernaga.pe';

    return {
        title: article.title,
        description: article.subtitle,
        openGraph: {
            title: article.title,
            description: article.subtitle,
            url: `${baseUrl}/blog/${article.slug}`,
            siteName: 'Luciernaga Editorial',
            images: [{ url: `${baseUrl}${article.image}`, width: 800, height: 1200, alt: article.title }],
            locale: 'es_PE',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.subtitle,
            images: [`${baseUrl}${article.image}`],
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params first (Next.js 15+ requirement)
    const { slug } = await params;

    // Decode if necessary (though usually handled by framework)
    const decodedSlug = decodeURIComponent(slug);
    const article = articles.find((a) => a.slug === decodedSlug);

    if (!article) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-[#023566]">
                <h1 className="text-4xl font-black mb-4">404</h1>
                <p>Artículo no encontrado: <span className="font-mono bg-gray-100 px-2">{decodedSlug}</span></p>
                <Link href="/" className="mt-4 underline text-[#F33869]">Volver al inicio</Link>
            </div>
        );
    }

    // URL to share
    const shareUrl = `https://luciernaga.pe/blog/${decodedSlug}`;

    return (
        <article className="min-h-screen bg-white text-[#023566] selection:bg-[#FFED00] selection:text-[#023566]">

            {/* --- TOP NAVIGATION BAR (High Z-Index to cover main nav) --- */}
            <nav className="fixed top-0 w-full bg-white z-[100] border-b border-gray-100 py-6 px-6 md:px-12 flex justify-between items-center shadow-sm">
                <Link href="/blog" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-[#F33869] transition-colors">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Volver al Blog</span>
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-black bg-gray-100 px-3 py-1 uppercase tracking-wider rounded-none text-gray-500">
                        {article.category}
                    </span>
                </div>
            </nav>

            {/* --- MAIN LAYOUT: MAGAZINE STYLE --- */}
            <main className="pt-32 pb-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* COLUMN 1: STICKY VERTICAL IMAGE & HEADER (Left) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">

                        {/* Image Container - Vertical Premium Look (Straight) */}
                        <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl transition-all hover:scale-[1.02] duration-700">
                            <div className="absolute inset-0 bg-[#023566] opacity-10 mix-blend-multiply z-10"></div>
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#FFED00] z-20"></div>
                        </div>

                        {/* Meta Info (Desktop) */}
                        <div className="hidden lg:flex flex-col gap-4 text-sm opacity-70">
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[#F33869]" />
                                <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MonitorSmartphone size={16} className="text-[#F33869]" />
                                <span>Luciernaga Editorial</span>
                            </div>
                        </div>

                    </div>

                    {/* COLUMN 2: ARTICLE CONTENT (Right) */}
                    <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">

                        {/* Article Header */}
                        <header className="mb-12 border-b-2 border-gray-100 pb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[2px] bg-[#F33869]"></span>
                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">{article.date}</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tight mb-6" style={{ color: '#023566' }}>
                                {article.title}
                            </h1>

                            <p className="text-xl md:text-2xl font-medium text-gray-500 italic leading-relaxed">
                                {article.subtitle}
                            </p>
                        </header>

                        {/* Article Body */}
                        <div className="prose prose-lg prose-headings:font-black prose-headings:text-[#023566] prose-p:text-gray-600 prose-strong:text-[#F33869] max-w-none">
                            {article.content}
                        </div>

                        {/* Footer Share */}
                        <div className="mt-16 pt-8 border-t-2 border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#023566]">
                                <Tag size={18} />
                                <span>{article.category}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Compartir:</span>

                                {/* LinkedIn */}
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0077b5] text-white p-2 hover:opacity-80 transition-opacity"
                                    title="Compartir en LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#1877f2] text-white p-2 hover:opacity-80 transition-opacity"
                                    title="Compartir en Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" /></svg>
                                </a>

                                {/* Twitter / X */}
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white p-2 hover:opacity-80 transition-opacity"
                                    title="Compartir en X"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </main>

        </article>
    );
}
