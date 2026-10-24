import { Link } from "react-router-dom";
import SiteShell from "../components/SiteShell";
import { featuredProjects } from "../data/projects";

const projectMeta = {
  "sae-aero": {
    label: "2027 Regular Class · In development",
    role: "Fuselage design & aircraft integration",
    scope: "Payload · structure · surface modeling · CFD setup",
  },
  "charger-4": {
    label: "Battery subsystem development",
    role: "Accumulator segment & busbar design",
    scope: "Packaging · manufacturing · electrical distribution",
  },
  "charger-5": {
    label: "High-voltage system ownership",
    role: "Power Distribution Unit mechanical owner",
    scope: "Enclosure · interfaces · fabrication · integration",
  },
  "ace": {
    label: "Autonomous cleaning robotics",
    role: "Mechanical & electromechanical development",
    scope: "Mobility · cleaning system · controls · prototyping",
  },
};

export default function Projects() {
  return (
    <SiteShell>
      <main>
        <section className="page-intro engineering-intro">
          <div className="engineering-intro-copy">
            <p className="eyebrow">Engineering Work</p>
            <h1>Mechanical and electromechanical development</h1>
            <p>
              Four case studies spanning Formula SAE battery and high-voltage hardware, autonomous robotics, and ongoing fuselage development for SAE Aero Design Regular Class.
            </p>
          </div>
          <div className="archive-summary" aria-label="Engineering archive summary">
            <div><strong>{String(featuredProjects.length).padStart(2, "0")}</strong><span>Major case studies</span></div>
            <div><strong>Ground + Air</strong><span>Primary systems</span></div>
            <div><strong>CAD → Build</strong><span>Design through fabrication</span></div>
          </div>
        </section>

        <section className="section pad-section engineering-archive-section">
          <div className="archive-heading">
            <div>
              <p className="eyebrow">Project Archive</p>
              <h2>Engineering progression</h2>
            </div>
            <p>
              Each case study is organized around my responsibilities, the constraints that shaped the design, and the hardware or ongoing design work.
            </p>
          </div>

          <div className="engineering-project-list">
            {featuredProjects.map((project, index) => {
              const meta = projectMeta[project.slug as keyof typeof projectMeta];
              return (
                <Link to={`/projects/${project.slug}`} className={`engineering-project-row project-${index + 1}`} key={project.slug}>
                  <div className="engineering-project-index">0{index + 1}</div>
                  <div className="engineering-project-visual">
                    <img src={project.image} alt={project.slug === "sae-aero" ? "Conceptual SAE Aero fuselage payload layout" : `${project.title} engineering hardware`} />
                  </div>
                  <div className="engineering-project-content">
                    <div className="engineering-project-topline">
                      <p className="eyebrow">{meta.label}</p>
                      <span className="engineering-project-arrow" aria-hidden="true">↗</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p className="engineering-project-role">{meta.role}</p>
                    <p className="engineering-project-summary">{project.subtitle}</p>
                    <div className="engineering-project-scope">
                      <span>Scope</span>
                      <strong>{meta.scope}</strong>
                    </div>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <span className="case-study-link">View case study</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
