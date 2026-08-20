/**
 * VISUAL SYSTEM: Swiss Industrial Print — unavailable paths are represented as an
 * explicit missing record rather than a generic error screen.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="missing-record"><p className="kicker">[ DOSIER / 404 ]</p><h1>REKAMAN<br />TIDAK DITEMUKAN.</h1><p>Rekaman portofolio yang diminta belum tersedia atau belum dipublikasikan.</p><Link className="hard-button hard-button-primary" href="/"><ArrowLeft size={18} aria-hidden="true" /> KEMBALI KE DOSIER</Link></main>;
}
