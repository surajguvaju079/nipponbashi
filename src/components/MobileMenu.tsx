"use client";

import { useEffect } from "react";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): React.ReactElement {
  useEffect(() => {
    const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;
    const mobileClose = document.getElementById("mobileClose") as HTMLElement;
    const menuLinks = mobileMenu?.querySelectorAll<HTMLElement>("a");

    // Initial mount: set state from prop
    if (isOpen) {
      mobileMenu?.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    // Close button
    if (mobileClose) {
      mobileClose.addEventListener("click", () => {
        onClose();
        document.body.style.overflow = "auto";
      });
    }

    // Close on link click
    if (menuLinks) {
      menuLinks.forEach((a) =>
        a.addEventListener("click", () => {
          onClose();
          document.body.style.overflow = "auto";
        })
      );
    }

    // Close on ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      id="mobileMenu"
    >
      <button
        className="mobile-close"
        id="mobileClose"
        aria-label="Close menu"
        onClick={() => onClose()}
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