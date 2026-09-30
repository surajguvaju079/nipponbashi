"use client";

export function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">スケジュール — Class availability</span>
          <h2>Find a class that matches your level</h2>
          <p>
            Class times and new intakes can change. Contact NipponBashi for the
            current N5, N4, N3, and JLPT preparation schedule.
          </p>
        </div>
        <div className="schedule-panel reveal">
          <div>
            <span className="schedule-label">Current timetable</span>
            <h3>Confirm the latest intake before visiting</h3>
            <p>
              Tell us your current Japanese level and the course you are
              interested in. The institute can confirm suitable available
              classes directly.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">Contact the institute</a>
        </div>
      </div>
    </section>
  );
}
