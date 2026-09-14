import SiteShell from "../components/SiteShell";
import CaseStudyNavigation, { CaseStudyBackLink } from "../components/CaseStudyNavigation";
import ProjectHero from "../components/ProjectHero";
import SectionTitle from "../components/SectionTitle";
import hero from "../assets/ace/ace-nearly-assembled-studio.webp";
import systemDiagram from "../assets/ace/system-architecture.svg";

export default function Ace() {
  return (
    <SiteShell>
      <main className="case-study-page ace-page">
        <CaseStudyBackLink to="/projects" label="Engineering Work" />
        <ProjectHero
          eyebrow="University Engineering Project · Autonomous Robotics"
          title="ACE"
          subtitle="Automated Court Enhancer—a compact autonomous robot developed to clean hardwood athletic courts through coordinated mobility, controlled misting, and a rotating cleaning surface."
          image={hero}
        >
          <div className="fact-row">
            <span><b>Role</b>Mechanical &amp; electromechanical development</span>
            <span><b>Controller</b>Arduino Mega · H-bridge</span>
            <span><b>Design target</b>12 in diameter · 1.0–1.2 m/s · 2 hr runtime</span>
          </div>
        </ProjectHero>

        <section className="section pad-section two-col-story case-intro">
          <div>
            <p className="eyebrow">Project objective</p>
            <h2>Combining court maintenance, autonomous mobility, and compact packaging in one platform.</h2>
          </div>
          <div className="story-copy">
            <p>ACE was developed as an autonomous hardwood-court cleaner capable of applying a controlled amount of water and immediately working the surface with a rotating cloth.</p>
            <p>The project required mechanical design, power budgeting, controls, and manufacturing decisions to develop together. The drive motors, cleaning mechanism, pump, water reservoir, electronics, and battery all had to fit within a compact circular chassis while remaining stable, serviceable, and protected from moisture.</p>
          </div>
        </section>

        <section className="section pad-section soft-section case-section">
          <SectionTitle
            eyebrow="01 · System Requirements"
            title="Defining performance before selecting hardware"
            text="Early targets established the physical envelope, expected speed, operating time, and subsystem loads that guided the chassis, drivetrain, battery, and water-system architecture."
          />
          <div className="wide-image">
            <img src={systemDiagram} alt="ACE system architecture showing mobility, controls, misting, and rotating cleaning subsystems" />
          </div>
          <div className="constraint-grid">
            <article><span>01</span><h3>Compact Envelope</h3><p>A circular footprint near 12 inches in diameter constrained the reservoir, electronics, battery, motors, and cleaning hardware.</p></article>
            <article><span>02</span><h3>Mobile Performance</h3><p>A target speed of 1.0–1.2 m/s and 3–4 inch wheels informed motor selection, gearing, traction, and chassis stability.</p></article>
            <article><span>03</span><h3>Useful Runtime</h3><p>A two-hour operating target and 20–40 pound total-weight range drove battery sizing and subsystem power estimates.</p></article>
          </div>
        </section>

        <section className="section pad-section case-section">
          <SectionTitle
            eyebrow="02 · Mechanical Architecture"
            title="Packaging the drivetrain and cleaning system around a shared chassis"
            text="ACE uses differential drive for maneuverability while a dedicated motor rotates the cleaning cloth beneath the chassis. The reservoir and misting hardware are positioned to apply fluid ahead of the cleaning surface."
          />
          <div className="constraint-grid">
            <article><span>01</span><h3>Differential Drive</h3><p>Two independently controlled DC wheel motors provide forward motion, turning, and path correction without a separate steering mechanism.</p></article>
            <article><span>02</span><h3>Cleaning Module</h3><p>A dedicated motor drives the rotating cloth so cleaning action remains independent of vehicle speed and turning behavior.</p></article>
            <article><span>03</span><h3>Water Management</h3><p>A small reservoir, pump, and misting outlets control fluid delivery while enclosure and component placement reduce exposure to leaks and spray.</p></article>
          </div>
        </section>

        <section className="section pad-section dark-section case-section">
          <SectionTitle
            eyebrow="03 · Controls & Power"
            title="Coordinating motion, cleaning, and fluid delivery"
            text="An Arduino Mega provides the control platform, with an H-bridge driving the wheel motors and separate outputs coordinating the cleaning motor, pump, and servo-actuated functions."
          />
          <div className="constraint-grid light-cards">
            <article><span>01</span><h3>Power Architecture</h3><p>A 12.8 V battery platform supports the motors and pump, with regulated 5 V logic power for the controller and low-voltage electronics.</p></article>
            <article><span>02</span><h3>Load Budget</h3><p>Drive-motor, pump, servo, and cleaning-motor current estimates were combined to evaluate battery capacity, wiring, and protection needs.</p></article>
            <article><span>03</span><h3>Motion Control</h3><p>Independent wheel commands create the basis for closed-loop speed correction, repeatable coverage paths, and future PID refinement.</p></article>
          </div>
        </section>

        <section className="section pad-section case-section">
          <SectionTitle
            eyebrow="04 · Prototype Development"
            title="Using integration and testing to expose the next design change"
            text="The prototype brought mechanical, electrical, and fluid systems together so the team could evaluate fit, traction, cleaning behavior, water delivery, runtime, and service access as one complete machine."
          />
          <div className="constraint-grid">
            <article><span>01</span><h3>Build</h3><p>Translate the system layout into a manufacturable chassis with practical mounting, wiring, and assembly interfaces.</p></article>
            <article><span>02</span><h3>Test</h3><p>Evaluate straight-line travel, turning, cleaning contact, mist coverage, current draw, and component temperature.</p></article>
            <article><span>03</span><h3>Iterate</h3><p>Use prototype observations to refine weight distribution, moisture protection, cleaning pressure, controls, and maintenance access.</p></article>
          </div>
        </section>
        <CaseStudyNavigation
          backTo="/projects"
          backLabel="All Engineering Work"
          previous={{ to: "/projects/charger-5", label: "Charger 5" }}
        />
      </main>
    </SiteShell>
  );
}
