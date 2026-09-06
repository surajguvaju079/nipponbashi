"use client";

/* eslint-disable react/no-unescaped-entities */
export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">卒業生の声 — Alumni</span>
          <h2>What crossing the bridge felt like</h2>
        </div>
        <div className="test-grid">
          <div className="test-card reveal">
            <span className="phi-quote-mark">"</span>
            <p>I'd studied Japanese on and off for years. NipponBashi is the first place I actually felt myself improving week to week.</p>
            <div className="test-name"><b>Sarah Lindqvist</b> — N2, passed 2025</div>
          </div>
          <div className="test-card reveal">
            <span className="phi-quote-mark">"</span>
            <p>The business track prepared me for meetings in Tokyo I genuinely could not have handled a year earlier.</p>
            <div className="test-name"><b>Marco Belline</b> — Business Japanese</div>
          </div>
          <div className="test-card reveal">
            <span className="phi-quote-mark">"</span>
            <p>My daughter looks forward to her Saturday class more than almost anything else in her week.</p>
            <div className="test-name"><b>Priya Nandan</b> — Parent, Kids' track</div>
          </div>
        </div>
      </div>
    </section>
  );
}