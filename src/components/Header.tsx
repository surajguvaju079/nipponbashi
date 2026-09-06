"use client";

import { useEffect } from "react";

export function Header() {
  // Mobile menu event listeners
  useEffect(() => {
    const burger = document.getElementById("burgerBtn") as HTMLElement;
    const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;

    if (burger && mobileMenu) {
      burger.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
      });

      // Close menu on link click
      const menuLinks = document.querySelectorAll<HTMLElement>(
        ".mobile-menu a"
      );
      menuLinks.forEach((a) =>
        a.addEventListener("click", () => {
          document.body.style.overflow = "auto";
        })
      );
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <header className="nav" id="mainNav">
      <div className="nav-row">
        <a href="#top" className="brand">
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="19" fill="#d3181c" />
            <text x="20" y="27" textAnchor="middle" fontFamily="Noto Serif JP" fontSize="17" fill="#fbf9f5">
              語
            </text>
          </svg>
          <span className="brand-name">Nippon<b>Bashi</b></span>
        </a>
        <nav className="nav-links">
          <a href="#philosophy">About</a>
          <a href="#courses">Courses</a>
          <a href="#method">Method</a>
          <a href="#teachers">Teachers</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">Book a trial lesson</a>
        <button
          className="burger"
          id="burgerBtn"
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}