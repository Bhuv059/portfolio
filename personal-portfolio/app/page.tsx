import Container from "@/app/components/ui/Container";
import { projectCards } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="container" id="home">
      <p className="label">PERSONAL PORTFOLIO</p>

      <h1 className="title">
        Building modern digital experiences with <span>React & Next.js.</span>
      </h1>

      <p className="description">
        I am a full-stack developer focused on creating responsive, scalable and user-friendly web applications.{" "}
      </p>

      <div className="actions">
        <a href="/projects" className="btn-primary">
          View Projects
        </a>

        {/*  <a href="#contact" className="btn-secondary">
            Contact Me
          </a> */}
      </div>

      <section className="home-project-gallery-section" aria-label="Project image gallery">
        <h2 className="home-project-gallery-title">Project Gallery</h2>
        <div className="home-project-gallery">
          {projectCards.map(({ projectId, title, imageSrc }) => (
            <figure className="home-project-gallery-item" key={projectId}>
              <Link href={`/projects#${projectId}`} aria-label={`View ${title} project details`}>
                <Image
                  src={imageSrc}
                  alt={`${title} application preview`}
                  width={1408}
                  height={1024}
                  className="home-project-gallery-image"
                />
              </Link>
              <figcaption>
                <Link href={`/projects#${projectId}`}>{title}</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Container>
  );
}
