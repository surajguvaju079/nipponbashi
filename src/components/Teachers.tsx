"use client";

/* eslint-disable react/no-unescaped-entities */
export function Teachers() {
  return (
    <section className="teachers" id="teachers">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">講師陣 — Teachers</span>
          <h2>Instructors from both sides of the bridge</h2>
          <p>
            Native Japanese speakers and fluent second-language teachers who remember exactly what it felt like to start.
          </p>
        </div>
        <div className="teacher-grid">
          <div className="teacher reveal">
            <div className="teacher-photo"><span>祐</span></div>
            <h4>Yuki Tanabe</h4>
            <small>Founder · JLPT N1 coaching</small>
            <p>14 years teaching, formerly Osaka Gakuin.</p>
          </div>
          <div className="teacher reveal">
            <div className="teacher-photo"><span>健</span></div>
            <h4>Kenji Arai</h4>
            <small>Business Japanese</small>
            <p>Ex-interpreter for trade delegations.</p>
          </div>
          <div className="teacher reveal">
            <div className="teacher-photo"><span>美</span></div>
            <h4>Mika Sato</h4>
            <small>Conversation & kids' classes</small>
            <p>Specialist in early-language confidence.</p>
          </div>
          <div className="teacher reveal">
            <div className="teacher-photo"><span>大</span></div>
            <h4>Daniel Osei</h4>
            <small>Foundations · N5–N4</small>
            <p>Learned Japanese as an adult, N1 certified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}