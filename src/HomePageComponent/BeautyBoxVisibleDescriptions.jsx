// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const items = [
//     {
//         "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
//         "alt": "Charcoal Face Wash",
//         "title": "Redefine Your Grooming",
//         "desc": "Men's care redefined",
//         "position": { "x": "-38vw", "y": "-25vh" },
//         "mobilePosition": { "x": "-30vw", "y": "-13vh" },
//         "descPosition": "top-10 left-1/2 -translate-x-1/2 text-center md:top-12"
//     },
//     {
//         "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
//         "alt": "Hydrating Beard Oil",
//         "title": "Stay Effortlessly Stylish",
//         "desc": "For the stylish man",
//         "position": { "x": "38vw", "y": "-25vh" },
//         "mobilePosition": { "x": "30vw", "y": "-13vh" },
//         "descPosition": "top-1/2 right-3 -translate-y-1/2 text-right md:right-12"
//     },
//     {
//        "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
//          "alt": "SPF 50 Moisturizer",
//         "title": "Routine Elevated",
//         "desc": "Elevate your routine",
//         "position": { "x": "-38vw", "y": "28vh" },
//         "mobilePosition": { "x": "-30vw", "y": "13vh" },
//         "descPosition": "top-1/2 left-3 -translate-y-1/2 text-left md:left-12"
//     },
//     {
//        "src": "https://res.cloudinary.com/dkornixrz/image/upload/v1761937298/products/laxabeftsjg9qbpo2toq.png",
//          "alt": "Matte Hair Clay",
//         "title": "Built for Bold Confidence",
//         "desc": "Confidence for men",
//         "position": { "x": "38vw", "y": "28vh" },
//         "mobilePosition": { "x": "30vw", "y": "13vh" },
//         "descPosition": "bottom-10 left-1/2 -translate-x-1/2 text-center md:bottom-12"
//     }
// ]



// export default function BeautyBoxVisibleDescriptions() {
//     const containerRef = useRef(null);
//     const imgRefs = useRef(items.map(() => React.createRef()));
//     const descRefs = useRef(items.map(() => React.createRef()));
//     const boxClosedRef = useRef();
//     const boxOpenRef = useRef();

//     useEffect(() => {
//         const mm = gsap.matchMedia();

//         gsap.set(boxClosedRef.current, { scale: 0.7, opacity: 0, zIndex: 10, transformOrigin: "bottom center" });
//         gsap.set(boxOpenRef.current, { scale: 0.75, opacity: 1, zIndex: 5, transformOrigin: "bottom center" });


//         imgRefs.current.forEach((ref) => {
//             gsap.set(ref.current, {
//                 scale: 0.6,
//                 opacity: 0,
//                 rotationX: 0,
//                 rotationY: 0,
//                 //  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
//                 transformOrigin: "center center",
//             });
//         });

//         descRefs.current.forEach((ref) => {
//             gsap.set(ref.current, { opacity: 0, y: 20, scale: 0.85 });
//         });

//         mm.add(
//             {
//                 isMobile: "(max-width: 767px)",
//                 isDesktop: "(min-width: 768px)",
//             },
//             (context) => {
//                 const { isMobile, isDesktop } = context.conditions;

//                 const timeline = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" }, repeat: -1, yoyo: true });

//                 // Animate box open/closed toggle
//                 timeline.to(boxOpenRef.current, { scale: isMobile ? 1.05 : 1, opacity: 1 });
//                 timeline.to(boxClosedRef.current, { scale: isMobile ? 1.15 : 1.1, opacity: 0 }, "<");
//                 timeline.to(boxOpenRef.current, { opacity: 0, duration: 0.4 }, "+=1");
//                 timeline.to(boxClosedRef.current, { opacity: 1, duration: 0.4, scale: isMobile ? 1.2 : 1.15 }, "<");

//                 // Animate product items with staggered entrance
//                 items.forEach((item, i) => {
//                     const pos = isMobile ? item.mobilePosition : item.position;

//                     timeline.to(
//                         imgRefs.current[i].current,
//                         {
//                             x: pos.x,
//                             y: pos.y,
//                             scale: isMobile ? 1 : 1.15,
//                             rotationX: 0,
//                             rotationY: 0,
//                             opacity: 1,
//                             duration: 0.8,
//                             ease: "elastic.out(1, 0.6)",
//                         },
//                         "-=0.4"
//                     );

//                     timeline.to(
//                         descRefs.current[i].current,
//                         {
//                             opacity: 1,
//                             y: 0,
//                             scale: 1,
//                             duration: 0.5,
//                             ease: "back.out(1.7)",
//                         },
//                         "<"
//                     );

