"use client";

import { useEffect } from "react";

export function Header({ mobileMenuToggle }: { mobileMenuToggle: () => void }) {
  useEffect(() => {
    const nav = document.getElementById("mainNav") as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add("solid");
      } else {
        nav.classList.remove("solid");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          onClick={mobileMenuToggle}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}