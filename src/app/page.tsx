"use client";

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