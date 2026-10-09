import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { GuidesList } from "@/components/site/GuidesList";

export const metadata: Metadata = {
  title: "Free AI Guides — Learn AI With Layla",
  description:
    "Bite-sized guides to help you get more out of AI — from first setup to advanced multi-agent workflows.",
};

export default function GuidesPage() {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <section className="inner-hero" style={{ minHeight: 380 }}>
          <div className="inner-hero__copy">
            <p className="home-section-kicker">The free library</p>
            <h1 className="inner-hero__title">
              Free <em>guides</em>
            </h1>
            <p>
              Bite-sized guides to help you get more out of AI — from first setup to advanced
              multi-agent workflows. New guides every week.
            </p>
          </div>
          <div className="inner-hero__visual">
            { }
            <img src="/assets/sections/social-studio.png" alt="The guides library" />
          </div>
        </section>

        <GuidesList />
      </main>
      <footer className="site-footer">
        <div>
          <p>© 2026 Learn AI With Layla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
