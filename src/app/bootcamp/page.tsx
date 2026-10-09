import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { placeholderPages as pp } from "@/lib/site-content";

export default function BootcampPage() {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <section className="inner-hero">
          <div className="inner-hero__copy">
            <p className="home-section-kicker">{pp.bootcamp.kicker}</p>
            <h1 className="inner-hero__title">
              Master AI <em>by Monday.</em>
            </h1>
            <p>{pp.bootcamp.desc}</p>
            <a className="btn btn--hero" href="#enroll" id="enroll">
              {pp.bootcamp.cta}
            </a>
          </div>
          <div className="inner-hero__visual">
            { }
            <img src="/assets/sections/challenge-desk.png" alt="The weekend AI bootcamp setup" />
          </div>
        </section>
        <section style={{ padding: "clamp(70px, 9vw, 130px) clamp(24px, 5vw, 78px)" }}>
          <div className="section-heading">
            <h2>
              One weekend. <em>25 professions.</em>
            </h2>
          </div>
          <div className="blocks-grid" style={{ width: "min(100%, 1180px)", margin: "0 auto" }}>
            <div className="block-card">
              <h3>Day 1 — Set up right</h3>
              <p>
                Install, configure, and brief your assistant for your exact profession — the settings
                most people skip that change everything.
              </p>
            </div>
            <div className="block-card">
              <h3>Day 2 — Build your toolkit</h3>
              <p>
                Build the prompts, projects, and starter agents your job actually needs, then wire
                them together into one workflow.
              </p>
            </div>
            <div className="block-card">
              <h3>Monday — Run it for real</h3>
              <p>
                Walk into the week with a working system: a daily brief, a writing voice that sounds
                like you, and agents that remember your context.
              </p>
            </div>
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
