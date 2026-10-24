import SiteShell from "../components/SiteShell";
import CaseStudyNavigation, { CaseStudyBackLink } from "../components/CaseStudyNavigation";
import SectionTitle from "../components/SectionTitle";
import payloadLayout from "../assets/aero/payload-layout.svg";

const workstreams = [
  {
    number: "01", title: "Fuselage geometry", status: "CAD development",
    body: "Developing the fuselage in SolidWorks through cross-section studies, spline-controlled profiles, and nose and aft transitions. Iteration focuses on a usable payload envelope, smooth surface continuity, and closed geometry suitable for downstream analysis.",
    detail: "Cross-section sizing · guide curves · surface lofts · model cleanup",
  },
  {
    number: "02", title: "Payload & center of gravity", status: "Packaging iteration",
    body: "Studying a six-bottle, 2 L payload arrangement with three bottles forward, three aft, and batteries and electronics near the wing region. Loading access, bottle support, retention, and changes in mass distribution drive the internal layout.",
    detail: "Front loading · bottle fit · component access · mass distribution",
  },
  {
    number: "03", title: "Internal structure", status: "Structural trade studies",
    body: "Evaluating balsa formers, bulkheads, longitudinal members, and cross-bracing as an integrated fuselage structure. The work compares member spacing, material choices, and local reinforcement against weight, assembly effort, and the need to keep the payload path accessible.",
    detail: "Former spacing · bracing layouts · balsa sizing · metal-member concepts",
  },
  {
    number: "04", title: "Aerodynamic analysis", status: "CFD setup & iteration",
    body: "Preparing the fuselage for SolidWorks Flow Simulation, including geometry closure, flow direction, units, computational-domain setup, analysis goals, and mesh refinement. Drag, pressure, and velocity are the quantities of interest as the geometry evolves.",
    detail: "Geometry preparation · boundary conditions · drag goals · mesh studies",
  },
  {
    number: "05", title: "Aircraft integration", status: "Interface development",
    body: "Coordinating fuselage packaging with a twin-electric, wing-mounted propulsion configuration, wing interfaces, and landing-gear placement. Battery and electronics access, structural load paths, and aircraft balance must develop together rather than as isolated subsystem decisions.",
    detail: "Wing interfaces · landing gear · electronics packaging · service access",
  },
];

export default function SaeAero() {
  return (
    <SiteShell>
      <main className="case-study-page aero-page">
        <CaseStudyBackLink to="/projects" label="Engineering Work" />
        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="eyebrow">SAE Aero Design · 2027 Regular Class · In development</p>
            <h1>SAE Aero</h1>
            <p className="project-subtitle">Designing a payload-carrying aircraft from the inside out—connecting fuselage geometry, internal structure, aerodynamic analysis, and subsystem packaging.</p>
            <div className="fact-row">
              <span><b>My focus</b>Fuselage design &amp; aircraft integration</span>
              <span><b>Tools</b>SolidWorks · Flow Simulation</span>
              <span><b>Design target</b>Six 2 L payload bottles</span>
              <span><b>Team</b>Nine-person university design team</span>
            </div>
          </div>
          <figure className="aero-hero-figure">
            <img src={payloadLayout} width="1000" height="640" alt="Conceptual fuselage layout with front and rear bottle payloads around a central battery and electronics bay" />
            <figcaption>Packaging concept—not to scale. The layout is under development.</figcaption>
          </figure>
        </section>
        <section className="section pad-section two-col-story case-intro">
          <div><p className="eyebrow">The engineering problem</p><h2>Carry the payload without letting the packaging design the whole airplane.</h2></div>
          <div className="story-copy">
            <p>For our 2027 SAE Aero Design Regular Class aircraft, my work centers on the fuselage and the interfaces that make it part of a complete airplane. The bottle payload sets a demanding internal envelope, but the exterior shape, structural weight, loading sequence, and aircraft balance all influence whether that envelope becomes a practical design.</p>
            <p>I am developing these decisions together: shaping the fuselage in SolidWorks, laying out payload and electronics, comparing internal structural arrangements, and preparing the geometry for aerodynamic analysis.</p>
          </div>
        </section>
        <section className="section pad-section soft-section case-section">
          <SectionTitle eyebrow="01–05 · Work in progress" title="Five connected design problems" text="Each workstream changes the others. A smaller cross-section affects bottle clearance; a new former affects loading; a battery move changes balance and service access." />
          <div className="aero-workstreams">
            {workstreams.map(({ number, title, status, body, detail }) => (
              <article key={number}>
                <span className="aero-stream-number">{number}</span>
                <div><p className="eyebrow">{status}</p><h3>{title}</h3><p>{body}</p><p className="aero-stream-detail">{detail}</p></div>
              </article>
            ))}
          </div>
        </section>
        <section className="section pad-section case-section">
          <SectionTitle eyebrow="06 · Design tradeoffs" title="Making the constraints visible" text="The design work is a sequence of tradeoffs rather than a single finished shape." />
          <div className="constraint-grid">
            <article><span>PACKAGING ↔ AERODYNAMICS</span><h3>Volume versus external shape</h3><p>Keep usable bottle clearance and room for structure while refining cross-sections and nose-to-tail transitions.</p></article>
            <article><span>STRUCTURE ↔ MASS</span><h3>Support where it matters</h3><p>Compare former spacing, longitudinal support, and bracing without adding unnecessary mass or blocking payload access.</p></article>
            <article><span>INTEGRATION ↔ ACCESS</span><h3>Design for the loading sequence</h3><p>Place batteries and electronics near the wing region while preserving practical payload loading, retention, inspection, and maintenance.</p></article>
          </div>
        </section>
        <section className="section pad-section dark-section case-section">
          <SectionTitle eyebrow="07 · Next validation steps" title="From design intent to measured performance" text="This is an active design case study. Final dimensions, structural margins, aerodynamic performance, and flight results are still being developed and validated." />
          <div className="constraint-grid light-cards">
            <article><span>01</span><h3>Close the mass model</h3><p>Consolidate component masses and locations, evaluate loaded and unloaded balance, and refine the payload and electronics layout.</p></article>
            <article><span>02</span><h3>Validate the structure</h3><p>Define load cases, assess joints and load paths, and use physical testing to check the assumptions behind material and member sizing.</p></article>
            <article><span>03</span><h3>Correlate the analysis</h3><p>Check CFD sensitivity to mesh and setup, compare design iterations, and ultimately relate analysis to ground and flight testing.</p></article>
          </div>
        </section>
        <CaseStudyNavigation backTo="/projects" backLabel="All Engineering Work" previous={{ to: "/projects/ace", label: "ACE" }} />
      </main>
    </SiteShell>
  );
}
