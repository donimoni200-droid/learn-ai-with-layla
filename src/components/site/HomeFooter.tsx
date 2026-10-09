import Link from "next/link";
import { footer, brand } from "@/lib/site-content";

export function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-footer__brand">
        Learn AI <em>{brand.emWord}</em> {brand.firstName}
      </div>
      <div className="home-footer__grid">
        {footer.columns.map((col) => (
          <div key={col.label}>
            <p className="home-footer__label">{col.label}</p>
            {col.links.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="home-footer__cta">
          <p className="home-footer__label">{footer.ctaLabel}</p>
          <p>{footer.ctaText}</p>
          <Link href={footer.ctaHref}>{footer.ctaButton}</Link>
        </div>
      </div>
      <div className="home-footer__bottom">
        <span>{footer.bottomLeft}</span>
        <span>{footer.bottomRight}</span>
      </div>
    </footer>
  );
}
