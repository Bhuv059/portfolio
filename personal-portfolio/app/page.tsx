import Container from "@/app/components/ui/Container";

export default function Home() {
  return (
    <Container className="container">
      <p className="label">PERSONAL PORTFOLIO</p>

      <h1 className="title">
        Building modern digital experiences with <span>React & Next.js.</span>
      </h1>

      <p className="description">
        I am a full-stack developer focused on creating responsive, scalable and user-friendly web applications.{" "}
      </p>

      <div className="actions">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>

        {/*  <a href="#contact" className="btn-secondary">
            Contact Me
          </a> */}
      </div>
    </Container>
  );
}