//                     // Interactive hover/tap tilt and scale animation
//                     const el = imgRefs.current[i].current;
//                     el.addEventListener("mouseenter", () => {
//                         gsap.to(el, { scale: 1.25, rotationX: 10, rotationY: 7, duration: 0.3, ease: "power2.out" });
//                     });
//                     el.addEventListener("mouseleave", () => {
//                         gsap.to(el, { scale: isMobile ? 1 : 1.15, rotationX: 0, rotationY: 0, duration: 0.3, ease: "power2.inOut" });
//                     });
//                     if (isMobile) {
//                         el.addEventListener("touchstart", () => {
//                             gsap.to(el, { scale: 1.25, rotationX: 10, rotationY: 7, duration: 0.3, ease: "power2.out" });
//                         });
//                         el.addEventListener("touchend", () => {
//                             gsap.to(el, { scale: 1, rotationX: 0, rotationY: 0, duration: 0.3, ease: "power2.inOut" });
//                         });
//                     }
//                 });

//                 return () => {
//                     timeline.kill();
//                     imgRefs.current.forEach((ref) => gsap.killTweensOf(ref.current));
//                 };
//             }
//         );

//         return () => mm.revert();
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-full mx-auto h-[70vh] md:h-[90vh] my-8 flex items-center justify-center bg-gradient-to-br from-white via-neutral-100 to-neutral-300 rounded-3xl overflow-hidden perspective-1500"
//             style={{ perspectiveOrigin: "50% 50%" }}
//         >
//             {/* Closed Box */}
//             <img
//                 ref={boxClosedRef}
//                 src="/images/OpenBox.png"
//                 alt="Closed Box"
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{ width: "10rem", height: "10rem", willChange: "transform" }}
//             />

//             {/* Open Box */}
//             <img
//                 ref={boxOpenRef}
//                 src="/images/ClosedBox.png"
//                 alt="Open Box"
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{ width: "10rem", height: "10rem", willChange: "transform" }}
//             />

//             {/* Product Items */}
//             {items.map((item, i) => (
//                 <React.Fragment key={item.title}>
//                     <img
//                         ref={imgRefs.current[i]}
//                         src={item.src}
//                         alt={item.alt}
//                         className="absolute w-36 h-24 md:w-56 md:h-36 rounded-xl shadow-lg      object-cover z-20"
//                         style={{ willChange: "transform, box-shadow" }}
//                     />
//                     <div
//                         ref={descRefs.current[i]}
//                         className={`absolute z-30 max-w-xs rounded-lg px-4 py-3 shadow-md text-sm border border-neutral-300 bg-white/95 ${item.descPosition}`}
//                         style={{ willChange: "transform, opacity", color: "#222", boxShadow: "0 12px 24px -4px #aaa6" }}
//                     >
//                         <div className="font-semibold text-sm md:text-lg text-neutral-800 mb-1">{item.title}</div>
//                         <div className="text-neutral-600">{item.desc}</div>
//                     </div>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// } 


"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const routineSteps = [
    {
        image: "/images/facewashh.png",
        title: "Step 1: Cleanse",
        instruction: "Use Face Wash",
        description: "Start your day with a deep cleanse",
        boxPosition: { x: -150, y: -120 },
        mobileBoxPosition: { x: -100, y: -80 }
    },
    {
        image: "/images/facewashh.png",
        title: "Step 2: Hydrate",
        instruction: "Apply Moisturizer",
        description: "Lock in moisture for all-day hydration",
        boxPosition: { x: 150, y: -120 },
        mobileBoxPosition: { x: 100, y: -80 }
    },
    {
        image: "/images/facewashh.png",
        title: "Step 3: Style",
        instruction: "Use Styling Serum",
        description: "Perfect your look with premium serum",
        boxPosition: { x: -150, y: 120 },
        mobileBoxPosition: { x: -100, y: 80 }
    },
    {
        image: "/images/facewashh.png",
        title: "Step 4: Glow",
        instruction: "Apply Face Glow Serum",
        description: "Achieve that natural, radiant glow",
        boxPosition: { x: 150, y: 120 },
        mobileBoxPosition: { x: 100, y: 80 }
    }
];

