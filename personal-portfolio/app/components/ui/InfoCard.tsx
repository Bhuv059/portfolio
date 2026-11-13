import { InfoCardProps } from "@/app/types/types";

export default function InfoCard({ icon: Icon, title, text }: InfoCardProps) {
  return (
    <article className="info-card">
      <Icon aria-hidden="true" className="info-card-icon" strokeWidth={1.75} />
      <h2 className="info-card-title">{title}</h2>
      <p className="info-card-text">{text}</p>
    </article>
  );
}
