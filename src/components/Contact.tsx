"use client";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span
            className="kicker"
            style={{ color: "var(--red)", fontFamily: "'Noto Serif JP', serif", display: "block", margin: "0 auto 24px", maxWidth: "280px", marginLeft: "auto", marginRight: "auto" }}
          >
            連絡先 — Visit or write
          </span>
          <h2 style={{ fontSize: "2.1rem", margin: "0 auto 32px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}>
            Come see the school in person
          </h2>
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <h5 style={{ textAlign: "center", marginBottom: "16px", fontSize: "0.82rem", color: "var(--ink-soft)" }}>
                Address
              </h5>
              <p style={{ textAlign: "center", margin: "0", fontSize: "0.98rem", color: "var(--ink)" }}>
                Pandubazaar, Suryabinayak, Bhaktapur<br/>
                near Everest Bank
              </p>
            </div>
            <div style={{ marginBottom: "32px" }}>
              <h5 style={{ textAlign: "center", marginBottom: "16px", fontSize: "0.82rem", color: "var(--ink-soft)" }}>
                Phone
              </h5>
              <p style={{ textAlign: "center", margin: "0 0 8px", fontSize: "0.98rem", color: "var(--ink)" }}>
                <a href="tel:01-5708096" style={{ color: "var(--ink)", textDecoration: "none" }}>
                  01-5708096
                </a>
                <br/>
                <a href="tel:9841113804" style={{ color: "var(--ink)", textDecoration: "none" }}>
                  9841113804
                </a>
                <br/>
                <a href="tel:9768519494" style={{ color: "var(--ink)", textDecoration: "none" }}>
                  9768519494
                </a>
                <br/>
                <a href="tel:9768519405" style={{ color: "var(--ink)", textDecoration: "none" }}>
                  9768519405
                </a>
              </p>
            </div>
            <div>
              <h5 style={{ textAlign: "center", marginBottom: "16px", fontSize: "0.82rem", color: "var(--ink-soft)" }}>
                Email
              </h5>
              <p style={{ textAlign: "center", margin: "0", fontSize: "0.98rem", color: "var(--ink)" }}>
                <a href="mailto:nipponbashi05@gmail.com" style={{ color: "var(--ink)", textDecoration: "none" }}>
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