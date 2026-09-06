"use client";

export function Hero() {
  return (
    <section className="hero">
      <svg className="hero-bridge" viewBox="0 0 1440 340" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 175 C 260 150, 520 138, 720 138 C 920 138, 1180 150, 1440 175" stroke="#d3181c" strokeWidth="3" fill="none" opacity="0.9" />
        <rect x="712" y="20" width="16" height="230" fill="#d3181c" />
        <g stroke="#d3181c" strokeWidth="1.6" opacity="0.75">
          <path d="M720 45 C 560 60, 400 95, 260 150" fill="none" />
          <path d="M720 45 C 880 60, 1040 95, 1180 150" fill="none" />
        </g>
        <g stroke="#d3181c" strokeWidth="1" opacity="0.55">
          <line x1="680" y1="52" x2="680" y2="150" />
          <line x1="640" y1="60" x2="642" y2="150" />
          <line x1="600" y1="70" x2="606" y2="148" />
          <line x1="560" y1="80" x2="570" y2="145" />
          <line x1="520" y1="92" x2="536" y2="142" />
          <line x1="480" y1="105" x2="502" y2="140" />
          <line x1="440" y1="118" x2="468" y2="138" />
          <line x1="400" y1="130" x2="434" y2="138" />
          <line x1="360" y1="140" x2="400" y2="140" />
          <line x1="760" y1="52" x2="760" y2="150" />
          <line x1="800" y1="60" x2="798" y2="150" />
          <line x1="840" y1="70" x2="834" y2="148" />
          <line x1="880" y1="80" x2="870" y2="145" />
          <line x1="920" y1="92" x2="904" y2="142" />
          <line x1="960" y1="105" x2="938" y2="140" />
          <line x1="1000" y1="118" x2="972" y2="138" />
          <line x1="1040" y1="130" x2="1006" y2="138" />
          <line x1="1080" y1="140" x2="1040" y2="140" />
        </g>
      </svg>
      <div className="hero-inner">
        <span className="hero-eyebrow-jp">日本語学院 — 二つの言葉をつなぐ橋</span>
        <h1>Nippon<span className="rule-b">Bashi</span></h1>
        <p className="hero-sub">
          A Japanese language institute built like a bridge — carrying you from your first hiragana stroke to fluent, confident conversation.
        </p>
        <div className="btn-row">
          <a href="#contact" className="btn btn-primary">
            Book a trial lesson
          </a>
          <a href="#courses" className="btn btn-ghost">See our courses</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stats-row">
          <div className="stat"><b>14</b><span>Years teaching</span></div>
          <div className="stat"><b>1,200+</b><span>Students guided</span></div>
          <div className="stat"><b>96%</b><span>JLPT pass rate</span></div>
          <div className="stat"><b>N5–N1</b><span>Full JLPT ladder</span></div>
        </div>
      </div>
    </section>
  );
}