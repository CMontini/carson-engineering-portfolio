import { Link } from "react-router-dom";
import SiteShell from "../components/SiteShell";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects } from "../data/projects";
import c4Hero from "../assets/c4/reveal.png";

const capabilities = [
  {
    number: "01",
    title: "Mechanical Design",
    text: "Component and subsystem design in SolidWorks, with emphasis on packaging, interfaces, serviceability, and real hardware constraints."
  },
  {
    number: "02",
    title: "System Integration",
    text: "Bringing mechanical and electrical hardware together within tight packaging, safety, and rules constraints."
  },
  {
    number: "03",
    title: "Design for Manufacturing",
    text: "Designing parts and assemblies around how they will actually be fabricated, assembled, inspected, and revised."
  },
  {
    number: "04",
    title: "Engineering Development",
    text: "Moving from requirements and calculations to prototypes, testing, iteration, and finished hardware."
  }
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="home-hero">
          <div className="home-hero-copy">
            <p className="eyebrow">Mechanical Engineering Portfolio</p>
            <h1>Designing mechanical systems around real constraints.</h1>
            <p className="hero-lede">
              I’m a mechanical engineering student focused on mechanical design, electromechanical integration, manufacturing, and hands-on development. I enjoy taking projects from requirements and early concepts through CAD, fabrication, testing, and refinement.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/projects">View engineering work</Link>
              <Link className="button secondary" to="/personal-projects">Explore personal projects</Link>
            </div>
            <div className="hero-proof" aria-label="Engineering focus areas">
              <span>SolidWorks</span>
              <span>Electromechanical Systems</span>
              <span>Manufacturing</span>
              <span>Design &amp; Testing</span>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="hero-image-wrap">
              <img src={c4Hero} alt="CBU Motorsports Formula SAE electric vehicle on display" />
              <span className="hero-image-label">Formula SAE Electric</span>
            </div>
            <div className="hero-statbar">
              <span><strong>Tools</strong>SolidWorks · Excel</span>
              <span><strong>Fabrication</strong>3D Printing · Laser Cutting · Machining</span>
              <span><strong>Focus</strong>Packaging · Integration · Hardware Development</span>
            </div>
          </div>
        </section>

        <section className="capability-band" aria-label="Engineering capabilities">
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-item" key={capability.number}>
                <span className="capability-number">{capability.number}</span>
                <h2>{capability.title}</h2>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section pad-section selected-work-section">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Selected Work"
              title="Formula SAE battery & high-voltage systems"
              text="A closer look at the mechanical design, packaging, manufacturing, and integration work behind two generations of CBU Motorsports electric vehicles."
            />
            <Link className="section-link" to="/projects">View engineering archive →</Link>
          </div>

          <div className="project-card-grid">
            {featuredProjects.map((project, index) => (
              <Link to={`/projects/${project.slug}`} className="project-card" key={project.slug}>
                <div className="project-card-image">
                  <img src={project.image} alt={`${project.title} engineering project`} />
                  <span className="project-card-index">0{index + 1}</span>
                </div>
                <div className="project-card-body">
                  <p className="eyebrow">{project.kicker}</p>
                  <div className="project-card-title-row">
                    <h3>{project.title}</h3>
                    <span className="project-card-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p>{project.subtitle}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="text-link">Open case study</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section dark-band">
          <div>
            <p className="eyebrow light">Engineering approach</p>
            <h2>Design decisions should hold up beyond the CAD model.</h2>
          </div>
          <div className="dark-band-copy">
            <p>
              I approach projects by identifying constraints early, understanding the interfaces between systems, and making design choices that can be manufactured, assembled, tested, and serviced. I use analysis to guide decisions, then rely on fabrication and testing to expose what needs to change.
            </p>
            <Link className="button dark-button" to="/personal-projects">Explore independent projects</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
