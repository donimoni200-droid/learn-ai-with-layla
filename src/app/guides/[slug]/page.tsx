import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { guides } from "@/lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide not found" };
  return { title: `${guide.title} — Learn AI With Layla`, description: guide.desc };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const others = guides.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <article className="guide-article">
          <Link href="/guides" className="guide-article__back">
            ← All guides
          </Link>
          <h1 className="guide-article__title">{guide.title}</h1>
          <p className="guide-article__meta">
            {guide.tag} · {guide.readTime} read
          </p>
          {guide.body.map((section, i) => (
            <section key={i}>
              <h2>{section.heading}</h2>
              {section.paras.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
          <div className="cta-box">
            <h3>Want the full system?</h3>
            <p>
              The 30-Day AI Challenge walks you from zero to a complete AI system for your life,
              work, and business — one short build a day.
            </p>
            <Link href="/challenge">See the Challenge →</Link>
          </div>
        </article>
        <section style={{ padding: "0 clamp(24px, 5vw, 78px) 90px" }}>
          <div className="section-heading" style={{ marginBottom: 30 }}>
            <h2>
              Keep <em>reading</em>
            </h2>
          </div>
          <div className="guide-list" style={{ paddingBottom: 0 }}>
            {others.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-row">
                <div className="guide-row__body">
                  <span className="guide-row__tag">
                    {g.tag} · {g.readTime}
                  </span>
                  <h2 className="guide-row__title">{g.title}</h2>
                  <p className="guide-row__desc">{g.desc}</p>
                </div>
                <span className="guide-row__arrow" aria-hidden="true">→</span>
              </Link>
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
