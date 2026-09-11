import { Link } from "react-router-dom";
import SiteShell from "../components/SiteShell";
import SectionTitle from "../components/SectionTitle";
import hero from "../assets/personal/acura/hero.jpeg";
import side from "../assets/personal/acura/side.jpeg";
import front from "../assets/personal/acura/front.jpeg";
import engineBay from "../assets/personal/acura/engine-bay.jpeg";
import engineDetail from "../assets/personal/acura/engine-detail.jpeg";
import rear from "../assets/personal/acura/rear.jpeg";
import cadFront from "../assets/personal/acura/cad/front-cad.png";
import cadFrontThreeQuarter from "../assets/personal/acura/cad/front-three-quarter-cad.png";
import cadSide from "../assets/personal/acura/cad/side-cad.png";
import cadRearThreeQuarter from "../assets/personal/acura/cad/rear-three-quarter-cad.png";
import cadRear from "../assets/personal/acura/cad/rear-cad.png";
import cadTop from "../assets/personal/acura/cad/top-cad.png";
import conceptFront from "../assets/personal/acura/cad/front-concept.png";
import conceptRear from "../assets/personal/acura/cad/rear-concept.jpeg";
import conceptSide from "../assets/personal/acura/cad/side-concept.png";

export default function RSX() {
  return (
    <SiteShell>
      <main className="rsx-case-study">
        <section className="project-hero rsx-hero">
          <div>
            <p className="eyebrow">Personal Project · Automotive Development</p>
            <h1>2006 Acura RSX</h1>
            <p className="project-subtitle">
              A long-term platform for learning vehicle systems through maintenance, diagnostics, CAD development, fabrication planning, and staged powertrain upgrades.
            </p>
            <div className="fact-row">
              <span><b>Current engine</b>K20A3</span>
              <span><b>Platform</b>2006 RSX base</span>
              <span><b>Direction</b>OEM+ → custom build</span>
            </div>
          </div>
          <div className="project-hero-image rsx-hero-image">
            <img src={hero} alt="Blue 2006 Acura RSX" />
          </div>
        </section>

        <section className="section pad-section two-col-story rsx-intro">
          <div>
            <p className="eyebrow">Project Intent</p>
            <h2>Develop the car in phases instead of modifying it without a system plan.</h2>
          </div>
          <div className="story-copy">
            <p>
              I am using the RSX as a long-term engineering platform rather than treating each modification as an isolated upgrade. The current phase is focused on understanding the original K20A3 drivetrain, maintaining reliability, and documenting the vehicle before major changes begin.
            </p>
            <p>
              Future phases expand into exterior CAD and composite fabrication, a K24A2 powertrain with a manual transmission, and eventually an AWD conversion. Each phase will be developed around packaging, manufacturability, fitment, serviceability, cost, and measurable performance.
            </p>
          </div>
        </section>

        <section className="section pad-section soft-section rsx-section">
          <SectionTitle
            eyebrow="01 · Baseline Platform"
            title="Understand the stock car before changing the architecture"
            text="The current K20A3-powered RSX provides the baseline for maintenance, diagnostics, packaging measurements, and future performance comparisons."
          />
          <div className="rsx-photo-grid rsx-photo-grid-3">
            <figure><img src={front} alt="Front view of the Acura RSX" /><figcaption>Exterior baseline and front-end packaging reference.</figcaption></figure>
            <figure><img src={engineBay} alt="Acura RSX engine bay" /><figcaption>Current K20A3 engine bay used for interface and packaging reference.</figcaption></figure>
            <figure><img src={rear} alt="Rear view of the Acura RSX" /><figcaption>Rear packaging and body geometry before future body development.</figcaption></figure>
          </div>
        </section>

        <section className="section pad-section rsx-section">
          <SectionTitle
            eyebrow="02 · Exterior Design & Composites"
            title="From CAD surfaces to a body kit I can manufacture myself"
            text="A future body-development phase will move from CAD geometry into physical tooling, molds, carbon-fiber layups, trimming, mounting, and final fitment on the vehicle."
          />
          <div className="rsx-development-grid">
            <article><span>01</span><h3>CAD development</h3><p>Develop exterior geometry around the original body surfaces, wheel openings, mounting points, clearances, and the visual proportions of the car.</p></article>
            <article><span>02</span><h3>Tooling & molds</h3><p>Translate the digital surfaces into manufacturable plugs and molds while accounting for draft, split lines, release, and repeatable part geometry.</p></article>
            <article><span>03</span><h3>Carbon layup</h3><p>Plan laminate schedules, reinforcement, resin process, edge treatment, and local stiffness around mounting and load-transfer regions.</p></article>
            <article><span>04</span><h3>Fitment & mounting</h3><p>Refine panel gaps, mounting interfaces, local clearances, and serviceability through repeated physical installation and adjustment.</p></article>
          </div>
          <div className="rsx-design-documentation">
            <div className="rsx-design-intro">
              <p className="eyebrow">CAD Documentation</p>
              <h3>Establish the vehicle geometry before designing new exterior surfaces.</h3>
              <p>These CAD views give me a consistent reference for proportion, body boundaries, wheel openings, panel relationships, and future fitment studies. The model becomes the starting point for developing parts that must eventually transition from screen geometry to physical tooling and composite panels.</p>
            </div>

            <div className="rsx-cad-gallery">
              <figure className="rsx-cad-feature"><img src={cadFrontThreeQuarter} alt="Three-quarter front CAD view of the Acura RSX reference model" /><figcaption>Three-quarter view — overall proportion and front-to-side surface relationships.</figcaption></figure>
              <figure><img src={cadFront} alt="Front CAD view of the Acura RSX reference model" /><figcaption>Front view — symmetry, bumper width, headlamp boundaries, and lower-body reference.</figcaption></figure>
              <figure><img src={cadSide} alt="Side CAD view of the Acura RSX reference model" /><figcaption>Side view — rocker line, wheel openings, ride-height reference, and longitudinal proportions.</figcaption></figure>
              <figure><img src={cadRearThreeQuarter} alt="Three-quarter rear CAD view of the Acura RSX reference model" /><figcaption>Rear three-quarter view — quarter-panel, bumper, hatch, and rear-volume relationships.</figcaption></figure>
              <figure><img src={cadRear} alt="Rear CAD view of the Acura RSX reference model" /><figcaption>Rear view — bumper, exhaust, hatch, and left-to-right geometry reference.</figcaption></figure>
              <figure><img src={cadTop} alt="Top CAD view of the Acura RSX reference model" /><figcaption>Top view — planform, taper, roof width, and front/rear body alignment.</figcaption></figure>
            </div>

            <div className="rsx-concept-block">
              <div className="rsx-concept-heading">
                <p className="eyebrow">Early Concept Direction</p>
                <h3>Use sketches to establish stance and body-kit intent before committing to surfaces.</h3>
                <p>The colored overlays are early proportion studies for a wider, lower exterior direction. They are concept references—not finished geometry—and will guide later CAD development of the front, side, and rear components.</p>
              </div>
              <div className="rsx-concept-grid">
                <figure><img src={conceptFront} alt="Front body kit concept sketch over an Acura RSX outline" /><figcaption>Front concept — width, lower splitter, and front-fender direction.</figcaption></figure>
                <figure><img src={conceptSide} alt="Side body kit concept sketch over an Acura RSX outline" /><figcaption>Side concept — lower profile, rocker treatment, fender volume, and rear aero direction.</figcaption></figure>
                <figure><img src={conceptRear} alt="Rear body kit concept sketch over an Acura RSX outline" /><figcaption>Rear concept — widened stance, lower-body treatment, and wing proportion.</figcaption></figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section pad-section dark-section rsx-section">
          <SectionTitle
            eyebrow="03 · Powertrain Roadmap"
            title="Move from the K20A3 to a K24A2 with a manual transmission"
            text="The planned powertrain phase is a coordinated engine-and-transmission conversion rather than a stand-alone engine swap."
          />
          <div className="rsx-powertrain-layout">
            <figure className="rsx-engine-figure"><img src={engineDetail} alt="K20A3 engine detail in the Acura RSX" /><figcaption>Current K20A3 powertrain — the baseline before the planned conversion.</figcaption></figure>
            <div className="rsx-roadmap-copy">
              <div className="rsx-roadmap-step"><span>CURRENT</span><h3>K20A3 + automatic drivetrain</h3><p>Maintain the existing car, document interfaces, and establish a reliable baseline before major drivetrain changes.</p></div>
              <div className="rsx-roadmap-step"><span>PLANNED</span><h3>K24A2 engine swap</h3><p>Move to the larger K-series platform with the supporting mechanical, electrical, cooling, exhaust, intake, ECU, and packaging changes treated as one system.</p></div>
              <div className="rsx-roadmap-step"><span>PLANNED</span><h3>Manual transmission conversion</h3><p>Convert the car to a manual drivetrain alongside the engine project, including the transmission, pedal and clutch systems, shifter, hydraulics, mounts, axles, and related interfaces.</p></div>
            </div>
          </div>
        </section>

        <section className="section pad-section soft-section rsx-section">
          <SectionTitle
            eyebrow="04 · Long-Term Architecture"
            title="Designing toward a future AWD conversion"
            text="AWD is a later-stage goal that changes the project from a powertrain swap into a vehicle-level packaging and fabrication problem."
          />
          <div className="rsx-awd-grid">
            <div className="rsx-awd-copy">
              <p>
                A future AWD installation will require much more than adding driven rear wheels. The conversion will need to be evaluated around transmission and transfer hardware, driveshaft routing, rear differential packaging, fuel-system conflicts, exhaust routing, rear suspension and subframe interfaces, structural modification, and service access.
              </p>
              <p>
                Because it changes so many vehicle systems at once, I plan to treat AWD as a separate engineering phase after the K24A2/manual configuration is established and understood.
              </p>
            </div>
            <div className="rsx-system-stack" aria-label="Planned AWD system considerations">
              <span>Engine + transmission</span>
              <i></i>
              <span>Transfer path</span>
              <i></i>
              <span>Driveshaft routing</span>
              <i></i>
              <span>Rear differential</span>
              <i></i>
              <span>Rear chassis interfaces</span>
            </div>
          </div>
        </section>

        <section className="section pad-section rsx-section">
          <SectionTitle
            eyebrow="05 · Build Philosophy"
            title="Use each modification to learn a larger vehicle system"
            text="The goal is not simply to accumulate parts. Each phase is an opportunity to document constraints, model interfaces, fabricate components, validate fitment, and understand the consequences of the design decisions."
          />
          <div className="rsx-photo-grid rsx-photo-grid-2">
            <figure><img src={side} alt="Side view of the blue Acura RSX" /><figcaption>The current platform before major exterior and drivetrain development.</figcaption></figure>
            <div className="rsx-close-card">
              <p className="eyebrow">Planned progression</p>
              <h3>Baseline → CAD → composites → K24/manual → AWD</h3>
              <p>As each phase becomes physical, this case study will be updated with CAD, fabrication, measurements, fitment iterations, test results, and final hardware.</p>
              <Link to="/personal-projects" className="text-link">← Back to personal projects</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
