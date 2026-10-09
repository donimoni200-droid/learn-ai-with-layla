import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { CountdownBar } from "@/components/site/CountdownBar";
import { placeholderPages as pp } from "@/lib/site-content";

function PlaceholderInner({
  kicker,
  title,
  desc,
  cta,
  href = "/challenge",
  img,
  imgAlt,
}: {
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  href?: string;
  img: string;
  imgAlt: string;
}) {
  return (
    <div className="inner-page fade-in">
      <CountdownBar />
      <SiteNav />
      <main>
        <section className="inner-hero">
          <div className="inner-hero__copy">
            <p className="home-section-kicker">{kicker}</p>
            <h1 className="inner-hero__title">{title}</h1>
            <p>{desc}</p>
            <Link href={href} className="btn btn--hero">
              {cta}
            </Link>
          </div>
          <div className="inner-hero__visual">
            { }
            <img src={img} alt={imgAlt} />
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

export default function CommunityPage() {
  return (
    <PlaceholderInner
      kicker={pp.community.kicker}
      title={pp.community.title}
      desc={pp.community.desc}
      cta={pp.community.cta}
      img="/assets/about/journey-now.png"
      imgAlt="The community filming updates"
    />
  );
}