export default function BeautyRoutineAnimation() {
    const [phase, setPhase] = useState('box-closed'); // box-closed, box-opening, all-products, step-by-step, returning
    const [currentStep, setCurrentStep] = useState(0);
    const containerRef = useRef(null);
    const boxClosedRef = useRef(null);
    const boxOpenRef = useRef(null);
    const productRefs = useRef(routineSteps.map(() => React.createRef()));
    const textRefs = useRef({
        title: React.createRef(),
        instruction: React.createRef(),
        description: React.createRef()
    });
    const particlesRef = useRef([]);

    // Create particles
    useEffect(() => {
        const particles = [];
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                left: 50%;
                top: 50%;
            `;
            containerRef.current?.appendChild(particle);
            particles.push(particle);
        }
        particlesRef.current = particles;

        return () => particles.forEach(p => p.remove());
    }, []);

    // Main animation sequence
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const tl = gsap.timeline();

        if (phase === 'box-closed') {
            // Initial setup
            gsap.set(boxClosedRef.current, { scale: 0.5, opacity: 0, rotation: -20 });
            gsap.set(boxOpenRef.current, { scale: 0.5, opacity: 0 });
            productRefs.current.forEach(ref => {
                gsap.set(ref.current, { scale: 0, opacity: 0, x: 0, y: 0 });
            });

            // Box entrance animation
            tl.to(boxClosedRef.current, {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });

            // Box shake
            tl.to(boxClosedRef.current, {
                rotation: 8,
                duration: 0.08,
                repeat: 7,
                yoyo: true,
                ease: "power1.inOut"
            }, "+=0.5");

            // Trigger opening
            tl.call(() => setPhase('box-opening'), null, "+=0.3");

        } else if (phase === 'box-opening') {
            // Box opens
            tl.to(boxClosedRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            });

            tl.to(boxOpenRef.current, {
                scale: 1.2,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.5)"
            }, "<");

            // Particle explosion
            tl.call(() => {
                particlesRef.current.forEach((particle, i) => {
                    const angle = (Math.PI * 2 * i) / particlesRef.current.length;
                    const distance = 180 + Math.random() * 120;
                    gsap.fromTo(particle,
                        { x: 0, y: 0, opacity: 0, scale: 0 },
                        {
                            x: Math.cos(angle) * distance,
                            y: Math.sin(angle) * distance,
                            opacity: 1,
                            scale: 1.5,
                            duration: 0.9,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.to(particle, { opacity: 0, scale: 0, duration: 0.4 });
                            }
                        }
                    );
                });
            }, null, "+=0.2");

            // Products fly out to positions around box
            routineSteps.forEach((step, i) => {
                const pos = isMobile ? step.mobileBoxPosition : step.boxPosition;
                tl.to(productRefs.current[i].current, {
                    x: pos.x,
                    y: pos.y,
                    scale: isMobile ? 0.8 : 1,
                    opacity: 1,
                    rotation: Math.random() * 360,
                    duration: 1,
                    ease: "elastic.out(1, 0.6)"
                }, "-=0.7");
            });

            // Trigger next phase
            tl.call(() => setPhase('all-products'), null, "+=1.5");

        } else if (phase === 'all-products') {
            // All products visible - add floating animation
            productRefs.current.forEach((ref, i) => {
                gsap.to(ref.current, {
                    y: `+=${10 + i * 5}`,
                    duration: 1.5 + i * 0.2,
                    repeat: 2,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Start step-by-step after displaying all
            tl.call(() => {
                setPhase('step-by-step');
                setCurrentStep(0);
            }, null, "+=3");

        } else if (phase === 'step-by-step') {
            const step = routineSteps[currentStep];
            
            // Hide all other products
            productRefs.current.forEach((ref, i) => {
                if (i !== currentStep) {
                    tl.to(ref.current, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.in"
                    }, 0);
                }
            });

            // Hide box
            tl.to(boxOpenRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            }, 0);

            // Bring current product to center
            tl.to(productRefs.current[currentStep].current, {
                x: 0,
                y: isMobile ? -120 : -150,
                scale: isMobile ? 1.3 : 1.8,
                rotation: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, 0.3);

            // Float animation
            tl.to(productRefs.current[currentStep].current, {
                y: isMobile ? -135 : -165,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Text animations
            gsap.set(textRefs.current.title.current, { y: -30, opacity: 0, scale: 0.7 });
            gsap.set(textRefs.current.instruction.current, { x: -80, opacity: 0, rotationY: -45 });
            gsap.set(textRefs.current.description.current, { y: 30, opacity: 0 });

            tl.to(textRefs.current.title.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(2)"
            }, 0.6);

            tl.to(textRefs.current.instruction.current, {
                x: 0,
                opacity: 1,
                rotationY: 0,
                duration: 0.8,
                ease: "power3.out"
            }, 0.8);

            tl.to(textRefs.current.description.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, 1);

            // Particle effect
            tl.call(() => {
                particlesRef.current.slice(0, 20).forEach((particle, i) => {
                    const angle = (Math.PI * 2 * i) / 20;
                    const distance = 100 + Math.random() * 80;
                    const yOffset = isMobile ? -120 : -150;
                    gsap.fromTo(particle,
                        { x: 0, y: yOffset, opacity: 0, scale: 0 },
                        {
                            x: Math.cos(angle) * distance,
                            y: yOffset + Math.sin(angle) * distance,
                            opacity: 0.8,
                            scale: 1.2,
                            duration: 0.7,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.to(particle, { opacity: 0, duration: 0.3 });
                            }
                        }
                    );
                });
            }, null, 0.5);

            // Auto advance
            tl.call(() => {
                if (currentStep < routineSteps.length - 1) {
                    setCurrentStep(currentStep + 1);
                } else {
                    setPhase('returning');
                }
            }, null, "+=3");

        } else if (phase === 'returning') {
            // Hide text
            if (textRefs.current.title.current) {
                tl.to([
                    textRefs.current.title.current,
                    textRefs.current.instruction.current,
                    textRefs.current.description.current
                ], {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Show all products again around box
            tl.to(boxOpenRef.current, {
                scale: 1.2,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.5)"
            }, 0.5);

            routineSteps.forEach((step, i) => {
                const pos = isMobile ? step.mobileBoxPosition : step.boxPosition;
                tl.to(productRefs.current[i].current, {
                    x: pos.x,
                    y: pos.y,
                    scale: isMobile ? 0.8 : 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.5)"
                }, 0.7 + i * 0.1);
            });

            // Products return to box
            tl.to(productRefs.current.map(ref => ref.current), {
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.in"
            }, "+=1");

            // Box closes
            tl.to(boxOpenRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            }, "-=0.4");

            tl.to(boxClosedRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.5)"
            }, "<");

            // Restart
            tl.call(() => {
                setPhase('box-closed');
                setCurrentStep(0);
            }, null, "+=1");
        }

        return () => tl.kill();
    }, [phase, currentStep]);

    const isStepByStep = phase === 'step-by-step';
    const step = isStepByStep ? routineSteps[currentStep] : null;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
            style={{
                perspective: '1500px',
                perspectiveOrigin: '50% 50%'
            }}
        >
            {/* Progress dots */}
            {isStepByStep && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-50">
                    {routineSteps.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${
                                i === currentStep 
                                    ? 'bg-purple-600 scale-125 shadow-lg shadow-purple-600/50' 
                                    : i < currentStep 
                                    ? 'bg-purple-400' 
                                    : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* Boxes */}
            <img
                ref={boxClosedRef}
                src="/images/ClosedBox.png"
                alt="Closed Box"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ 
                    width: "12rem", 
                    height: "12rem",
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
                    willChange: "transform"
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />
            <img
                ref={boxOpenRef}
                src="/images/OpenBox.png"
                alt="Open Box"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-15"
                style={{ 
                    width: "12rem", 
                    height: "12rem",
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
                    willChange: "transform"
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />

            {/* Products */}
            {routineSteps.map((step, i) => (
                <img
                    key={i}
                    ref={productRefs.current[i]}
                    src={step.image}
                    alt={step.instruction}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{ 
                        width: "10rem", 
                        height: "10rem",
                        objectFit: "contain",
                        filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.15))",
                        willChange: "transform"
                    }}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x200/667eea/ffffff?text=Product';
                    }}
                />
            ))}

            {/* Text Display */}
            {isStepByStep && step && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[60%] flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl z-40">
                    {/* Step indicator */}
                    <div ref={textRefs.current.title} className="mb-4 md:mb-6">
                        <div className="  px-6 py-2 md:px-8 md:py-3 rounded-full">
                            <span className="text-black font-bold text-base md:text-xl tracking-wider">
                                {step.title}
                            </span>
                        </div>
                    </div>

                    {/* Instruction */}
                    <div
                        ref={textRefs.current.instruction}
                        className="mb-3 md:mb-4"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-gray-900 text-center leading-none tracking-tight">
                            {step.instruction}
                        </h2>
                    </div>

                    {/* Description */}
                    <div ref={textRefs.current.description} className="text-center">
                        <p className="text-base md:text-xl lg:text-2xl text-gray-600 font-medium tracking-wide">
                            {step.description}
                        </p>
                    </div>
                </div>
            )}

            {/* Status indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
                <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                    <span className="font-medium">
                        {phase === 'box-closed' && 'Opening box...'}
                        {phase === 'box-opening' && 'Revealing products...'}
                        {phase === 'all-products' && 'All products displayed'}
                        {phase === 'step-by-step' && 'Routine guide'}
                        {phase === 'returning' && 'Completing routine...'}
                    </span>
                </div>
            </div>
        </div>
    );
}