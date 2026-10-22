import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (!menu) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenu(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  return <div className="fj site-shell">
    <a className="skip-link" href="#site-content">Skip to content</a>
    <header className="fj-nav">
      <Link to="/" className="fj-brand" aria-label="Carson Montini home"><span className="fj-symbol" aria-hidden="true">cm<span>+</span></span><span>CARSON MONTINI<br/><small>MECHANICAL ENGINEERING</small></span></Link>
      <button className="fj-menu" onClick={() => setMenu(open => !open)} aria-expanded={menu} aria-controls="portfolio-navigation">INDEX {menu ? '−' : '+'}</button>
      <nav id="portfolio-navigation" className={menu ? "is-open" : ""} aria-label="Main navigation" onClick={() => setMenu(false)}>
        <NavLink to="/projects">01 / WORK</NavLink>
        <NavLink to="/personal-projects">02 / PERSONAL</NavLink>
        <Link to="/#about">03 / APPROACH</Link>
        <a href="/Carson-Montini-Engineering-Resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ ↗</a>
        <a className="fj-contact" href="mailto:montini.carson@gmail.com">LET’S TALK <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <div id="site-content" tabIndex={-1}>{children}</div>
    <footer className="fj-footer"><span>CARSON MONTINI © {new Date().getFullYear()}</span><span>ALWAYS A WORK IN PROGRESS.</span><a href="https://www.linkedin.com/in/carson-montini" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="#">BACK TO TOP ↑</a></footer>
  </div>;
}
