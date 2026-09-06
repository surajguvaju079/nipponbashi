"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header({ mobileMenuToggle }: { mobileMenuToggle: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("mainNav") as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add("solid");
        setIsScrolled(true);
      } else {
        nav.classList.remove("solid");
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = isScrolled ? "/logo.jpeg" : "/white_logo.png";

  return (
    <header className="nav" id="mainNav">
      <div className="nav-row">
        <a href="#top" className="brand">
          <Image
            src={logoSrc}
            alt="NipponBashi"
            className="header-logo"
            width={120}
            height={60}
          />
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
