"use client";

/* eslint-disable react/no-unescaped-entities */
export function Pillars() {
  return (
    <section className="pillars" id="method">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">教え方 — Our method</span>
          <h2>Three ideas hold up everything we teach</h2>
        </div>
        <div className="pillar-grid">
          <div className="pillar reveal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3181c"
              strokeWidth="1.6"
            >
              <path d="M3 12h18M3 12c0-4 4-7 9-7" />
              <path d="M21 12c0 4-4 7-9 7" />
            </svg>
            <h4>Short, connected spans</h4>
            <p>
              Each lesson closes a small, specific gap and links cleanly to the next, so progress never feels like guesswork.
            </p>
          </div>
          <div className="pillar reveal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3181c"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="8" r="3.4" />
              <path d="M4.5 21c1-4.5 4-6.5 7.5-6.5s6.5 2 7.5 6.5" />
            </svg>
            <h4>Teachers who stay in step</h4>
            <p>
              Every class is led by a bilingual instructor trained to notice where you're stuck and slow down without breaking momentum.
            </p>
          </div>
          <div className="pillar reveal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3181c"
              strokeWidth="1.6"
            >
              <path d="M4 19V5a1 1 0 0 1 1-1h9l6 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
              <path d="M14 4v6h6" />
            </svg>
            <h4>Conversation over memorisation</h4>
            <p>
              Grammar is taught in service of speaking, never as an end in itself — you'll be using each lesson within the same week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}