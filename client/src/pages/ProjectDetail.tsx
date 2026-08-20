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
        <p className="kicker">[ REKAMAN KASUS / TIDAK DITEMUKAN ]</p>
        <h1>REKAMAN<br />TIDAK TERSEDIA.</h1>
        <Link className="hard-button hard-button-primary" href="/">KEMBALI KE DOSIER <ArrowLeft size={18} /></Link>
      </main>
    );
  }

  return (
    <div className="site-shell case-shell">
      <header className="topbar">
        <Link className="brand-block" href="/" aria-label="Return to portfolio"><img src={markImage} alt="" aria-hidden="true" /><span>[ RBC / 001 ]<sup>®</sup></span></Link>
        <p className="case-nav-label">REKAMAN KASUS / {project.index.slice(-3)}</p>
        <a className="topbar-cv" href={profile.cvUrl} target="_blank" rel="noreferrer">CV PDF <Download size={15} aria-hidden="true" /></a>
      </header>
      <main className="case-grid">
        <aside className="case-coordinate-rail" aria-label="Case record coordinate rail">
          <span>002</span>
          <p>KASUS / TERVERIFIKASI<br />LINGKUNGAN</p>
          <i>+ + +</i>
        </aside>
        <div className="case-record-content">
        <section className={`case-hero case-${project.visual}`}>
          <Link className="back-link" href="/"><ArrowLeft size={17} aria-hidden="true" /> KEMBALI KE DOSIER</Link>
          <div className="case-hero-data"><p>{project.index}</p><span>{project.category}</span><span>{project.year}</span></div>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.shortDescription}</p>
          <div className="case-stamp" aria-hidden="true"><span>RBC</span><i>SISTEM.LINGKUNGAN<br />BERKAS KASUS</i></div>
        </section>
        <section className="case-facts">
          <div><span>PERAN</span><strong>{project.role}</strong></div>
          <div><span>ORGANISASI</span><strong>{project.organization}</strong></div>
          <div><span>LOKASI</span><strong><MapPin size={15} aria-hidden="true" /> {project.location}</strong></div>
          <div><span>PERANGKAT</span><strong>{project.tools.join(" / ")}</strong></div>
        </section>
        <section className="case-body">
          <article><p className="kicker">01 / KONTEKS</p><h2>MASALAH</h2><p>{project.problem}</p></article>
          <article><p className="kicker">02 / METODE LAPANGAN</p><h2>PENDEKATAN</h2><ol>{project.approach.map((step) => <li key={step}>{step}</li>)}</ol></article>
          <article className="case-result"><p className="kicker">03 / REKAMAN PUBLIK</p><h2>HASIL</h2><p>{project.result}</p><span>TIDAK ADA DATA KINERJA YANG TIDAK TERDOKUMENTASI.</span></article>
          <article><p className="kicker">04 / KAPABILITAS TERAPAN</p><h2>PELAJARAN</h2><p>{project.takeaway}</p></article>
        </section>
        <section className="case-close"><p>DISKUSIKAN KAPABILITAS INI</p><a href={`mailto:${profile.email}?subject=Pertanyaan%20portofolio%20—%20${encodeURIComponent(project.title)}`}>BUKA KANAL KONTAK <ArrowUpRight size={18} aria-hidden="true" /></a></section>
        </div>
      </main>
      <footer className="footer-record"><span>© {new Date().getFullYear()} RIZKY BAKTI CATURRAGA</span><span>REKAMAN KASUS / SUMBER CV TERVERIFIKASI</span><Link href="/">KEMBALI KE DOSIER ↑</Link></footer>
    </div>
  );
}
