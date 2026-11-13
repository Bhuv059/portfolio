import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import ProjectCard from "@/app/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my approach to building responsive, user-friendly web applications.",
};

export default function AboutPage() {
  return (
    <Container className="container" id="about">
      <p className="label">PROJECTS BUILT BY BB</p>

      <h1 className="title">
        Modern digital Application Builder and with a great focus on <span>user friendly designs.</span>
      </h1>
      <p className="description">Here is the list of all my projects with detailed descriptions down below</p>
      <ProjectCard />
    </Container>
  );
}
