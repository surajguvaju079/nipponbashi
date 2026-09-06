"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Courses } from "@/components/Courses";
import { Pillars } from "@/components/Pillars";
import { Teachers } from "@/components/Teachers";
import { Testimonials } from "@/components/Testimonials";
import { Schedule } from "@/components/Schedule";
import { CtaBand } from "@/components/CtaBand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (open: boolean) => {
    setIsMenuOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("mainNav") as HTMLElement;
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
    <>
      <Header mobileMenuToggle={() => toggleMenu(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => toggleMenu(false)} />
      <Hero />
      <Philosophy />
      <Courses />
      <Pillars />
      <Teachers />
      <Testimonials />
      <Schedule />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}