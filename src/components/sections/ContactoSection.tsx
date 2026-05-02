"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Send, Check, Loader2, Linkedin, Facebook, Instagram, ShieldCheck, X, ChevronDown } from "lucide-react";

export default function ContactoSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Aumentamos Parallax (-15% a 15%) y ELIMINAMOS el Zoom para evitar estiramiento
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const [formState, setFormState] = useState({
        nombre: "",
        celular: "",
        countryPrefix: "+51",
        email: "",
        mensaje: "",
        politicayprivacidad: false
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Estado para el Modal de Privacidad
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    // Estado para el Dropdown de Países
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.politicayprivacidad) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after success
        setTimeout(() => setIsSuccess(false), 3000);
    };

    const countries = [
        { code: "+51", name: "Perú", iso: "pe", flag: "🇵🇪" },
        { code: "+54", name: "Argentina", iso: "ar", flag: "🇦🇷" },
        { code: "+591", name: "Bolivia", iso: "bo", flag: "🇧🇴" },
        { code: "+55", name: "Brasil", iso: "br", flag: "🇧🇷" },
        { code: "+56", name: "Chile", iso: "cl", flag: "🇨🇱" },
        { code: "+57", name: "Colombia", iso: "co", flag: "🇨🇴" },
        { code: "+593", name: "Ecuador", iso: "ec", flag: "🇪🇨" },
        { code: "+52", name: "México", iso: "mx", flag: "🇲🇽" },
        { code: "+595", name: "Paraguay", iso: "py", flag: "🇵🇾" },
        { code: "+598", name: "Uruguay", iso: "uy", flag: "🇺🇾" },
        { code: "+58", name: "Venezuela", iso: "ve", flag: "🇻🇪" },
        { code: "+34", name: "España", iso: "es", flag: "🇪🇸" },
    ];

    // Validar entrada numérica para celular
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length <= 15) {
            setFormState({ ...formState, celular: value });
        }
    };

    return (
        <section
            id="contacto"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-black"
        >
            {/* --- FONDO CINEMATOGRÁFICO CON PARALLAX --- */}
            <motion.div
                style={{
                    y,
                    backgroundImage: 'url("/images/fondocontact3.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="absolute left-0 top-[-10%] w-full h-[120%] z-0"
            />

            <div className="container relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-between">
                    {/* ... (Column 1 unchanged) ... */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex flex-col justify-center h-full relative z-20"
                    >
                        {/* SKEWED CONTAINER - SOLID COLOR */}
                        <div className="relative bg-[#023566] border border-white/20 p-10 md:p-12 -skew-x-3 shadow-2xl">

                            <div className="skew-x-3">
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-[2px] bg-[#FFED00]"></div>
                                        <span className="text-[#FFED00] font-bold text-sm tracking-[0.3em] uppercase">
                                            Contacto
                                        </span>
                                    </div>
                                    <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-8 drop-shadow-lg">
                                        EMPECEMOS<br />
                                        TU PROYECTO.
                                    </h2>
                                    <p className="text-lg font-bold leading-relaxed max-w-md border-l-4 border-[#FFED00] pl-6" style={{ color: '#FFFFFF', textShadow: '0 0 1px rgba(0,0,0,0.5)' }}>
                                        Cuéntanos tu desafío. Nosotros ponemos la estrategia, el diseño y la tecnología.
                                    </p>
                                </div>
                                <div className="space-y-10 pl-6">
                                    <div className="group cursor-pointer">
                                        <span className="block text-xs uppercase text-white/60 tracking-widest mb-2 group-hover:text-[#FFED00] transition-colors duration-300">Escríbenos</span>
                                        <a href="mailto:biluzmeryfg@gmail.com" className="text-xl lg:text-2xl font-bold text-white relative inline-block transition-transform duration-300 group-hover:translate-x-2 filter drop-shadow hidden-email-link">
                                            biluzmeryfg@gmail.com
                                        </a>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <span className="block text-xs uppercase text-white/60 tracking-widest mb-2 group-hover:text-[#FFED00] transition-colors duration-300">Llámanos</span>
                                        <a href="tel:+51947557907" className="text-xl lg:text-2xl font-bold text-white relative inline-block transition-transform duration-300 group-hover:translate-x-2 filter drop-shadow">
                                            +51 947 557 907
                                        </a>
                                    </div>
                                    <div className="flex gap-6 pt-4">
                                        <a href="https://www.linkedin.com/in/luciernagacomunica/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center border-2 border-[#0077B5] rounded-full text-white hover:bg-[#0077B5] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,119,181,0.3)] bg-black/20">
                                            <Linkedin size={20} strokeWidth={2} />
                                        </a>
                                        <a href="https://www.facebook.com/luciernagacomunica" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 flex items-center justify-center border-2 border-[#1877F2] rounded-full text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(24,119,242,0.3)] bg-black/20">
                                            <Facebook size={20} strokeWidth={2} />
                                        </a>
                                        <a href="https://www.instagram.com/luciernagacomunica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center border-2 border-[#E4405F] rounded-full text-white hover:bg-[#E4405F] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(228,64,95,0.3)] bg-black/20">
                                            <Instagram size={20} strokeWidth={2} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- COLUMNA 2: FORMULARIO --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 lg:col-start-7 relative z-10 bg-[#1a2d6e]/90 border border-white/20 p-8 lg:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] contact-form-glass"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Campo Nombre - Obligatorio con Asterisco */}
                                <div className="space-y-2">
                                    <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-[#FFED00] font-bold ml-1">
                                        Nombre <span className="text-[#F33869] text-base">*</span>
                                    </label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="nombre"
                                            required
                                            maxLength={50}
                                            value={formState.nombre}
                                            onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                                            onFocus={() => setFocusedField('nombre')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-black/20 text-white border-b-2 border-white/20 py-4 px-4 focus:outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/30 text-lg"
                                            placeholder="Tu nombre completo"
                                        />
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-[#F33869] transition-all duration-500 ${focusedField === 'nombre' ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                </div>

                                {/* Campo Celular - Obligatorio con Asterisco */}
                                <div className="space-y-2">
                                    <label htmlFor="celular" className="text-xs uppercase tracking-widest text-[#FFED00] font-bold ml-1">
                                        Celular <span className="text-[#F33869] text-base">*</span>
                                    </label>
                                    <div className="relative group flex items-end gap-2">
                                        {/* Selector de País (CUSTOM DROPDOWN) */}
                                        <div className="relative w-14 shrink-0 h-[60px] flex items-center justify-center border-b-2 border-white/20"
                                            ref={(node) => {
                                                if (node) {
                                                    // Simple click outside handler could be implemented here or with a backdrop
                                                }
                                            }}
                                        >
                                            {/* BACKDROP INVISIBLE PARA CERRAR (SOLO CUANDO ESTÁ ABIERTO) */}
                                            {isDropdownOpen && (
                                                <div
                                                    className="fixed inset-0 z-[40]"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                ></div>
                                            )}

                                            {/* TRIGGER */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center z-[45] cursor-pointer"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white/10 shadow-sm relative hover:scale-110 transition-transform">
                                                    {(() => {
                                                        const selected = countries.find(c => c.code === formState.countryPrefix);
                                                        return selected ? (
                                                            <img
                                                                src={`https://flagcdn.com/w80/${selected.iso}.png`}
                                                                alt={selected.name}
                                                                className="w-full h-full object-cover"
                                                                loading="lazy"
                                                            />
                                                        ) : null;
                                                    })()}
                                                </div>
                                            </div>

                                            {/* LISTA DESPLEGABLE */}
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 10 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 w-64 bg-[#023566] border border-white/10 shadow-2xl rounded-sm overflow-hidden z-[50] max-h-60 overflow-y-auto custom-scrollbar"
                                                    >
                                                        {countries.map((country) => (
                                                            <li
                                                                key={country.code}
                                                                onClick={() => {
                                                                    setFormState({ ...formState, countryPrefix: country.code });
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${formState.countryPrefix === country.code ? 'bg-white/10' : 'hover:bg-white/5'}`}
                                                            >
                                                                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/10">
                                                                    <img
                                                                        src={`https://flagcdn.com/w80/${country.iso}.png`}
                                                                        alt={country.name}
                                                                        className="w-full h-full object-cover"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <span className="text-white/60 text-sm font-bold w-6">{country.iso.toUpperCase()}</span>
                                                                <span className="text-white font-medium">{country.code}</span>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Input de Número */}
                                        <div className="relative w-full">
                                            {/* Prefijo visual estático */}
                                            <span className="absolute left-0 bottom-4 text-white/50 text-lg pointer-events-none pl-2">{formState.countryPrefix}</span>

                                            <input
                                                type="tel"
                                                id="celular"
                                                required
                                                value={formState.celular}
                                                onChange={handlePhoneChange}
                                                onFocus={() => setFocusedField('celular')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full bg-black/20 text-white border-b-2 border-white/20 py-4 pl-16 pr-4 focus:outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/30 text-lg"
                                                placeholder="999 999 999"
                                            />
                                            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#F33869] transition-all duration-500 ${focusedField === 'celular' ? 'w-full' : 'w-0'}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Campo Email - Obligatorio con Asterisco */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#FFED00] font-bold ml-1">
                                    Email <span className="text-[#F33869] text-base">*</span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        maxLength={80}
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-black/20 text-white border-b-2 border-white/20 py-4 px-4 focus:outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/30 text-lg"
                                        placeholder="ejemplo@empresa.com"
                                    />
                                    <div className={`absolute bottom-0 left-0 h-[2px] bg-[#F33869] transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            </div>

                            {/* Campo Mensaje - SIN ASTERISCO */}
                            <div className="space-y-2">
                                <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-[#FFED00] font-bold ml-1">
                                    Mensaje
                                </label>
                                <div className="relative group">
                                    <textarea
                                        id="mensaje"
                                        /* NOT REQUIRED */
                                        maxLength={500}
                                        rows={4}
                                        value={formState.mensaje}
                                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                                        onFocus={() => setFocusedField('mensaje')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-black/20 text-white border-b-2 border-white/20 py-4 px-4 focus:outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/30 text-lg resize-none"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                    />
                                    <div className={`absolute bottom-0 left-0 h-[2px] bg-[#F33869] transition-all duration-500 ${focusedField === 'mensaje' ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            </div>

                            {/* Política de Privacidad & Botón Modal */}
                            <div className="flex items-center gap-3 pt-4">
                                <div
                                    className="flex items-center gap-2 cursor-pointer group"
                                    onClick={() => setFormState({ ...formState, politicayprivacidad: !formState.politicayprivacidad })}
                                >
                                    <div className={`w-6 h-6 border-2 border-[#FFED00] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${formState.politicayprivacidad ? 'bg-[#FFED00]' : 'bg-transparent'}`}>
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: formState.politicayprivacidad ? 1 : 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <Check size={16} className="text-[#023566] font-bold" />
                                        </motion.div>
                                    </div>
                                    <span className="text-sm text-white/70 select-none group-hover:text-white transition-colors">
                                        He leído y acepto la
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsPrivacyOpen(true)}
                                    className="text-sm text-[#FFED00] underline decoration-1 underline-offset-2 hover:text-white transition-colors"
                                >
                                    política de privacidad
                                </button>
                                <span className="text-sm text-white/70">.</span>
                            </div>

                            {/* Botón Enviar */}
                            <button
                                type="submit"
                                disabled={!formState.politicayprivacidad || isSubmitting}
                                className={`w-full py-6 px-8 flex items-center justify-between text-lg uppercase font-black tracking-widest transition-all duration-500 relative overflow-hidden group 
                                    ${!formState.politicayprivacidad ? 'bg-gray-500/50 cursor-not-allowed text-white/50' :
                                        isSuccess ? 'bg-[#10B981] text-white' : 'bg-[#F33869] hover:bg-[#D92557] text-white'}`}
                            >
                                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                                <span className="relative z-10">
                                    {isSubmitting ? 'Enviando...' : isSuccess ? '¡Mensaje Enviado!' : 'Enviar Solicitud'}
                                </span>
                                <span className="relative z-10 flex items-center justify-center w-10 h-10 bg-black/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : isSuccess ? (
                                        <Check size={20} />
                                    ) : (
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    )}
                                </span>
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>

            {/* --- MODAL DE POLÍTICA DE PRIVACIDAD --- */}
            <AnimatePresence>
                {isPrivacyOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setIsPrivacyOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#023566] border border-white/10 p-8 md:p-12 max-w-2xl w-full shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsPrivacyOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-[#FFED00] w-10 h-10" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Política de Privacidad</h3>
                            </div>

                            <div className="text-white/80 space-y-4 text-sm md:text-base mb-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                <p>
                                    En <strong>Luciernaga Comunicaciones</strong>, la integridad y privacidad de tus datos son pilares fundamentales.
                                </p>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mt-4">1. Responsable del Tratamiento</h4>
                                <p>Los datos personales recogidos serán tratados por Luciernaga Comunicaciones, con domicilio en Lima, Perú.</p>

                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mt-4">2. Finalidad</h4>
                                <p>Gestionar las solicitudes de contacto, presupuestos y comunicaciones comerciales relacionadas con nuestros servicios.</p>

                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mt-4">3. Derechos</h4>
                                <p>Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos, enviando un correo a biluzmeryfg@gmail.com.</p>

                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mt-4">4. Seguridad</h4>
                                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado o la pérdida.</p>
                            </div>

                            <button
                                onClick={() => setIsPrivacyOpen(false)}
                                className="w-full bg-[#FFED00] text-[#023566] font-black uppercase tracking-widest py-4 hover:bg-white transition-colors text-center"
                            >
                                Entendido, Aceptar
                            </button>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
