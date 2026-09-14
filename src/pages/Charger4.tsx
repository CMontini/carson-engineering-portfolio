import SiteShell from "../components/SiteShell";
import CaseStudyNavigation, { CaseStudyBackLink } from "../components/CaseStudyNavigation";
import ProjectHero from "../components/ProjectHero";
import SectionTitle from "../components/SectionTitle";
import ImageGrid from "../components/ImageGrid";
import hero from "../assets/c4/drive-hero.jpg";
import reveal from "../assets/c4/reveal.png";
import accum from "../assets/c4/accum.png";
import accumLayout from "../assets/c4/accum-cell-layout.png";
import segmentTop from "../assets/c4/accum-segment-top.png";
import segmentFull from "../assets/c4/segment-full.png";
import segmentEmpty from "../assets/c4/segment-empty.png";
import spacing from "../assets/c4/cell-spacing.png";
import busbarStd from "../assets/c4/busbar-std.png";
import busbarRect from "../assets/c4/busbar-rect.png";
import hvLayout from "../assets/c4/hv-layout.png";
import carIso from "../assets/c4/car-iso.png";
import carSide from "../assets/c4/car-side.png";
import driveFront from "../assets/c4/drive-front.jpg";

export default function Charger4() {
  return (
    <SiteShell>
      <main className="case-study-page charger4-page">
        <CaseStudyBackLink to="/projects" label="Engineering Work" />
        <ProjectHero
          eyebrow="CBU Motorsports · Formula SAE Electric"
          title="Charger 4"
          subtitle="Accumulator segment development, busbar design, manufacturing support, and electrical analysis for CBU Motorsports' electric Formula SAE platform."
          image={hero}
        >
          <div className="fact-row">
            <span><b>Role</b>Battery subsystem contributor</span>
            <span><b>Primary tools</b>SolidWorks · Excel</span>
            <span><b>Fabrication</b>3D printing · laser cutting · drill press</span>
          </div>
        </ProjectHero>

        <section className="section pad-section two-col-story case-intro">
          <div>
            <p className="eyebrow">Contribution scope</p>
            <h2>Turning an unconventional accumulator architecture into manufacturable battery hardware.</h2>
          </div>
          <div className="story-copy">
            <p>My work centered on accumulator segment design and manufacturing, battery busbar development, and the calculations used to support those design decisions.</p>
            <p>The team selected an L-shaped segment architecture rather than a conventional rectangular layout. That choice coupled cell packaging, electrical routing, clearances, assembly sequence, manufacturability, and Formula SAE rules into one constrained mechanical problem.</p>
          </div>
        </section>

        <section className="section pad-section soft-section case-section">
          <SectionTitle
            eyebrow="01 · System Architecture"
            title="Packaging the accumulator around the vehicle"
            text="The first challenge was fitting a dense battery system into the available vehicle envelope while preserving the internal structure needed for segments, retention, and high-voltage hardware."
          />
          <ImageGrid columns={3} items={[
            {src: accum, alt: "Charger 4 accumulator assembly CAD", caption: "Accumulator assembly used to coordinate the overall enclosure and segment packaging."},
            {src: accumLayout, alt: "Charger 4 internal accumulator cell layout", caption: "Internal accumulator layout showing the relationship between cell groups, structure, and high-voltage hardware."},
            {src: segmentTop, alt: "Top view of Charger 4 accumulator segments", caption: "Top-view segment arrangement used to evaluate packaging and internal interfaces."}
          ]} />
        </section>

        <section className="section pad-section case-section">
          <SectionTitle
            eyebrow="02 · Segment Development"
            title="Designing the L-shaped segment for fabrication and assembly"
            text="The segment geometry had to preserve the intended cell arrangement while becoming a repeatable part that could be manufactured, assembled, inspected, and serviced."
          />
          <div className="constraint-grid">
            <article><span>01</span><h3>Packaging</h3><p>Arrange cells, retention features, interfaces, and required clearances inside a nonrectangular envelope.</p></article>
            <article><span>02</span><h3>Manufacturing</h3><p>Translate the concept into geometry compatible with 3D-printed, laser-cut, and drilled components.</p></article>
            <article><span>03</span><h3>Compliance</h3><p>Revise the design around Formula SAE accumulator and electrical constraints without losing practical assembly access.</p></article>
          </div>
          <ImageGrid columns={3} items={[
            {src: segmentFull, alt: "Charger 4 completed accumulator segment CAD", caption: "Assembled segment showing the cell and interconnect structure."},
            {src: segmentEmpty, alt: "Charger 4 empty accumulator segment structure CAD", caption: "Structural view exposing the segment geometry and internal packaging features."},
            {src: spacing, alt: "Charger 4 cylindrical cell spacing study", caption: "Cell-spacing study used to evaluate packaging density and unused space around the cells."}
          ]} />
        </section>

        <section className="section pad-section dark-section case-section">
          <SectionTitle
            eyebrow="03 · Electrical Distribution"
            title="Developing busbars around both current flow and geometry"
            text="The conductive hardware could not be treated as an electrical problem alone. Busbar geometry also affected cell interfaces, manufacturability, clearances, and the physical routing of the accumulator."
          />
          <ImageGrid columns={3} items={[
            {src: busbarStd, alt: "Standard Charger 4 battery busbar geometry", caption: "Busbar geometry developed for the segment's cell-to-cell electrical architecture."},
            {src: busbarRect, alt: "Alternate rectangular Charger 4 busbar geometry", caption: "Alternate conductive geometry considered during busbar development and packaging studies."},
            {src: hvLayout, alt: "Charger 4 high-voltage component layout", caption: "High-voltage layout used to coordinate component placement and electrical interfaces."}
          ]} />
        </section>

        <section className="section pad-section case-section vehicle-context-section">
          <SectionTitle
            eyebrow="04 · Vehicle Context"
            title="Connecting subsystem decisions to the complete car"
            text="The accumulator was one part of a larger Formula SAE system. Vehicle CAD established the packaging context, while the completed car provided the final integration and testing environment for the battery hardware."
          />
          <ImageGrid columns={2} items={[
            {src: carIso, alt: "Charger 4 vehicle CAD isometric view", caption: "Vehicle-level CAD showing where the accumulator and supporting systems fit within the complete platform."},
            {src: carSide, alt: "Charger 4 vehicle CAD side view", caption: "Side profile used to understand packaging relationships across the vehicle."},
            {src: reveal, alt: "Completed Charger 4 Formula SAE electric vehicle", caption: "Completed Charger 4 vehicle after subsystem integration."},
            {src: driveFront, alt: "Charger 4 during vehicle testing", caption: "Charger 4 in motion during vehicle testing, showing the battery system operating as part of the complete car."}
          ]} />
        </section>
        <CaseStudyNavigation
          backTo="/projects"
          backLabel="All Engineering Work"
          next={{ to: "/projects/charger-5", label: "Charger 5" }}
        />
      </main>
    </SiteShell>
  );
}
