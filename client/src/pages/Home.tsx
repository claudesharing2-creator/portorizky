/**
 * VISUAL SYSTEM: Swiss Industrial Print — asymmetric dossier rail, large Archivo Black
 * typography, mono metadata, off-white paper, and aviation-red operational markings.
 */
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Download, Mail, MapPin, Phone, Plus } from "lucide-react";
import {
  achievements,
  certifications,
  experience,
  leadership,
  navigation,
  profile,
  projects,
  recognition,
  skillGroups,
  technicalEcosystem,
} from "@/data/portfolio";
import { useState } from "react";

const heroImage = "/manus-storage/rizky-industrial-hero_2339e009.jpg";
const experienceImage = "/manus-storage/rizky-industrial-experience_4734c9c0.jpg";
const contactImage = "/manus-storage/rizky-industrial-contact_fe52b1b1.jpg";
const markImage = "/manus-storage/rizky-industrial-mark_e93e0bfa.png";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeSystem, setActiveSystem] = useState<(typeof technicalEcosystem)[number]>(technicalEcosystem[0]);

  return (
    <div className="site-shell" id="top">
      <header className="topbar">
        <a className="brand-block" href="#top" aria-label="Return to top">
          <img src={markImage} alt="" aria-hidden="true" />
          <span>[ RBC / 001 ]<sup>®</sup></span>
        </a>
        <nav className="dossier-nav" aria-label="Bagian portofolio">
          {navigation.map(([label, href]) => (
            <button key={href} type="button" onClick={() => scrollToId(href.slice(1))}>
              {label}
            </button>
          ))}
        </nav>
        <a className="topbar-cv" href={profile.cvUrl} target="_blank" rel="noreferrer">
          UNDUH CV <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero-record" aria-labelledby="hero-title">
          <div className="hero-meta rail-label">
            <span>DOSIER PERSONEL / 001</span>
            <span>STATUS: AKTIF</span>
            <span>LOK: SMD / IDN</span>
          </div>
          <div className="hero-copy reveal">
            <p className="kicker"><span className="target" /> INSINYUR LINGKUNGAN / SPESIALIS HSSE</p>
            <h1 id="hero-title">
              <span>RIZKY</span>
              <span>BAKTI</span>
              <span>CATURRAGA</span>
            </h1>
            <p className="hero-statement">{profile.statement}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="action-row">
              <button type="button" className="hard-button hard-button-primary" onClick={() => scrollToId("work")}>
                LIHAT REKAMAN LAPANGAN <ArrowDownRight size={18} aria-hidden="true" />
              </button>
              <a className="hard-button" href={profile.cvUrl} target="_blank" rel="noreferrer">
                UNDUH CV <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual reveal" aria-label="Grafik abstrak sistem lingkungan industri">
            <img src={heroImage} alt="Kolase baja hitam, penanda registrasi, dan kertas teknis." />
            <div className="hero-map" aria-hidden="true">
              <svg viewBox="0 0 560 420" role="presentation">
                <path d="M20 293 C112 188 195 356 274 244 S425 183 536 58" />
                <path d="M42 350 C133 245 206 388 303 293 S462 208 550 143" />
                <path d="M80 66 L455 375 M168 25 L536 325 M13 178 L371 411" />
                <circle cx="109" cy="253" r="8" /><circle cx="307" cy="247" r="8" /><circle cx="454" cy="171" r="8" />
              </svg>
              <span className="node node-air">UDARA</span><span className="node node-data">DATA</span><span className="node node-water">AIR</span>
            </div>
            <p>SISTEM.LINGKUNGAN / 001<br />PEMANTAUAN + KEPATUHAN</p>
          </div>
          <a className="scroll-marker" href="#about" onClick={(e) => { e.preventDefault(); scrollToId("about"); }}>
            LANJUTKAN DOSIER <ChevronDown size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="record-section profile-record" id="about" aria-labelledby="about-title">
          <div className="section-rail"><span>01</span><p>REKAMAN<br />IDENTITAS</p></div>
          <div className="profile-claim reveal">
            <p className="kicker">[ DASAR / PROFIL PROFESIONAL ]</p>
            <h2 id="about-title">TEKNIK<br /><em>LINGKUNGAN</em><br />BUKAN SEKADAR<br />ANGKA.</h2>
          </div>
          <div className="profile-evidence reveal">
            <p>Ini tentang memahami sistem di baliknya: pemantauan, kepatuhan, kondisi lapangan, dan keputusan yang menghubungkan data dengan operasi.</p>
            <dl className="data-list">
              <div><dt>IPK</dt><dd>{profile.education.gpa}</dd></div>
              <div><dt>GELAR</dt><dd>{profile.education.degree}</dd></div>
              <div><dt>FOKUS</dt><dd>KEPATUHAN / AIR / UDARA / DATA</dd></div>
              <div><dt>LOKASI</dt><dd>{profile.location}</dd></div>
            </dl>
            <p className="education-note"><strong>{profile.education.institution}</strong> · {profile.education.period} · {profile.education.distinction}</p>
          </div>
        </section>

        <section className="record-section work-record" id="work" aria-labelledby="work-title">
          <div className="section-rail"><span>02</span><p>REKAMAN<br />LAPANGAN</p></div>
          <div className="section-heading">
            <p className="kicker">[ PENGALAMAN PROFESIONAL ]</p>
            <h2 id="work-title">KERJA ADALAH<br />REKAMAN<br />LAPANGAN.</h2>
          </div>
          <div className="work-visual">
            <img src={experienceImage} alt="Technical paper, metal grid, and industrial calibration stripe." />
            <p>LOG // E-2025<br />SUMBER: CV TERVERIFIKASI</p>
          </div>
          <div className="experience-ledger">
            {experience.map((item, index) => (
              <details className="experience-item" key={`${item.role}-${item.period}`} open={index === 0}>
                <summary>
                  <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="experience-head"><strong>{item.role}</strong><small>{item.organization} / {item.location}</small></span>
                  <span className="experience-period">{item.period}<i>{item.status ?? "REKAMAN DITUTUP"}</i></span>
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <div className="experience-content">
                  <p>{item.summary}</p>
                  <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="record-section project-record" aria-labelledby="project-title">
          <div className="section-rail"><span>03</span><p>PROYEK<br />TERPILIH</p></div>
          <div className="project-intro">
            <p className="kicker">[ REKAMAN KASUS / BERBASIS SUMBER ]</p>
            <h2 id="project-title">KERJA LAPANGAN /<br />PROYEK<br />TERPILIH</h2>
            <p>Setiap rekaman kasus menjaga lingkup yang tersedia dan menyatakan secara terbuka bila hasil angka tidak terdokumentasi.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.visual}`} key={project.id}>
                <div className="project-signal" aria-hidden="true"><span /><span /><span /></div>
                <p className="project-index">{project.index}</p>
                <h3>{project.title}</h3>
                <p className="project-category">{project.category} / {project.year}</p>
                <p className="project-summary">{project.shortDescription}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link className="project-link" href={`/projects/${project.slug}`}>BUKA REKAMAN KASUS <ArrowUpRight size={17} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="record-section skills-record" id="skills" aria-labelledby="skills-title">
          <div className="section-rail"><span>04</span><p>EKOSISTEM<br />TEKNIS</p></div>
          <div className="skills-intro">
            <p className="kicker">[ ALAT / METODE / SISTEM ]</p>
            <h2 id="skills-title">EKOSISTEM<br />TEKNIS,<br />BUKAN DAFTAR.</h2>
          </div>
          <div className="skills-map" aria-label="Technical skill groups">
            {skillGroups.map((group, index) => (
              <article className={`skill-zone zone-${index + 1}`} key={group.label}>
                <p>{group.label}</p>
                <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="ecosystem-panel">
            <div className="ecosystem-controls" aria-label="Technical ecosystem categories">
              {technicalEcosystem.map(([area]) => (
                <button className={activeSystem[0] === area ? "is-active" : ""} key={area} type="button" onClick={() => setActiveSystem(technicalEcosystem.find(([name]) => name === area) ?? technicalEcosystem[0])}>{area}</button>
              ))}
            </div>
            <div className="ecosystem-result">
              <p>SISTEM TERPILIH / <strong>{activeSystem[0]}</strong></p>
              <div>{activeSystem[1].map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="record-section archive-record" id="archive" aria-labelledby="archive-title">
          <div className="section-rail"><span>05</span><p>ARSIP<br />DOKUMEN</p></div>
          <div className="archive-heading">
            <p className="kicker">[ SERTIFIKASI / PENGAKUAN / CATATAN ]</p>
            <h2 id="archive-title">ARSIP<br />BUKTI<br />KERJA.</h2>
          </div>
          <div className="certificate-grid">
            {certifications.map(([code, title, description, year]) => (
              <article className="certificate" key={code}>
                <p>{code}<span>{year}</span></p>
                <h3>{title}</h3>
                <small>{description}</small>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
          <div className="achievement-array">
            {achievements.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="archive-lower">
            <article className="recognition-record"><p className="kicker">[ PENGAKUAN ]</p><ul>{recognition.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="leadership-record"><p className="kicker">[ DI LUAR LAPANGAN ]</p>{leadership.map((item) => <div key={item.role}><strong>{item.role}</strong><span>{item.organization} · {item.period}</span><p>{item.text}</p></div>)}</article>
            <article className="note-record"><p className="kicker">[ CATATAN LAPANGAN / ARSIP MENDATANG ]</p><h3>CATATAN MENUNGGU BUKTI LAPANGAN YANG NYATA.</h3><p>Artikel baru ditambahkan sebagai rekaman Markdown. Arsip ini sengaja kosong hingga catatan siap dipublikasikan.</p><span>STATUS: PENERIMAAN TERBUKA</span></article>
          </div>
        </section>

        <section className="contact-terminal" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="kicker"><span className="target" /> BUKA KANAL / 006</p>
            <h2 id="contact-title">BANGUN<br />REKAMAN KERJA<br />BERIKUTNYA.</h2>
            <p>Untuk percakapan seputar teknik lingkungan, HSSE, data, dan operasi lapangan.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={25} aria-hidden="true" /></a>
            <div className="contact-details"><span><Phone size={15} aria-hidden="true" /> {profile.phone}</span><span><MapPin size={15} aria-hidden="true" /> {profile.location}</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><Mail size={15} aria-hidden="true" /> PROFIL LINKEDIN</a></div>
          </div>
          <div className="contact-visual"><img src={contactImage} alt="Kenop kontrol industri di atas kertas teknis." /><p>TRANSMISI<br />SIAP</p></div>
        </section>
      </main>

      <footer className="footer-record">
        <span>© {new Date().getFullYear()} RIZKY BAKTI CATURRAGA</span>
        <span>TEKNIK LINGKUNGAN / HSSE</span>
        <a href="#top">KEMBALI KE AWAL ↑</a>
      </footer>
    </div>
  );
}
