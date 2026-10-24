import { useEffect, useRef, useState } from 'react';
import SiteShell from "../components/SiteShell";
import c4Hero from "../assets/c4/reveal.png";
const projects = [{
  id: '01',
  name: 'CHARGER 05',
  category: 'Formula SAE / Electrical packaging',
  year: '2025',
  description: 'Making complex hardware fit. And making it serviceable.',
  body: 'Designed and fabricated the Power Distribution Unit enclosure and packaging, with work spanning accumulator layout, interfaces, and battery-system integration.',
  scope: ['Power distribution enclosure', 'SolidWorks / additive manufacturing', 'Packaging, access & rules compliance'],
  href: '/projects/charger-5'
}, {
  id: '02',
  name: 'CHARGER 04',
  category: 'Formula SAE / Accumulator systems',
  year: '2024',
  description: 'Where mechanical packaging meets high-voltage hardware.',
  body: 'Designed accumulator packaging and current-carrying hardware, including busbars and supporting calculations, with manufacturability and electrical integration driving the design.',
  scope: ['Accumulator packaging', 'Busbar development', 'Manufacturing & electrical interfaces'],
  href: '/projects/charger-4'
}, {
  id: '03',
  name: 'ACE',
  category: 'Robotics / Automated Court Enhancer',
  year: '',
  description: 'A small machine with a whole system to figure out.',
  body: 'Developed a compact autonomous hardwood-court cleaning robot that integrates differential drive, controlled misting, and a rotating cleaning system.',
  scope: ['Mechanical & electrical integration', 'Arduino / differential drive', 'Prototype development & testing'],
  href: '/projects/ace'
}, {
  id: '04',
  name: 'SAE AERO',
  category: 'Aerospace / SAE Aero Regular Class',
  year: '2027',
  description: 'An aircraft designed from the payload outward.',
  body: 'Developing fuselage geometry, six-bottle payload packaging, internal structure, and CFD setup for our 2027 Regular Class aircraft. Current work connects aerodynamic shape with mass distribution, loading access, and aircraft integration.',
  scope: ['SolidWorks fuselage & surface modeling', 'Payload, structure & aircraft integration', 'Flow Simulation / ongoing development'],
  href: '/projects/sae-aero'
}];
export default function Home() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState('All work');

  const dialogRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (active === null) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [active]);
  const selected = active === null ? null : projects[active];
  return <SiteShell>
 <main><section className="fj-intro"><div className="fj-topline"><span><i /> INDEPENDENT MIND. HANDS-ON ENGINEER.</span><span>RIVERSIDE, CALIFORNIA / PORTFOLIO 2026</span></div><h1>Ideas are easy.<br />Make them <em>work.</em><span className="fj-plus">+</span></h1><div className="fj-intro-bottom"><span className="fj-micro">DESIGN / BUILD / TEST / REPEAT</span><p>I’m Carson. I turn mechanical problems into physical things—from Formula SAE electrical systems to autonomous robots and payload-carrying aircraft.</p><a href="#work" className="fj-jump" aria-label="Explore selected work">↓</a></div></section>
 <section className="fj-hero" aria-label="Formula SAE featured project"><img src={c4Hero} width={1536} height={1024} fetchPriority="high" alt="CBU Motorsports Formula SAE electric car" /><div className="fj-photo-shade" /><span className="fj-cross fj-cross-a">+</span><span className="fj-cross fj-cross-b">+</span><div className="fj-image-top"><span>FIELD NOTES / 001</span><span>CBU MOTORSPORTS — FORMULA SAE ELECTRIC</span></div><div className="fj-image-bottom"><div><span className="fj-micro">SYSTEMS THAT LEAVE THE SCREEN.</span><h2>Built for<br />the real world.</h2></div><button onClick={() => setActive(0)} className="fj-feature-link"><span>EXPLORE THE WORK<br /><b>Charger 05 / System integration</b></span><span>↗</span></button></div><div className="fj-image-foot"><span>FIG. 01 — ENGINEERING IN CONTEXT</span><span>CAD → FABRICATION → HARDWARE</span></div></section>
 <section id="work" className="fj-work"><div className="fj-section-head"><div><span className="fj-micro">01 / PROJECT REGISTER</span><h2>Selected work<span> ({String(projects.length).padStart(2, '0')})</span></h2></div><div className="fj-filters" aria-label="Filter projects">{['All work', 'Formula SAE', 'Robotics', 'Aerospace'].map(f => <button key={f} className={filter === f ? 'active' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div></div><div className="fj-register-label"><span>NO. / PROJECT</span><span>DISCIPLINE</span><span>OPEN</span></div>{projects.map((p, i) => (filter === 'All work' || p.category.startsWith(filter)) && <button className="fj-project" key={p.id} onClick={() => setActive(i)}><span className="fj-project-title"><small>{p.id}</small><strong>{p.name}</strong></span><span className="fj-project-meta">{p.category}<small>{p.description}</small></span><span className="fj-project-arrow">↗</span></button>)}<a className="fj-all" href="/personal-projects" target="_blank" rel="noreferrer">ALSO ON THE WORKBENCH <span>Personal projects & explorations ↗</span></a></section>
 <section id="about" className="fj-about"><div className="fj-about-side"><span className="fj-micro">02 / HOW I THINK</span><div className="fj-orbit" aria-hidden="true"><span>CM</span><i /><b>+</b></div><span className="fj-micro">FROM FIRST SKETCH<br />TO LAST FASTENER.</span></div><div className="fj-about-content"><h2>A CAD model is<br />only the <em>beginning.</em></h2><p>I care about what happens after the render. How a part is made. How the wiring routes. Whether you can reach that fastener. What breaks in testing—and what the next iteration needs.</p><p>I’m a mechanical engineering student at California Baptist University, focused on mechanical design, electromechanical integration, and hands-on development.</p><div className="fj-method">{[['01', 'Find the constraints', 'Understand the interfaces, requirements, and practical limits.'], ['02', 'Build something real', 'Design around the tools, materials, and people doing the making.'], ['03', 'Let testing talk', 'Use the hardware to challenge the assumptions. Refine. Repeat.']].map(([n, t, d]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
 <section className="fj-end"><span className="fj-micro">HAVE A GOOD PROBLEM?</span><a href="mailto:montini.carson@gmail.com">Let’s make<br />something <em>work.</em> <span>↗</span></a><div className="fj-end-bottom"><span>MECHANICAL DESIGN / SYSTEM INTEGRATION / PROTOTYPING</span><a href="mailto:montini.carson@gmail.com">MONTINI.CARSON@GMAIL.COM ↗</a></div></section></main>
 {selected && <div className="fj-dialog-backdrop" onClick={() => setActive(null)}><section ref={dialogRef} className="fj-dialog" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={e => e.stopPropagation()} onKeyDown={e => {
        if (e.key === 'Escape') setActive(null);
        if (e.key === 'Tab') {
          const elements = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button');
          if (!elements?.length) return;
          const first = elements[0], last = elements[elements.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }}><button className="fj-close" onClick={() => setActive(null)} aria-label="Close project brief">CLOSE ×</button><span className="fj-micro">PROJECT BRIEF / {selected.id}</span><h2 id="project-title">{selected.name}</h2><span className="fj-micro">{selected.category}</span><h3>{selected.description}</h3><p>{selected.body}</p><ul>{selected.scope.map(s => <li key={s}>{s}</li>)}</ul><a className="fj-case" href={selected.href} target="_blank" rel="noreferrer">READ FULL CASE STUDY ↗</a></section></div>}
 </SiteShell>;
}