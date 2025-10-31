"use client";
import React, { useState, useEffect } from "react";

const videos = [
  { src: "/video/V1.mp4" },
  { src: "/video/V2.mp4" },
  { src: "/video/V3.mp4" },
];

function getSlidesToShow() {
  if (typeof window === "undefined") return 3; // safe default for SSR
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 1024) return 2; // tablet
  return 3; // desktop
}

export default function ResponsiveVideoCarousel() {
  const [active, setActive] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // initial safe value

  useEffect(() => {
    // Now safe to access window
    const updateSlides = () => setSlidesToShow(getSlidesToShow());
    updateSlides(); // run once on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxActive = Math.max(0, videos.length - slidesToShow);
  const actualActive = Math.min(active, maxActive);

  const next = () => setActive(actualActive >= maxActive ? 0 : actualActive + 1);
  const prev = () => setActive(actualActive === 0 ? maxActive : actualActive - 1);

  return (
    <div className="w-full mx-auto relative">
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${actualActive * (100 / slidesToShow)}%)`,
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              className="px-2"
              style={{
                width: `${100 / slidesToShow}%`,
                flexShrink: 0,
              }}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                className="w-full h-100 object-cover bg-black rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-white shadow"
        aria-label="Previous"
        style={{ background: "var(--theme-color)" }}
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-white shadow"
        aria-label="Next"
        style={{ background: "var(--theme-color)" }}
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: videos.length - slidesToShow + 1 }).map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full ${
              actualActive === i ? "bg-[#dba16b]" : "bg-gray-300"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
