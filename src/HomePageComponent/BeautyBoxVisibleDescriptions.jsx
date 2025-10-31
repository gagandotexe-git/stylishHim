"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
    {
        "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
        "alt": "Charcoal Face Wash",
        "title": "Redefine Your Grooming",
        "desc": "Men's care redefined",
        "position": { "x": "-38vw", "y": "-25vh" },
        "mobilePosition": { "x": "-30vw", "y": "-13vh" },
        "descPosition": "top-10 left-1/2 -translate-x-1/2 text-center md:top-12"
    },
    {
        "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
        "alt": "Hydrating Beard Oil",
        "title": "Stay Effortlessly Stylish",
        "desc": "For the stylish man",
        "position": { "x": "38vw", "y": "-25vh" },
        "mobilePosition": { "x": "30vw", "y": "-13vh" },
        "descPosition": "top-1/2 right-3 -translate-y-1/2 text-right md:right-12"
    },
    {
       "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
         "alt": "SPF 50 Moisturizer",
        "title": "Routine Elevated",
        "desc": "Elevate your routine",
        "position": { "x": "-38vw", "y": "28vh" },
        "mobilePosition": { "x": "-30vw", "y": "13vh" },
        "descPosition": "top-1/2 left-3 -translate-y-1/2 text-left md:left-12"
    },
    {
       "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
         "alt": "Matte Hair Clay",
        "title": "Built for Bold Confidence",
        "desc": "Confidence for men",
        "position": { "x": "38vw", "y": "28vh" },
        "mobilePosition": { "x": "30vw", "y": "13vh" },
        "descPosition": "bottom-10 left-1/2 -translate-x-1/2 text-center md:bottom-12"
    }
]



export default function BeautyBoxVisibleDescriptions() {
    const containerRef = useRef(null);
    const imgRefs = useRef(items.map(() => React.createRef()));
    const descRefs = useRef(items.map(() => React.createRef()));
    const boxClosedRef = useRef();
    const boxOpenRef = useRef();

    useEffect(() => {
        const mm = gsap.matchMedia();

        gsap.set(boxClosedRef.current, { scale: 0.7, opacity: 0, zIndex: 10, transformOrigin: "bottom center" });
        gsap.set(boxOpenRef.current, { scale: 0.75, opacity: 1, zIndex: 5, transformOrigin: "bottom center" });


        imgRefs.current.forEach((ref) => {
            gsap.set(ref.current, {
                scale: 0.6,
                opacity: 0,
                rotationX: 0,
                rotationY: 0,
                //  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                transformOrigin: "center center",
            });
        });

        descRefs.current.forEach((ref) => {
            gsap.set(ref.current, { opacity: 0, y: 20, scale: 0.85 });
        });

        mm.add(
            {
                isMobile: "(max-width: 767px)",
                isDesktop: "(min-width: 768px)",
            },
            (context) => {
                const { isMobile, isDesktop } = context.conditions;

                const timeline = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" }, repeat: -1, yoyo: true });

                // Animate box open/closed toggle
                timeline.to(boxOpenRef.current, { scale: isMobile ? 1.05 : 1, opacity: 1 });
                timeline.to(boxClosedRef.current, { scale: isMobile ? 1.15 : 1.1, opacity: 0 }, "<");
                timeline.to(boxOpenRef.current, { opacity: 0, duration: 0.4 }, "+=1");
                timeline.to(boxClosedRef.current, { opacity: 1, duration: 0.4, scale: isMobile ? 1.2 : 1.15 }, "<");

                // Animate product items with staggered entrance
                items.forEach((item, i) => {
                    const pos = isMobile ? item.mobilePosition : item.position;

                    timeline.to(
                        imgRefs.current[i].current,
                        {
                            x: pos.x,
                            y: pos.y,
                            scale: isMobile ? 1 : 1.15,
                            rotationX: 0,
                            rotationY: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "elastic.out(1, 0.6)",
                        },
                        "-=0.4"
                    );

                    timeline.to(
                        descRefs.current[i].current,
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: "back.out(1.7)",
                        },
                        "<"
                    );

                    // Interactive hover/tap tilt and scale animation
                    const el = imgRefs.current[i].current;
                    el.addEventListener("mouseenter", () => {
                        gsap.to(el, { scale: 1.25, rotationX: 10, rotationY: 7, duration: 0.3, ease: "power2.out" });
                    });
                    el.addEventListener("mouseleave", () => {
                        gsap.to(el, { scale: isMobile ? 1 : 1.15, rotationX: 0, rotationY: 0, duration: 0.3, ease: "power2.inOut" });
                    });
                    if (isMobile) {
                        el.addEventListener("touchstart", () => {
                            gsap.to(el, { scale: 1.25, rotationX: 10, rotationY: 7, duration: 0.3, ease: "power2.out" });
                        });
                        el.addEventListener("touchend", () => {
                            gsap.to(el, { scale: 1, rotationX: 0, rotationY: 0, duration: 0.3, ease: "power2.inOut" });
                        });
                    }
                });

                return () => {
                    timeline.kill();
                    imgRefs.current.forEach((ref) => gsap.killTweensOf(ref.current));
                };
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full mx-auto h-[70vh] md:h-[90vh] my-8 flex items-center justify-center bg-gradient-to-br from-white via-neutral-100 to-neutral-300 rounded-3xl overflow-hidden perspective-1500"
            style={{ perspectiveOrigin: "50% 50%" }}
        >
            {/* Closed Box */}
            <img
                ref={boxClosedRef}
                src="/images/OpenBox.png"
                alt="Closed Box"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: "10rem", height: "10rem", willChange: "transform" }}
            />

            {/* Open Box */}
            <img
                ref={boxOpenRef}
                src="/images/ClosedBox.png"
                alt="Open Box"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: "10rem", height: "10rem", willChange: "transform" }}
            />

            {/* Product Items */}
            {items.map((item, i) => (
                <React.Fragment key={item.title}>
                    <img
                        ref={imgRefs.current[i]}
                        src={item.src}
                        alt={item.alt}
                        className="absolute w-36 h-24 md:w-56 md:h-36 rounded-xl shadow-lg      object-cover z-20"
                        style={{ willChange: "transform, box-shadow" }}
                    />
                    <div
                        ref={descRefs.current[i]}
                        className={`absolute z-30 max-w-xs rounded-lg px-4 py-3 shadow-md text-sm border border-neutral-300 bg-white/95 ${item.descPosition}`}
                        style={{ willChange: "transform, opacity", color: "#222", boxShadow: "0 12px 24px -4px #aaa6" }}
                    >
                        <div className="font-semibold text-sm md:text-lg text-neutral-800 mb-1">{item.title}</div>
                        <div className="text-neutral-600">{item.desc}</div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
