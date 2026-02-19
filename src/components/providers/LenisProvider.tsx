"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
    children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings
        lenisRef.current = new Lenis({
            duration: 0.8, // Más rápido (era 1.2)
            easing: (t) => 1 - Math.pow(1 - t, 3), // Curva más suave
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2, // Más responsivo
            touchMultiplier: 1.5,
        });

        // RAF loop optimizado
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}
