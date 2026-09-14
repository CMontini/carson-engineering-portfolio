import { Link } from "react-router-dom";

type CaseStudyLink = {
  to: string;
  label: string;
};

export function CaseStudyBackLink({ to, label }: { to: string; label: string }) {
  return (
    <nav className="case-study-breadcrumb" aria-label="Case study breadcrumb">
      <Link to={to}>
        <span aria-hidden="true">←</span>
        <span>Back to {label}</span>
      </Link>
    </nav>
  );
}

export default function CaseStudyNavigation({
  backTo,
  backLabel,
  previous,
  next,
}: {
  backTo: string;
  backLabel: string;
  previous?: CaseStudyLink;
  next?: CaseStudyLink;
}) {
  return (
    <nav className="case-study-navigation" aria-label="Case study navigation">
      {previous ? (
        <Link className="case-study-navigation-side case-study-navigation-previous" to={previous.to}>
          <small>Previous case study</small>
          <strong><span aria-hidden="true">←</span> {previous.label}</strong>
        </Link>
      ) : <span className="case-study-navigation-spacer" aria-hidden="true" />}

      <Link className="case-study-navigation-all" to={backTo}>
        <small>Project archive</small>
        <strong>{backLabel}</strong>
      </Link>

      {next ? (
        <Link className="case-study-navigation-side case-study-navigation-next" to={next.to}>
          <small>Next case study</small>
          <strong>{next.label} <span aria-hidden="true">→</span></strong>
        </Link>
      ) : <span className="case-study-navigation-spacer" aria-hidden="true" />}
    </nav>
  );
}
