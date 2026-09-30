"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const menuLinks = [
  { index: "01", label: "About", href: "#philosophy" },
  { index: "02", label: "Courses", href: "#courses" },
  { index: "03", label: "Preparation", href: "#preparation" },
  { index: "04", label: "Why us", href: "#method" },
  { index: "05", label: "Classes", href: "#schedule" },
  { index: "06", label: "Contact", href: "#contact" },
];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): React.ReactElement {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const activeElement = document.activeElement as HTMLElement | null;
      previousFocusRef.current =
        activeElement && activeElement !== document.body
          ? activeElement
          : document.getElementById("burgerBtn");
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }

      if (e.key === "Tab" && isOpen) {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches && isOpen) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      id="mobileMenu"
      role="dialog"
      aria-modal={isOpen ? true : undefined}
      aria-label="Main navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <svg className="mobile-menu-bridge" viewBox="0 0 430 170" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-30 118 C 85 82, 345 82, 460 118" />
        <path d="M215 0 V132" />
        <path d="M215 30 C 160 38, 102 62, 48 102" />
        <path d="M215 30 C 270 38, 328 62, 382 102" />
      </svg>

      <div className="mobile-menu-shell">
        <div className="mobile-menu-topbar">
          <a href="#top" className="mobile-menu-brand" onClick={onClose}>
            <Image
              src="/white_logo.png"
              alt="NipponBashi Japanese Language Institute"
              width={181}
              height={87}
              priority
            />
          </a>
          <button
            ref={closeButtonRef}
            className="mobile-close"
            type="button"
            aria-label="Close menu"
            onClick={onClose}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-menu-heading">
            <span className="jp">メニュー</span>
            <p>Explore NipponBashi</p>
          </div>
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={onClose}>
                <span>{link.index}</span>
                <strong>{link.label}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </nav>
        </div>

        <div className="mobile-menu-footer">
          <p>Pandubazaar, Suryabinayak, Bhaktapur</p>
          <a href="#contact" className="mobile-menu-cta" onClick={onClose}>
            Make an enquiry <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
