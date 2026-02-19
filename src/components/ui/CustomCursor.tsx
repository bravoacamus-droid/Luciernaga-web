"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Check if device has fine pointer (mouse)
        const hasMouse = window.matchMedia("(pointer: fine)").matches;
        if (!hasMouse) {
            cursor.style.display = "none";
            cursorDot.style.display = "none";
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX - 20,
                y: e.clientY - 20,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(cursorDot, {
                x: e.clientX - 4,
                y: e.clientY - 4,
                duration: 0.1,
                ease: "power3.out",
            });
        };

        const onMouseEnterLink = () => {
            gsap.to(cursor, {
                scale: 2,
                backgroundColor: "rgba(255, 237, 0, 0.15)",
                borderColor: "#FFED00",
                duration: 0.3,
            });
            gsap.to(cursorDot, {
                scale: 0,
                duration: 0.3,
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.5)",
                duration: 0.3,
            });
            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.3,
            });
        };

        // Add event listeners
        window.addEventListener("mousemove", onMouseMove);

        // Track interactive elements
        const interactiveElements = document.querySelectorAll("a, button, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterLink);
            el.addEventListener("mouseleave", onMouseLeaveLink);
        });

        // Observe for new interactive elements
        const observer = new MutationObserver(() => {
            const newInteractiveElements = document.querySelectorAll("a, button, [role='button']");
            newInteractiveElements.forEach((el) => {
                el.addEventListener("mouseenter", onMouseEnterLink);
                el.addEventListener("mouseleave", onMouseLeaveLink);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnterLink);
                el.removeEventListener("mouseleave", onMouseLeaveLink);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/50 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    transform: "translate(-50%, -50%)",
                    transition: "border-color 0.3s, background-color 0.3s",
                }}
            />
            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[#FFED00] rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    transform: "translate(-50%, -50%)",
                }}
            />
        </>
    );
}
