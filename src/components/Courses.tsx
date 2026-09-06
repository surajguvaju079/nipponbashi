"use client";

/* eslint-disable react/no-unescaped-entities */
export function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">コース — Courses</span>
          <h2>Every level of the bridge, mapped out</h2>
          <p>
            From your first "konnichiwa" to defending a thesis in Japanese — choose the span that matches where you're starting.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="course-grid reveal">
          <div className="course-card">
            <div className="course-level">Foundations</div>
            <div className="course-jp">はじめの一歩 · N5–N4</div>
            <p>Hiragana, katakana, core grammar and everyday phrases — for absolute beginners who want a real start, not a phrasebook.</p>
            <div className="course-meta"><span>12 weeks</span><b>Small group</b></div>
          </div>
          <div className="course-card">
            <div className="course-level">Conversation</div>
            <div className="course-jp">会話クラス · N4–N2</div>
            <p>Speaking-first sessions built around real situations: ordering, negotiating, small talk, and workplace exchanges.</p>
            <div className="course-meta"><span>8 weeks</span><b>Live practice</b></div>
          </div>
          <div className="course-card">
            <div className="course-level">JLPT Intensive</div>
            <div className="course-jp">試験対策 · N3–N1</div>
            <p>Targeted preparation for the Japanese Language Proficiency Test, with weekly mock exams and a study coach.</p>
            <div className="course-meta"><span>16 weeks</span><b>Exam-focused</b></div>
          </div>
          <div className="course-card">
            <div className="course-level">Business Japanese</div>
            <div className="course-jp">ビジネス日本語 · N2–N1</div>
            <p>Keigo, email etiquette, meeting language and negotiation — for professionals working with Japanese partners.</p>
            <div className="course-meta"><span>10 weeks</span><b>1-on-1 option</b></div>
          </div>
          <div className="course-card">
            <div className="course-level">Kids & Teens</div>
            <div className="course-jp">こども日本語 · Ages 7–16</div>
            <p>Playful, story-led lessons that build reading, writing and confidence — paced for younger learners.</p>
            <div className="course-meta"><span>Year-round</span><b>Family pricing</b></div>
          </div>
          <div className="course-card">
            <div className="course-level">Private Coaching</div>
            <div className="course-jp">個人レッスン · Any level</div>
            <p>A dedicated teacher builds a syllabus entirely around your goals, schedule and pace.</p>
            <div className="course-meta"><span>Flexible</span><b>1-on-1</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}