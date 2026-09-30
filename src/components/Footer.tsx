export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="brand-name">Nippon<b style={{ color: "var(--red)" }}>Bashi</b></span>
            <p>Japanese language courses and JLPT preparation in Bhaktapur.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Learn</h5>
              <a href="#courses">Courses</a>
              <a href="#preparation">JLPT preparation</a>
              <a href="#schedule">Class availability</a>
            </div>
            <div className="foot-col">
              <h5>School</h5>
              <a href="#philosophy">About us</a>
              <a href="#method">Why learn with us</a>
              <a href="#contact">Visit or contact</a>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <a href="tel:015708096">01-5708096</a>
              <a href="tel:+9779841113804">9841113804</a>
              <a href="mailto:nipponbashi05@gmail.com">Email the institute</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 NipponBashi Japanese Language Institute.</span>
          <span>Pandubazaar, Suryabinayak, Bhaktapur · Near Everest Bank</span>
          <span><a href="mailto:nipponbashi05@gmail.com">nipponbashi05@gmail.com</a></span>
        </div>
      </div>
    </footer>
  );
}
