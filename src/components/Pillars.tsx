"use client";

export function Pillars() {
  return (
    <section className="pillars" id="method">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">教え方 — Our method</span>
          <h2>Why learn Japanese with NipponBashi?</h2>
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
            <h3>Clear learning path</h3>
            <p>
              Move from N5 foundations through N4 and toward N3 with each level building on what came before.
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
            <h3>Practical communication</h3>
            <p>
              Study grammar and vocabulary alongside reading, listening, and conversation for everyday use.
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
            <h3>Focused preparation</h3>
            <p>
              Use JLPT-focused practice to review language skills and identify areas that need more attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
