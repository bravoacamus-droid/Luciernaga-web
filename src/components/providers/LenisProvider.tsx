"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
    children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Detect touch devices: iOS / Android phones get native momentum scroll;
        // Lenis-style smoothing on a coarse pointer feels laggy and clashes
        // with iOS Safari rubber-band. Wheel smoothing stays on for desktop.
        const isTouch =
            typeof window !== "undefined" &&
            window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        lenisRef.current = new Lenis({
            duration: 0.8,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2,
            // On touch: keep multiplier at 1 so native iOS/Android inertial
            // scroll is preserved 1:1 (no double-momentum jank).
            touchMultiplier: isTouch ? 1 : 1.5,
            // Lenis touch smoothing is off by default — leave it off explicitly
            // so iOS Safari handles its own scroll physics.
            syncTouch: false,
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
