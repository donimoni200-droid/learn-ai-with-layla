import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact Me — Learn AI With Layla",
  description: "Get in touch: partnerships, support, and social links.",
};

export default function ContactPage() {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <section className="inner-hero" aria-labelledby="contact-title">
          <div className="inner-hero__copy">
            <p className="home-section-kicker">{contact.kicker}</p>
            <h1 className="inner-hero__title" id="contact-title">
              Say <em>{contact.titleEm.replace("hey.", "hey.")}</em>
            </h1>
            <p>{contact.intro}</p>
          </div>
          <div className="inner-hero__visual">
            { }
            <img src="/assets/sections/social-studio.png" alt="Working at a desk, ready to chat" />
          </div>
        </section>

        <section className="contact-grid" aria-label="Contact options">
          {contact.cards.map((card) => (
            <article key={card.label} className="contact-card">
              <p className="contact-card__label">{card.label}</p>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <a className="contact-mail" href={`mailto:${card.email}`}>
                {card.email}
              </a>
              <div className="contact-social-row">
                <a href={card.link.href} target="_blank" rel="noopener">
                  {card.link.label}
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <p>© 2026 Learn AI With Layla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
