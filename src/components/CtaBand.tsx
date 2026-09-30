"use client";

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
        <h2>Not sure which Japanese course fits?</h2>
        <p>
          Share your current level and learning goal with NipponBashi to ask
          about the most suitable available class.
        </p>
        <a href="#contact" className="btn btn-primary">
          Make an enquiry
        </a>
      </div>
    </div>
  );
}
