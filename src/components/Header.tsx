"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header({
  isMenuOpen,
  mobileMenuToggle,
}: {
  isMenuOpen: boolean;
  mobileMenuToggle: () => void;
}) {
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
            alt="NipponBashi Japanese Language Institute"
            className="header-logo"
            width={120}
            height={20}
          />
        </a>
        <nav className="nav-links">
          <a href="#philosophy">About</a>
          <a href="#courses">Courses</a>
          <a href="#preparation">Preparation</a>
          <a href="#method">Why us</a>
          <a href="#schedule">Classes</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">Contact us</a>
        <button
          className="burger"
          id="burgerBtn"
          aria-label="Open menu"
          aria-controls="mobileMenu"
          aria-expanded={isMenuOpen}
          onClick={mobileMenuToggle}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
