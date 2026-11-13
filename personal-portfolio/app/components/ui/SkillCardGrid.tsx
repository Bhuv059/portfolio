import { useId } from "react";
import type { SkillCardGridProps } from "@/app/data";

export default function SkillCardGrid({
  title,
  cards,
  collapsible = false,
  centeredCards = false,
}: SkillCardGridProps) {
  const headingId = useId();
  const heading = (
    <h2 className="title" id={headingId}>
      {title}
    </h2>
  );
  const cardGrid = (
    <div className="skillcard-grid">
      {cards.map(({ icon: Icon, title: cardTitle, skillsets, text }) => (
        <article className="skillcard" key={cardTitle}>
          <div className="skillcard-heading">
            <Icon aria-hidden="true" className="skillcard-icon" strokeWidth={1.75} />
            <h3 className="skillcard-card-title">{cardTitle}</h3>
          </div>

          {skillsets && (
            <ul className="skillcard-skillsets">
              {skillsets.map((skill) => (
                <li className="skillcard-badge" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          )}
          {text && <p className="info-card-text">{text}</p>}
        </article>
      ))}
    </div>
  );

  return (
    <section className="skill-section" aria-labelledby={headingId}>
      {collapsible ? (
        <details className={`skill-section-details${centeredCards ? " skill-section-details--centered" : ""}`}>
          <summary className="skill-section-toggle">{heading}</summary>
          {cardGrid}
        </details>
      ) : (
        <>
          {heading}
          {cardGrid}
        </>
      )}
    </section>
  );
}
