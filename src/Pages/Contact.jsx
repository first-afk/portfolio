import React, { useState } from "react";
import Button from "../components/atoms/Button";

const Contact = () => {
  const recipientEmail = "estherorieji@gmail.com";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.firstName} ${formData.lastName}`.trim(),
    );
    const body = encodeURIComponent(
      `First name: ${formData.firstName}\nLast name: ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page mt-20 p-5 mx-auto">
      <section className="contact-hero">
        <div className="flex items-center gap-2">
          <hr className="w-10 h-0.5 bg-primary" />
          <p className="text-sm uppercase tracking-[0.4em] text-primary">
            Let’s build something bright
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold uppercase mt-4">
          Reach <span className="text-gradient">out</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-300">
          I’m available for freelance work, collaborations, and product ideas.
          Share a few details and I’ll get back to you with a thoughtful reply.
        </p>
      </section>

      <section className="contact-shell">
        <div className="contact-panel">
          <div className="contact-card">
            <div className="contact-card-header">
              <p className="contact-label">Project inquiry</p>
              <h2 className="contact-title">Tell me about your vision</h2>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-grid">
                <label className="contact-field">
                  <span>First name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ada"
                    required
                  />
                </label>
                <label className="contact-field">
                  <span>Last name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Lovelace"
                    required
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Project brief</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your idea in markdown or plain text. Example: ## Launch plan\n- goals\n- timeline\n- references"
                  rows={8}
                  required
                />
              </label>

              <div className="contact-actions">
                <Button type="submit" size="medium" color="primary">
                  Send message
                </Button>
                <p className="contact-note">
                  Your mail app will open with the details already filled in.
                </p>
              </div>
            </form>
          </div>
        </div>

        <aside className="contact-side">
          <div className="contact-side-card">
            <p className="contact-label">Availability</p>
            <h3>Open for select freelance projects</h3>
            <p>
              From landing pages to full-stack experiences, I help founders and
              teams turn ideas into polished digital products.
            </p>
          </div>
          <div className="contact-side-card">
            <p className="contact-label">Response time</p>
            <h3>Usually within 2–3 business days</h3>
            <p>
              Share your goals, timeline, and the kind of energy you want the
              experience to carry.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
