"use client";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <span
            className="kicker"
            style={{ color: "var(--red)", fontFamily: "'Noto Serif JP', serif", display: "block", marginBottom: "14px" }}
          >
            連絡先 — Visit or write
          </span>
          <h2 style={{ fontSize: "2.1rem", marginBottom: "30px" }}>
            Come see the school in person
          </h2>
          <div className="info-line">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <div>
              <h5>Address</h5>
              <p>Pandubazaar, Suryabinayak, Bhaktapur<br/>Near Everest Bank</p>
            </div>
          </div>
          <div className="info-line">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <div>
              <h5>Phone</h5>
              <p>01-5708096</p>
              <p>9841113804</p>
              <p>9768519494</p>
              <p>9768519405</p>
            </div>
          </div>
          <div className="info-line">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M4 4h16v16H4z" />
              <path d="m4 6 8 7 8-7" />
            </svg>
            <div>
              <h5>Email</h5>
              <p>nipponbashi05@gmail.com</p>
            </div>
          </div>
          <div className="info-line">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div>
              <h5>Office hours</h5>
              <p>Mon–Sat, 9:00–20:00</p>
            </div>
          </div>
        </div>
        <form className="enroll reveal" onSubmit={() => alert("Form submitted!")}>
          <div>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="level">Interested in</label>
            <select id="level" required>
              <option>Foundations (N5–N4)</option>
              <option>Conversation</option>
              <option>JLPT Intensive</option>
              <option>Business Japanese</option>
              <option>Kids & Teens</option>
              <option>Private coaching</option>
            </select>
          </div>
          <div>
            <label htmlFor="msg">Tell us about your goals</label>
            <textarea
              id="msg"
              placeholder="e.g. I want to hold a basic conversation before visiting Osaka next spring."
            ></textarea>
          </div>
          <button type="submit">Request a trial lesson</button>
        </form>
      </div>
    </section>
  );
}