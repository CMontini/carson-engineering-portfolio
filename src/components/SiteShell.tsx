import { Link, NavLink } from "react-router-dom";
import type { ReactNode } from "react";

const linkedInUrl = "https://www.linkedin.com/in/carson-montini";
const resumeUrl = "/Carson-Montini-Engineering-Resume.pdf";

export default function SiteShell({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" to="/" aria-label="Carson Montini home">
            <span className="brand-mark" aria-hidden="true">CM</span>
            <span className="brand-copy">
              <strong>Carson Montini</strong>
              <small>Mechanical Engineering Portfolio</small>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/projects">Engineering Work</NavLink>
            <NavLink to="/personal-projects">Personal Projects</NavLink>
            <a
              className="nav-resume"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Carson Montini engineering resume"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Carson Montini on LinkedIn">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a className="nav-contact" href="mailto:montini.carson@gmail.com">Contact</a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-identity">
          <strong>Carson Montini</strong>
          <span>Mechanical Engineering Portfolio</span>
        </div>
        <p className="footer-note">
          Mechanical design, system integration, manufacturing, and hands-on engineering development.
        </p>
        <div className="footer-links" aria-label="Footer links">
          <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn Profile ↗</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a>
          <a href="mailto:montini.carson@gmail.com">Email</a>
          <Link to="/projects">Engineering Work</Link>
          <Link to="/personal-projects">Personal Projects</Link>
        </div>
        <span className="footer-meta">© {year} Carson Montini</span>
      </footer>
    </div>
  );
}
