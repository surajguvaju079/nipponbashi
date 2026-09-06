"use client";

/* eslint-disable react/no-unescaped-entities */
export function Philosophy() {
  return (
    <section className="philosophy">
      <div className="wrap phi-grid">
        <div className="phi-visual reveal">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="60" r="42" fill="#d3181c" />
            <text
              x="100"
              y="72"
              textAnchor="middle"
              fontFamily="Noto Serif JP"
              fontSize="34"
              fill="#fbf9f5"
            >
              語
            </text>
            <path d="M20 150 C 60 130, 140 130, 180 150" stroke="#d9b884" strokeWidth="2" fill="none" />
            <path d="M25 158 C 65 140, 135 140, 175 158" stroke="#b6873f" strokeWidth="1.4" fill="none" opacity="0.7" />
          </svg>
        </div>
        <div className="phi-text reveal">
          <span className="phi-quote-mark">&ldquo;</span>
          <h3>
            A language school named after a bridge, because that&apos;s exactly what learning one is.
          </h3>
          <p>
            NipponBashi was founded in 2011 by a small group of translators and teachers who kept noticing the same thing: students&apos;t struggle with grammar tables, they struggled with the gap between "knowing" and "using" it.
          </p>
          <p>
            So we built our curriculum like a bridge&mdash; short, well-anchored spans instead of one long leap. Every level connects directly to the next, every lesson is grounded in conversation you&apos;ll actually have, and every teacher is trained to walk beside you, not just ahead of you.
          </p>
        </div>
      </div>
    </section>
  );
}