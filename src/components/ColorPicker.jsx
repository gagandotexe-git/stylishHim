"use client";
import React, { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(
    typeof window !== "undefined" ? localStorage.getItem("themeColor") || "#3AA2CC" : "#3AA2CC"
  );

  const colors = [
    "#924A00",
    "#C9A26B",
    "#805137",
    "#3AA2CC",
    "#321709",
    "#4B371C",
    "#3C280D",
    "#795C34",
    "#362511",
    "#371D10",
    "#3F301D",
    "#4A3121",
    "#3C2616",
    "#653F1E",
    "#5E2C04",
    "#4A2607",
    "#2E1503",
    "#A1794F",
    "#332515",
    "#8A471C",
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply theme color to root CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", selectedColor);
  }, [selectedColor]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    localStorage.setItem("themeColor", color); // Persist user’s selection
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-black hover:text-gray-600 transition-colors"
        title="Theme Colors"
      >
        <Palette className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="fixed left-0 right-0 top-22 bg-white border-b border-gray-200 z-[100] max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-4 w-full">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 max-w-7xl mx-auto">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => handleColorSelect(color)}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-md transition-all hover:scale-110 border ${
                    color === selectedColor ? "border-black" : "border-gray-300"
                  } hover:border-gray-500 active:scale-95`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
