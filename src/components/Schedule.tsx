"use client";

export function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">スケジュール — Schedule</span>
          <h2>Find your class, find your pace</h2>
          <p>Morning, evening and weekend sections run in parallel across every level.</p>
        </div>
        <div className="sched-wrap reveal">
          <div className="sched-table">
            <table className="sched">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Format</th>
                  <th>Sessions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lvl">N5</td>
                  <td>Group, 6–10 students</td>
                  <td>2× weekly, 12 wks</td>
                </tr>
                <tr>
                  <td className="lvl">N4</td>
                  <td>Group, 6–10 students</td>
                  <td>2× weekly, 12 wks</td>
                </tr>
                <tr>
                  <td className="lvl">N3</td>
                  <td>Group, 6–8 students</td>
                  <td>2× weekly, 14 wks</td>
                </tr>
                <tr>
                  <td className="lvl">N2</td>
                  <td>Group, 5–8 students</td>
                  <td>3× weekly, 16 wks</td>
                </tr>
                <tr>
                  <td className="lvl">N1</td>
                  <td>Small group, max 6</td>
                  <td>3× weekly, 16 wks</td>
                </tr>
                <tr>
                  <td className="lvl">Private</td>
                  <td>1-on-1, any level</td>
                  <td>By arrangement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}