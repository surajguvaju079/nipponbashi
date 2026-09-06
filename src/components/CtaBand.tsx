"use client";

/* eslint-disable react/no-unescaped-entities */
export function CtaBand() {
  return (
    <div className="cta-band">
      <svg
        className="cables on-ink"
        viewBox="0 0 1440 26"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path d="M0 4 L1440 4" />
      </svg>
      <div className="wrap reveal">
        <h2>Your first step across starts with one lesson.</h2>
        <p>
          Book a free 25-minute trial and we'll place you at the right level — no pressure, no obligation.
        </p>
        <a href="#contact" className="btn btn-primary">
          Book your free trial
        </a>
      </div>
    </div>
  );
}