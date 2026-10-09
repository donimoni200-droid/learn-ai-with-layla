import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { StoryStage } from "@/components/site/StoryStage";
import { about } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About — Learn AI With Layla",
  description:
    "Meet Layla Haddad: former big-tech operator, two-time eight-figure founder, and your guide to making AI useful.",
};

export default function AboutPage() {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <StoryStage />
        <section className="journey" id="journey" aria-labelledby="journey-title">
          <div className="journey__intro">
            <h2 id="journey-title">
              {about.journeyTitle}
              <em>{about.journeyTitleEm}</em>
            </h2>
          </div>
          <div className="journey__timeline" aria-label="Founder journey timeline">
            <div className="journey__line" aria-hidden="true" />
            {about.timeline.map((card, idx) => (
              <article
                key={card.step}
                className={`journey-card ${
                  idx % 2 === 0 ? "journey-card--top" : "journey-card--bottom"
                } reveal-up is-visible`}
              >
                <div className="journey-card__marker" aria-hidden="true" />
                <p className="journey-card__step">{card.step}</p>
                { }
                <img src={card.img} alt={card.title} loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
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
