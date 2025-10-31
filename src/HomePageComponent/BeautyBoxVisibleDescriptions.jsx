"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Positions for desktop and mobile
const items = [
  {
    src: "/images/aboutUs.png",
    alt: "Matt Shades",
    title: "Matt Shades",
    desc: "Velvety matte shadows for bold, lasting beauty.",
    position: { x: "-38vw", y: "-25vh" },
    mobilePosition: { x: "-30vw", y: "-13vh" },
    descPosition: "top-10 left-1/2 -translate-x-1/2 text-center md:top-12",
  },
  {
    src: "/images/aboutUs.png",
    alt: "Easy Applicators",
    title: "Easy Applicators",
    desc: "Precision eyeshadow applicators for easy blending.",
    position: { x: "38vw", y: "-25vh" },
    mobilePosition: { x: "30vw", y: "-13vh" },
    descPosition: "top-1/2 right-3 -translate-y-1/2 text-right md:right-12",
  },
  {
    src: "/images/aboutUs.png",
    alt: "Chrome Box",
    title: "Chrome Box",
    desc: "High-shine chrome shadows for dazzling eye looks.",
    position: { x: "-38vw", y: "28vh" },
    mobilePosition: { x: "-30vw", y: "13vh" },
    descPosition: "top-1/2 left-3 -translate-y-1/2 text-left md:left-12",
  },
  {
    src: "/images/aboutUs.png",
    alt: "Glitter Shades",
    title: "Glitter Shades",
    desc: "Sparkling glitter shades for vibrant, show-stopping eyes.",
    position: { x: "38vw", y: "28vh" },
    mobilePosition: { x: "30vw", y: "13vh" },
    descPosition: "bottom-10 left-1/2 -translate-x-1/2 text-center md:bottom-12",
  },
];

export default function BeautyBoxVisibleDescriptions() {
  const closedImgRef = useRef();
  const openImgRef = useRef();
  const imgRefs = useRef(items.map(() => React.createRef()));
  const descRefs = useRef(items.map(() => React.createRef()));

  useEffect(() => {
    gsap.set(closedImgRef.current, { scale: 0.65, opacity: 0, zIndex: 40 });
    gsap.set(openImgRef.current, { scale: 0.7, opacity: 1, zIndex: 30 });

    imgRefs.current.forEach((imgRef) => {
      gsap.set(imgRef.current, {
        x: 0,
        y: 0,
        scale: 0.57,
        opacity: 0,
        rotation: -10,
      });
    });
    descRefs.current.forEach((descRef) => {
      gsap.set(descRef.current, { scale: 0.76, opacity: 0 });
    });

    // Responsive GSAP using matchMedia
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions;
        const timeline = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "expo.out" },
        });

        // Animate compact images
        timeline.to(openImgRef.current, {
          scale: isMobile ? 1.08 : 1,
          duration: 0.24,
        });
        timeline.to(
          openImgRef.current,
          { opacity: 0, duration: 0.33, ease: "power2.in" },
          "+=0.15"
        );
        timeline.to(
          closedImgRef.current,
          {
            opacity: 1,
            scale: isMobile ? 1.17 : 1,
            duration: 0.32,
            ease: "power2.inOut",
          },
          "<"
        );

        imgRefs.current.forEach((imgRef, i) => {
          const pos = isMobile ? items[i].mobilePosition : items[i].position;
          timeline.to(
            imgRef.current,
            {
              x: pos.x,
              y: pos.y,
              scale: isMobile ? 1 : 1.15,
              opacity: 1,
              rotation: 0,
              duration: 0.5,
              overwrite: "auto",
              ease: "elastic.out(1, 0.8)",
            },
            "+=0.04"
          );
          timeline.to(
            descRefs.current[i].current,
            {
              scale: 1,
              opacity: 1,
              duration: 0.23,
              overwrite: "auto",
              ease: "back.out(1.6)",
            },
            "-=0.33"
          );
          // Pulse per item, slightly subtler on mobile
          gsap.to(imgRef.current, {
            scale: isMobile ? 1.06 : 1.13,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.13 * i,
          });
        });

        return () => {
          timeline.kill();
          imgRefs.current.forEach((imgRef) =>
            gsap.killTweensOf(imgRef.current)
          );
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="relative w-full mx-auto h-[70vh] md:h-[90vh] my-6 flex items-center justify-center
      bg-gradient-to-br from-white via-neutral-100 to-neutral-300 rounded-2xl overflow-hidden perspective-1000">
      {/* Closed compact image */}
      <img
        ref={closedImgRef}
        src="https://pngimg.com/uploads/box/box_PNG22.png"
        alt="Closed Box"
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "9.5rem",
          height: "9.5rem",
          willChange: "transform",
          transformOrigin: "bottom center",
        }}
      />

      {/* Open compact image */}
      <img
        ref={openImgRef}
        src="https://pngimg.com/uploads/box/box_PNG21.png"
        alt="Open Box"
        className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "9.5rem",
          height: "9.5rem",
          willChange: "transform",
          transformOrigin: "bottom center",
        }}
      />

      {/* Items descriptions and images */}
      {items.map((item, i) => (
        <React.Fragment key={item.title}>
          <img
            ref={imgRefs.current[i]}
            src={item.src}
            alt={item.alt}
            className="absolute w-32 h-20 md:w-56 md:h-36 object-cover rounded-xl shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-2 md:border-4 border-white"
            style={{
              willChange: "transform",
              transformOrigin: "center",
              boxShadow: "0 5px 25px 0 #e1e1e1aa,0 0px 1.5px #fff",
            }}
          />
          <div
            ref={descRefs.current[i]}
            className={`absolute z-30 min-w-[8.5rem] max-w-[74vw] md:max-w-xs rounded-lg px-3 py-2 md:px-6 md:py-4 shadow-md text-xs md:text-sm border-2 border-neutral-200 bg-white/90 ${item.descPosition}`}
            style={{
              willChange: "transform,opacity",
              color: "#222",
              boxShadow: "0 12px 28px -2px #e1e1e155",
            }}
          >
            <div className="font-bold text-base md:text-lg text-neutral-700 mb-1">
              {item.title}
            </div>
            <div className="text-neutral-500">{item.desc}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
