"use client";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
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
          <span className="kicker">私たちについて — About NipponBashi</span>
          <h2>Build Japanese one connected step at a time</h2>
          <p>
            NipponBashi is a Japanese language institute in Pandubazaar,
            Suryabinayak, Bhaktapur. Its learning path connects each stage of
            Japanese study, from the writing systems and essential grammar to
            reading, listening, and conversation.
          </p>
          <p>
            The aim is simple: help students understand what they are learning,
            use it in practical communication, and know what comes next.
          </p>
          <div className="phi-differentiators">
            <div className="phi-diff-item">
              <h4>Conversation-first approach</h4>
              <p>Lessons are grounded in real conversations you&apos;ll actually have, not just textbook drills.</p>
            </div>
            <div className="phi-diff-item">
              <h4>Progressive level structure</h4>
              <p>Every level connects directly to the next. You won&apos;t repeat content or face random gaps between stages.</p>
            </div>
            <div className="phi-diff-item">
              <h4>Balanced language skills</h4>
              <p>Reading, listening, vocabulary, grammar, and conversation develop together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
