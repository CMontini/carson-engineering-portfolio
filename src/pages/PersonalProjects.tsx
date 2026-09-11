import { Link } from "react-router-dom";
import SiteShell from "../components/SiteShell";
import acura from "../assets/personal/acura/hero.jpeg";

export default function PersonalProjects() {
  return (
    <SiteShell>
      <main>
        <section className="page-intro personal-intro">
          <p className="eyebrow">Personal Projects</p>
          <h1>Engineering outside the classroom and race shop</h1>
          <p>
            Independent projects give me room to explore ideas, build useful tools, and apply engineering judgment without a predefined assignment. These projects span software development, automotive systems, diagnostics, and hands-on technical work.
          </p>
        </section>

        <section className="personal-summary" aria-label="Personal project summary">
          <div><strong>02</strong><span>active project tracks</span></div>
          <div><strong>Software + Hardware</strong><span>different tools, same engineering process</span></div>
          <div><strong>Build → Test → Refine</strong><span>practical iteration over one-off results</span></div>
        </section>

        <section className="section pad-section personal-projects-section">
          <div className="section-heading-row personal-heading-row">
            <div>
              <p className="eyebrow">Current Work</p>
              <h2>Projects I continue to build and refine</h2>
            </div>
            <p>
              Each project is documented around the decisions, constraints, tools, and iterations behind the finished result—not just the final output.
            </p>
          </div>

          <div className="personal-project-list">
            <Link to="/personal-projects/mission" className="personal-project-row mission-project-row personal-project-link">
              <div className="personal-project-visual mission-visual" aria-label="Mission terminal interface preview">
                <div className="terminal-chrome">
                  <span></span><span></span><span></span>
                  <small>mission</small>
                </div>
                <div className="terminal-body" aria-hidden="true">
                  <p><span>$</span> mission</p>
                  <p className="terminal-muted">Engineering workspace</p>
                  <p>1&nbsp;&nbsp;CAS calculator</p>
                  <p>2&nbsp;&nbsp;Engineering reference</p>
                  <p>3&nbsp;&nbsp;File organizer</p>
                  <p>4&nbsp;&nbsp;System dashboard</p>
                  <p className="terminal-prompt"><span>›</span> select module_</p>
                </div>
              </div>

              <div className="personal-project-copy">
                <div className="personal-project-meta">
                  <span>01</span>
                  <p className="eyebrow">Software · Engineering Tools</p>
                </div>
                <h2>Mission</h2>
                <p className="personal-project-lede">
                  A custom terminal-based engineering workspace built to make calculation, reference, file-management, and system-information tools faster to access from one command.
                </p>
                <div className="personal-scope">
                  <span>Python</span>
                  <span>SymPy</span>
                  <span>macOS Terminal</span>
                  <span>Tool Development</span>
                </div>
                <p className="personal-project-note">
                  Developed iteratively as a practical daily-use tool, with modules for symbolic calculation, graphing, engineering equations, file organization, and system monitoring.
                </p>
                <span className="personal-status">View case study →</span>
              </div>
            </Link>

            <Link to="/personal-projects/rsx" className="personal-project-row acura-project-row personal-project-link">
              <div className="personal-project-visual acura-project-visual">
                <img src={acura} alt="Blue 2006 Acura RSX photographed outdoors" />
                <div className="project-image-label">2006 Acura RSX · K20A3 platform</div>
              </div>

              <div className="personal-project-copy">
                <div className="personal-project-meta">
                  <span>02</span>
                  <p className="eyebrow">Automotive · Personal Platform</p>
                </div>
                <h2>2006 Acura RSX</h2>
                <p className="personal-project-lede">
                  A long-term automotive platform for maintenance, diagnostics, mechanical understanding, and evidence-based performance-development planning.
                </p>
                <div className="personal-scope">
                  <span>K-Series</span>
                  <span>Diagnostics</span>
                  <span>Maintenance</span>
                  <span>Performance Research</span>
                </div>
                <p className="personal-project-note">
                  Work centers on understanding the existing K20A3 system first, then evaluating realistic upgrade paths through packaging, cost, reliability, weight, and measured performance.
                </p>
                <span className="personal-status">View case study →</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
