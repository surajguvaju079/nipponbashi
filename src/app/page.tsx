"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => {
      revealEls.forEach((el) => io.unobserve(el));
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <MobileMenu />
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
      </body>
    </html>
  );
}