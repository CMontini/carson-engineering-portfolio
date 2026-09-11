import SiteShell from "../components/SiteShell";
import ProjectHero from "../components/ProjectHero";
import SectionTitle from "../components/SectionTitle";
import ImageGrid from "../components/ImageGrid";
import hero from "../assets/c5/pdu-transparent.png";
import schematic from "../assets/c5/top-schematic.png";
import pduFront from "../assets/c5/pdu-front.png";
import pduBack from "../assets/c5/pdu-back.png";
import pduIso1 from "../assets/c5/pdu-iso-01.png";
import pduBackTrans from "../assets/c5/pdu-back-transparent.png";
import accumulator from "../assets/c5/accumulator.png";
import vehiclePackaging from "../assets/c5/vehicle-packaging.png";
import spacing from "../assets/c5/cell-spacing.png";
import cooling from "../assets/c5/cooling.png";
import seg1 from "../assets/c5/segment-01.png";
import seg3 from "../assets/c5/segment-03.png";

export default function Charger5() {
  return (
    <SiteShell>
      <main className="case-study-page charger5-page">
        <ProjectHero
          eyebrow="CBU Motorsports · Formula SAE Electric"
          title="Charger 5"
          subtitle="Independent mechanical ownership of the Power Distribution Unit, from enclosure architecture and interfaces through fabrication and hardware integration."
          image={hero}
        >
          <div className="fact-row">
            <span><b>Role</b>PDU mechanical owner</span>
            <span><b>Primary tools</b>SolidWorks · Excel</span>
            <span><b>Additional work</b>Busbar · accumulator research</span>
          </div>
        </ProjectHero>

        <section className="section pad-section two-col-story case-intro">
          <div>
            <p className="eyebrow">Independent ownership</p>
            <h2>Designing a high-voltage enclosure around hardware that kept changing.</h2>
          </div>
          <div className="story-copy">
            <p>I owned the mechanical design and manufacturing of the Charger 5 Power Distribution Unit while also contributing research to the next accumulator and busbar architecture.</p>
            <p>The PDU was a moving packaging problem. As electronic hardware evolved, the enclosure had to be revised around mounting, connector locations, operator access, serviceability, heat management, and Formula SAE rules without losing a practical path to fabrication and assembly.</p>
          </div>
        </section>

        <section className="section pad-section soft-section case-section">
          <SectionTitle
            eyebrow="01 · System Context"
            title="Packaging the PDU as part of the complete vehicle"
            text="Vehicle-level layout established the space, interfaces, and neighboring systems the PDU had to work around. The enclosure was developed as an integrated part of the electric powertrain rather than as a standalone box."
          />
          <div className="wide-image"><img src={schematic} alt="Charger 5 vehicle top schematic" /></div>
        </section>

        <section className="section pad-section case-section">
          <SectionTitle
            eyebrow="02 · PDU Development"
            title="Coordinating enclosure geometry, interfaces, and service access"
            text="Repeated hardware changes made the enclosure an iterative integration problem. Each revision had to keep the electrical components accessible, supported, aligned, and manufacturable inside the available package."
          />
          <div className="constraint-grid">
            <article><span>01</span><h3>Packaging</h3><p>Fit switches, disconnects, displays, connectors, heat-management hardware, and structure inside a constrained enclosure.</p></article>
            <article><span>02</span><h3>Interfaces</h3><p>Coordinate operator-facing controls and rear electrical connections while preserving alignment and mounting integrity.</p></article>
            <article><span>03</span><h3>Serviceability</h3><p>Maintain practical access for assembly, inspection, troubleshooting, and future hardware changes.</p></article>
          </div>
          <ImageGrid columns={2} items={[
            {src: pduIso1, alt: "Charger 5 PDU isometric design", caption: "Overall enclosure architecture showing the relationship between the housing, operator-facing controls, and packaged hardware."},
            {src: pduFront, alt: "Charger 5 PDU front panel", caption: "Front-panel layout coordinating switches, disconnects, display hardware, and the primary operator interfaces."},
            {src: pduBack, alt: "Charger 5 PDU rear panel", caption: "Rear interface layout developed around electrical connections, mounting, and service access."},
            {src: pduBackTrans, alt: "Transparent Charger 5 PDU rear view", caption: "Transparent CAD view used to check internal clearances and alignment between enclosure features and packaged hardware."}
          ]} />
        </section>

        <section className="section pad-section dark-section case-section">
          <SectionTitle
            eyebrow="03 · Manufacturing"
            title="Carrying the enclosure from CAD into physical hardware"
            text="The PDU work extended beyond digital packaging. Supporting parts, panels, and interfaces were developed around the fabrication processes available to the team and then brought together during hardware fit-up."
          />
          <div className="constraint-grid light-cards">
            <article><span>01</span><h3>3D Printing</h3><p>Produced custom housings, covers, and prototype interface components for enclosure development and final integration.</p></article>
            <article><span>02</span><h3>Laser Cutting</h3><p>Prepared 2D panel geometry and DXF-based features for repeatable enclosure fabrication.</p></article>
            <article><span>03</span><h3>Shop Integration</h3><p>Used drilling, heat-sink integration, mounting, and final fit-up to translate the CAD package into assembled hardware.</p></article>
          </div>
        </section>

        <section className="section pad-section case-section">
          <SectionTitle
            eyebrow="04 · Accumulator Research"
            title="Extending the same packaging mindset to the next battery system"
            text="Alongside PDU ownership, I supported research into Charger 5 accumulator architecture, cell spacing, cooling, segment packaging, and vehicle-level integration."
          />
          <ImageGrid columns={3} items={[
            {src: vehiclePackaging, alt: "Charger 5 accumulator and drivetrain packaging", caption: "Vehicle-level study showing the relationship between the accumulator, drivetrain, and available chassis volume."},
            {src: accumulator, alt: "Charger 5 accumulator assembly", caption: "Accumulator concept used to evaluate enclosure organization and the overall segment architecture."},
            {src: cooling, alt: "Charger 5 accumulator cooling analysis", caption: "Cooling and airflow study used to examine thermal behavior through the proposed battery assembly."}
          ]} />
          <ImageGrid columns={3} items={[
            {src: spacing, alt: "Charger 5 cell spacing study", caption: "Cell-spacing study supporting decisions about packaging density and thermal clearance."},
            {src: seg1, alt: "Charger 5 battery segment", caption: "Segment concept integrating the cell arrangement with containment and interconnect features."},
            {src: seg3, alt: "Transparent Charger 5 battery segment", caption: "Transparent segment view used to inspect how the packaged cells and interconnect architecture fit together."}
          ]} />
        </section>
      </main>
    </SiteShell>
  );
}
