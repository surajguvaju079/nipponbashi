"use client";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-inner reveal">
          <span className="kicker">
            連絡先 — Visit or write
          </span>
          <h2>
            Contact NipponBashi in Bhaktapur
          </h2>
          <p className="contact-intro">
            Ask about course suitability, current class times, or visiting the institute.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <address>
                Pandubazaar, Suryabinayak, Bhaktapur<br/>
                Near Everest Bank
              </address>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:015708096">
                  01-5708096
                </a>
                <br/>
                <a href="tel:+9779841113804">
                  9841113804
                </a>
                <br/>
                <a href="tel:+9779768519494">
                  9768519494
                </a>
                <br/>
                <a href="tel:+9779768519405">
                  9768519405
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:nipponbashi05@gmail.com">
                  nipponbashi05@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
