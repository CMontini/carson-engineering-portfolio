import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import SiteShell from "../components/SiteShell";
import SectionTitle from "../components/SectionTitle";

function TerminalWindow({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`mission-terminal-window ${className}`.trim()}>
      <div className="mission-terminal-bar">
        <div className="mission-terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <span>{title}</span>
      </div>
      <div className="mission-terminal-content">{children}</div>
    </div>
  );
}

export default function Mission() {
  return (
    <SiteShell>
      <main className="mission-case-study">
        <section className="mission-hero">
          <div className="mission-hero-copy">
            <p className="eyebrow">Personal Project · Engineering Tools</p>
            <h1>Mission</h1>
            <p className="mission-hero-lede">
              A terminal-based engineering workspace I built to bring calculation, reference, file-management, and system tools into one fast command-line workflow.
            </p>
            <div className="fact-row mission-fact-row">
              <span><b>Platform</b>macOS Terminal</span>
              <span><b>Core tools</b>Python · SymPy · shell scripting</span>
              <span><b>Current milestone</b>v0.12</span>
            </div>
          </div>

          <div className="mission-hero-visual" aria-label="Mission terminal workspace preview">
            <TerminalWindow title="mission">
              <p><span className="mission-prompt">$</span> mission</p>
              <p className="mission-terminal-muted">Engineering workspace</p>
              <div className="mission-menu-lines">
                <p><span>01</span> CAS calculator</p>
                <p><span>02</span> Engineering reference</p>
                <p><span>03</span> File organizer</p>
                <p><span>04</span> System dashboard</p>
              </div>
              <p className="mission-cursor"><span>›</span> select module_</p>
            </TerminalWindow>
          </div>
        </section>

        <section className="section pad-section two-col-story mission-intro">
          <div>
            <p className="eyebrow">Why I built it</p>
            <h2>Reducing friction between an engineering question and the tool needed to answer it.</h2>
          </div>
          <div className="story-copy">
            <p>
              Mission started as a calculator project and grew into a broader terminal workspace. The goal was simple: reduce the number of separate apps, files, and repeated commands I needed during engineering work on my Mac.
            </p>
            <p>
              Instead of treating each addition as a disconnected script, I developed a single launcher and organized the tools as modules. That made the project an exercise in workflow design, debugging, interface consistency, and iterative software development as much as calculation itself.
            </p>
          </div>
        </section>

        <section className="section pad-section soft-section mission-section">
          <SectionTitle
            eyebrow="01 · Workspace Architecture"
            title="One command, multiple engineering tools"
            text="The launcher became the common entry point for calculation, reference, organization, and system information. Each module can evolve independently while still feeling like part of one workspace."
          />
          <div className="mission-architecture-grid">
            <article><span>01</span><h3>CAS</h3><p>Symbolic and numerical calculation using SymPy, with readable terminal output and graphing support.</p></article>
            <article><span>02</span><h3>Reference</h3><p>Quick-access engineering equations organized by subject instead of searching through separate notes.</p></article>
            <article><span>03</span><h3>Organizer</h3><p>Preview-and-execute file organization for common folders such as Downloads, Desktop, and Documents.</p></article>
            <article><span>04</span><h3>Dashboard</h3><p>A terminal overview of disk, CPU, memory, battery, network, uptime, and recent-file information.</p></article>
          </div>
        </section>

        <section className="section pad-section mission-section mission-cas-section">
          <SectionTitle
            eyebrow="02 · Computer Algebra"
            title="Growing a calculator into a practical CAS workflow"
            text="The calculator evolved through repeated versions as I added symbolic math, better output, plotting, and command handling while debugging the edge cases that appeared in normal use."
          />
          <div className="mission-demo-grid">
            <TerminalWindow title="mission cas" className="mission-demo-window">
              <p><span className="mission-prompt">CAS ›</span> integrate(x**2, x)</p>
              <p className="mission-output"> 3</p>
              <p className="mission-output">x </p>
              <p className="mission-output">──</p>
              <p className="mission-output">3 </p>
              <p className="mission-gap"><span className="mission-prompt">CAS ›</span> solve(x**2 - 4, x)</p>
              <p className="mission-output">[-2, 2]</p>
            </TerminalWindow>
            <div className="mission-detail-copy">
              <h3>Readable output mattered as much as capability.</h3>
              <p>SymPy gave the project symbolic mathematics, but the interface still needed to behave predictably when I typed expressions naturally. That led to repeated parser and command-handling changes rather than simply exposing the library directly.</p>
              <p>A useful example was graphing: entering <code>graph x+2</code> initially treated the letters in “graph” like symbolic variables. Fixing that behavior required separating commands from mathematical expressions before evaluation.</p>
              <div className="tag-row"><span>Symbolic Math</span><span>Pretty Print</span><span>Graphing</span><span>Input Parsing</span></div>
            </div>
          </div>
        </section>

        <section className="section pad-section dark-section mission-section mission-reference-section">
          <SectionTitle
            eyebrow="03 · Engineering Reference"
            title="Keeping equations close to the calculation environment"
            text="I added a separate engineering reference window so frequently used relationships could stay visible while the CAS remained available for solving and manipulation."
          />
          <div className="mission-reference-layout">
            <TerminalWindow title="engineering reference" className="mission-reference-window">
              <p className="mission-terminal-muted">ENGINEERING REFERENCE</p>
              <div className="mission-ref-columns">
                <div><span>01</span><strong>Kinematics</strong><small>motion · velocity · acceleration</small></div>
                <div><span>02</span><strong>Dynamics</strong><small>force · energy · momentum</small></div>
                <div><span>03</span><strong>Fluids</strong><small>continuity · Bernoulli · losses</small></div>
                <div><span>04</span><strong>Heat Transfer</strong><small>conduction · convection · radiation</small></div>
                <div><span>05</span><strong>Materials</strong><small>stress · strain · torsion</small></div>
                <div><span>06</span><strong>Circuits</strong><small>voltage · current · power</small></div>
              </div>
            </TerminalWindow>
            <div className="mission-dark-copy">
              <p>The reference was intentionally separated from the calculator window. That lets equations stay visible while calculations happen beside them rather than forcing constant navigation between menus.</p>
              <p>The launcher was then updated with AppleScript so Mission could open the CAS and engineering reference in separate Terminal windows from a single command.</p>
            </div>
          </div>
        </section>

        <section className="section pad-section mission-section">
          <SectionTitle
            eyebrow="04 · Workflow Utilities"
            title="Expanding beyond calculation into everyday system tasks"
            text="Once the launcher was useful enough to stay open during normal work, I began adding utilities that solved other repetitive problems on the same machine."
          />
          <div className="mission-utility-grid">
            <article>
              <div className="mission-utility-top"><span>FILE ORGANIZER</span><strong>Preview → Execute</strong></div>
              <h3>Organize without blindly moving files.</h3>
              <p>The organizer scans selected folders, previews proposed destinations, and separates the preview step from execution so changes can be checked before files are moved.</p>
            </article>
            <article>
              <div className="mission-utility-top"><span>SYSTEM DASHBOARD</span><strong>One-screen status</strong></div>
              <h3>Surface the information I actually check.</h3>
              <p>The dashboard brings disk usage, CPU and memory information, battery status, Wi-Fi/network details, uptime, and recent files into one terminal view.</p>
            </article>
          </div>
        </section>

        <section className="section pad-section soft-section mission-section mission-iteration-section">
          <SectionTitle
            eyebrow="05 · Iteration"
            title="Built through small versions, real use, and debugging"
            text="Mission was not designed all at once. Features were added in small increments, then corrected as actual use exposed problems in command handling, permissions, layout, and launcher behavior."
          />
          <div className="mission-timeline">
            <article><span>v0.2–0.5</span><h3>CAS foundation</h3><p>Core symbolic calculation and progressively broader calculator capability.</p></article>
            <article><span>v0.6–0.11</span><h3>Interface growth</h3><p>Continued calculator expansion, output refinement, graphing, and command behavior.</p></article>
            <article><span>Launcher</span><h3>Single-command access</h3><p>Created the <code>mission</code> launcher and resolved shell-path issues so the workspace could start from a normal terminal session.</p></article>
            <article><span>v0.12</span><h3>Multi-tool workspace</h3><p>Added the engineering reference, file organizer, and system dashboard while debugging permissions and Python indentation/runtime issues.</p></article>
          </div>
        </section>

        <section className="mission-close">
          <div>
            <p className="eyebrow light">What the project taught me</p>
            <h2>A useful engineering tool is defined by workflow, not feature count.</h2>
          </div>
          <div>
            <p>Mission became most valuable when each feature reduced a real point of friction. The project reinforced the importance of modular design, clear interfaces, testing with real inputs, and treating errors as feedback for the next revision.</p>
            <Link to="/personal-projects" className="mission-back-link">← Back to personal projects</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
