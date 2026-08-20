/**
 * VISUAL SYSTEM: Swiss Industrial Print — case-record navigation uses the same paper,
 * black-rule, mono-metadata, and aviation-red operational language as the main dossier.
 */
import { ArrowLeft, ArrowUpRight, Download, MapPin } from "lucide-react";
import { Link, useRoute } from "wouter";
import { profile, projects } from "@/data/portfolio";
import { useEffect } from "react";

const markImage = "/manus-storage/rizky-industrial-mark_e93e0bfa.png";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const project = projects.find((entry) => entry.slug === params?.slug);

  useEffect(() => window.scrollTo(0, 0), [project?.slug]);

  if (!project) {
    return (
      <main className="missing-record">
        <p className="kicker">[ CASE RECORD / NOT FOUND ]</p>
        <h1>RECORD<br />UNAVAILABLE.</h1>
        <Link className="hard-button hard-button-primary" href="/">RETURN TO DOSSIER <ArrowLeft size={18} /></Link>
      </main>
    );
  }

  return (
    <div className="site-shell case-shell">
      <header className="topbar">
        <Link className="brand-block" href="/" aria-label="Return to portfolio"><img src={markImage} alt="" aria-hidden="true" /><span>[ RBC / 001 ]<sup>®</sup></span></Link>
        <p className="case-nav-label">CASE RECORD / {project.index.slice(-3)}</p>
        <a className="topbar-cv" href={profile.cvUrl} target="_blank" rel="noreferrer">CV PDF <Download size={15} aria-hidden="true" /></a>
      </header>
      <main className="case-grid">
        <aside className="case-coordinate-rail" aria-label="Case record coordinate rail">
          <span>002</span>
          <p>CASE / VERIFIED<br />ENVIRONMENT / AIR</p>
          <i>+ + +</i>
        </aside>
        <div className="case-record-content">
        <section className={`case-hero case-${project.visual}`}>
          <Link className="back-link" href="/"><ArrowLeft size={17} aria-hidden="true" /> RETURN TO DOSSIER</Link>
          <div className="case-hero-data"><p>{project.index}</p><span>{project.category}</span><span>{project.year}</span></div>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.shortDescription}</p>
          <div className="case-stamp" aria-hidden="true"><span>RBC</span><i>ENV.SYSTEM<br />CASE FILE</i></div>
        </section>
        <section className="case-facts">
          <div><span>ROLE</span><strong>{project.role}</strong></div>
          <div><span>ORGANIZATION</span><strong>{project.organization}</strong></div>
          <div><span>LOCATION</span><strong><MapPin size={15} aria-hidden="true" /> {project.location}</strong></div>
          <div><span>TOOLS</span><strong>{project.tools.join(" / ")}</strong></div>
        </section>
        <section className="case-body">
          <article><p className="kicker">01 / THE CONTEXT</p><h2>THE PROBLEM</h2><p>{project.problem}</p></article>
          <article><p className="kicker">02 / FIELD METHOD</p><h2>THE APPROACH</h2><ol>{project.approach.map((step) => <li key={step}>{step}</li>)}</ol></article>
          <article className="case-result"><p className="kicker">03 / PUBLISHED RECORD</p><h2>THE RESULT</h2><p>{project.result}</p><span>NO UNDOCUMENTED PERFORMANCE DATA IS DISPLAYED.</span></article>
          <article><p className="kicker">04 / TRANSFERABLE CAPABILITY</p><h2>THE TAKEAWAY</h2><p>{project.takeaway}</p></article>
        </section>
        <section className="case-close"><p>DISCUSS THIS CAPABILITY</p><a href={`mailto:${profile.email}?subject=Portfolio%20inquiry%20—%20${encodeURIComponent(project.title)}`}>OPEN CONTACT CHANNEL <ArrowUpRight size={18} aria-hidden="true" /></a></section>
        </div>
      </main>
      <footer className="footer-record"><span>© {new Date().getFullYear()} RIZKY BAKTI CATURRAGA</span><span>CASE RECORD / VERIFIED CV SOURCE</span><Link href="/">RETURN TO DOSSIER ↑</Link></footer>
    </div>
  );
}
