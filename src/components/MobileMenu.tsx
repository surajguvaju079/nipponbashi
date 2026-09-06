"use client";

import { useState, useEffect } from "react";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile menu event listeners
  useEffect(() => {
    const burger = document.getElementById("burgerBtn") as HTMLElement;
    const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;

    if (burger && mobileMenu) {
      burger.addEventListener("click", () => {
        setIsMenuOpen(true);
        document.body.style.overflow = "hidden";
      });

      // Close menu on link click
      const menuLinks = document.querySelectorAll<HTMLElement>(
        ".mobile-menu a"
      );
      menuLinks.forEach((a) =>
        a.addEventListener("click", () => {
          setIsMenuOpen(false);
          document.body.style.overflow = "auto";
        })
      );
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div
      className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
      id="mobileMenu"
    >
      <button
        className="mobile-close"
        id="mobileClose"
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
      >
        ×
      </button>
      <a href="#philosophy">About</a>
      <a href="#courses">Courses</a>
      <a href="#method">Method</a>
      <a href="#teachers">Teachers</a>
      <a href="#schedule">Schedule</a>
      <a href="#contact">Contact</a>
      <a href="#contact" className="btn btn-primary">
        Book a trial lesson
      </a>
    </div>
  );
}