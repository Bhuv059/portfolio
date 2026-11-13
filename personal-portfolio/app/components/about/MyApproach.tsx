import Link from "next/link";

export default function MyApproach() {
  return (
    <>
      <section className="details" aria-labelledby="approach-title">
        <div className="copy">
          <p className="label">MY APPROACH</p>
          <h2 className="title" id="approach-title">
            Useful first. Thoughtful in every detail.
          </h2>
          <p className="description">
            Good web experiences should feel straightforward to use on any screen. I bring together accessible
            interfaces, responsive layouts, and dependable application logic to make products that work well for the
            people using them.
          </p>
          <Link className="btn-primary cta" href="/projects">
            Explore my work
          </Link>
        </div>

        <aside className="card" aria-label="Areas of focus">
          <h2>What I focus on</h2>
          <ul>
            <li>Responsive user interfaces</li>
            <li>React and Next.js applications</li>
            <li>Scalable full-stack development</li>
            <li>Clear, user-friendly experiences</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
