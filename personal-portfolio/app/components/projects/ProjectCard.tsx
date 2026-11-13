import { projectCards } from "@/app/data";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <section className="project-cards" aria-label="Projects">
      {projectCards.map(({ projectId, icon, title, imageSrc, skillsets, TechStack }, cardIndex) => (
        <article className="floating-card" id={projectId} key={`${title}-${cardIndex}`}>
          <p className="label project-card-title">
            <Image
              src={icon}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              unoptimized
              className="project-card-icon h-10 w-10"
            />
            {title}
          </p>
          <div className="project-card-layout">
            <div className="project-picture">
              <Image
                className={imageSrc === "/images/stocks.png" ? "project-picture-image--stocks" : undefined}
                src={imageSrc}
                alt={`${title} application preview`}
                height={1024}
                width={1408}
              />
            </div>
            <div className="project-description">
              <aside className="card" aria-label={`${title} project details`}>
                <div className="project-description-content">
                  <div>
                    <h2>Tech Stack</h2>
                    <ul>
                      {TechStack.map((technology, technologyIndex) => (
                        <li key={`${technology}-${technologyIndex}`}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2>Features</h2>
                    <ul>
                      {skillsets?.map((skill, skillIndex) => (
                        <li key={`${skill}-${skillIndex}`}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
