import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { placeholderPages as pp, nav } from "@/lib/site-content";
import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <section className="inner-hero">
          <div className="inner-hero__copy">
            <p className="home-section-kicker">{pp.agents.kicker}</p>
            <h1 className="inner-hero__title">
              Hire the <em>AI team</em> I use.
            </h1>
            <p>{pp.agents.desc}</p>
            <a className="btn btn--hero" href="#suite">
              {pp.agents.cta}
            </a>
          </div>
          <div className="inner-hero__visual">
            { }
            <img src="/assets/about/journey-2025.png" alt="The AI agent suite running daily operations" />
          </div>
        </section>
        <section id="suite" style={{ padding: "clamp(70px, 9vw, 130px) clamp(24px, 5vw, 78px)" }}>
          <div className="section-heading">
            <h2>
              The <em>full suite</em>
            </h2>
          </div>
          <div className="bonus-grid" style={{ width: "min(100%, 1180px)", margin: "0 auto" }}>
            {nav.dropdown.items.slice(0, 5).map((agent) => (
              <div key={agent.label} className="bonus-item">
                <h3>{agent.label}</h3>
                <p>
                  A ready-to-run agent with its full briefing, guardrails, and output format —
                  plug in your business context and it starts working today.
                </p>
                <Link href={agent.href} style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.11em", textTransform: "uppercase" }}>
                  Explore →
                </Link>
              </div>
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
