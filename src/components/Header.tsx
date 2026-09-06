"use client";

import Image from "next/image";
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
          <Image
            src="/logo.jpeg"
            alt="NipponBashi"
            width={120}
            height={60}
            className="header-logo"
          />
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
