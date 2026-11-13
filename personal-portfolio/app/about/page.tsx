import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import { infoCards, skillCards, achievements, experience } from "@/app/data";
import SkillCardGrid from "@/app/components/ui/SkillCardGrid";
import InfoCard from "../components/ui/InfoCard";
import MyApproach from "../components/about/MyApproach";
import Intro from "../components/about/Intro";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my approach to building responsive, user-friendly web applications.",
};

export default function AboutPage() {
  return (
    <Container className="container" id="about">
      <Intro />
      <MyApproach />
      <section className="infocard-grid" aria-label="Development principles">
        {infoCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </section>

      <SkillCardGrid title="Technical skills" cards={skillCards} collapsible centeredCards />
      <SkillCardGrid title="Achievements" cards={achievements} collapsible centeredCards />
      <SkillCardGrid title="Experience" cards={experience} collapsible centeredCards />
    </Container>
  );
}
