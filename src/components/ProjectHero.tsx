import type { ReactNode } from "react";
export default function ProjectHero({ eyebrow, title, subtitle, image, children }: { eyebrow: string; title: string; subtitle: string; image: string; children?: ReactNode }) {
  return (
    <section className="project-hero">
      <div className="project-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="project-subtitle">{subtitle}</p>
        {children}
      </div>
      <div className="project-hero-image"><img src={image} alt="" /></div>
    </section>
  );
}
