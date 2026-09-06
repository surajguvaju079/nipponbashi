export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="brand-name">Nippon<b style={{ color: "var(--red)" }}>Bashi</b></span>
            <p>A bridge between two languages, built lesson by lesson since 2011.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Learn</h5>
              <a href="#courses">Courses</a>
              <a href="#method">Our method</a>
              <a href="#schedule">Schedule & fees</a>
            </div>
            <div className="foot-col">
              <h5>School</h5>
              <a href="#philosophy">About us</a>
              <a href="#teachers">Teachers</a>
              <a href="#contact">Visit</a>
            </div>
            <div className="foot-col">
              <h5>Connect</h5>
              <a href="#contact">Instagram</a>
              <a href="#contact">YouTube</a>
              <a href="#contact">Newsletter</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 NipponBashi Japanese Language Institute.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}