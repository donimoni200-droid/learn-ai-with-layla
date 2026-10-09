import Link from "next/link";
import { challenge, marquee, paths, guidesSection, socialSection, guides } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function HomeChallenge() {
  return (
    <section className="home-challenge" aria-labelledby="challenge-title">
      <div className="home-challenge__visual">
        { }
        <img src="/assets/sections/challenge-desk.png" alt="Working at a desk with AI tools open" />
      </div>
      <div className="home-challenge__content">
        <p className="home-section-kicker">{challenge.kicker}</p>
        <h2 className="home-challenge__title" id="challenge-title">
          {challenge.titleA} <span>
            <em>{challenge.titleEm}</em> {challenge.titleB}
          </span>
        </h2>
        <p>{challenge.body}</p>
        <Link href="/challenge" className="btn home-challenge__button">
          {challenge.cta}
        </Link>
      </div>
    </section>
  );
}

export function HomePaths() {
  return (
    <section className="home-paths" aria-labelledby="paths-title">
      <div className="home-paths__marquee" aria-hidden="true">
        <div className="home-paths__marquee-track">
          <span>{marquee.repeat(4)}</span>
          <span>{marquee.repeat(4)}</span>
        </div>
      </div>
      <div className="home-paths__layout">
        <div className="home-paths__visual">
          { }
          <img src="/assets/sections/paths-portrait.png" alt="Portrait of the founder" />
          <span>
            {paths.visualBadgeA}
            <em>{paths.visualBadgeEm}</em>
            {paths.visualBadgeB}
          </span>
        </div>
        <div className="home-paths__content">
          <h2 className="home-paths__title" id="paths-title">
            {paths.titleA} <em>{paths.titleEm}</em>
            <span>{paths.titleB}</span>
          </h2>
          <ol className="home-paths__list">
            {paths.items.map((item) => (
              <li key={item.number}>
                <span className="home-paths__number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link href={item.href}>{item.cta}</Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function HomeGuides() {
  const recent = guides.slice(0, 8);
  return (
    <section className="home-guides" aria-labelledby="guides-title">
      <div className="home-guides__heading">
        <div>
          <p className="home-section-kicker">{guidesSection.kicker}</p>
          <h2 id="guides-title">
            {guidesSection.titleA}
            <em>{guidesSection.titleEm}</em>
            {guidesSection.titleB}
          </h2>
        </div>
        <p>{guidesSection.desc}</p>
      </div>
      <div className="home-guides__grid">
        {recent.map((g) => (
          <Reveal key={g.slug} className="home-guides__cell">
            <Link href={`/guides/${g.slug}`} className="home-guide-card">
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <span className="home-guide-card__link">Read Guide →</span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Link href="/guides" className="btn home-guides__all">
        {guidesSection.cta}
      </Link>
    </section>
  );
}

export function HomeSocial() {
  return (
    <section className="home-social" aria-label="Social links">
      <div className="home-social__content">
        <p className="home-section-kicker">{socialSection.kicker}</p>
        <h2>
          {socialSection.titleA}
          <em>{socialSection.titleEm}</em>
          {socialSection.titleB}
        </h2>
        <p>{socialSection.desc}</p>
        <div className="home-social__buttons">
          <a className="btn" href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener">
            {socialSection.instagram}
          </a>
          <a className="btn" href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener">
            {socialSection.tiktok}
          </a>
        </div>
      </div>
      <div className="home-social__visual">
        { }
        <img src="/assets/sections/social-studio.png" alt="Filming social content in the studio" />
      </div>
    </section>
  );
}
