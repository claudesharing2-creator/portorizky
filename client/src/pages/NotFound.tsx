/**
 * VISUAL SYSTEM: Swiss Industrial Print — unavailable paths are represented as an
 * explicit missing record rather than a generic error screen.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="missing-record"><p className="kicker">[ DOSSIER / 404 ]</p><h1>RECORD<br />NOT FOUND.</h1><p>The requested portfolio record is unavailable or has not yet been published.</p><Link className="hard-button hard-button-primary" href="/"><ArrowLeft size={18} aria-hidden="true" /> RETURN TO DOSSIER</Link></main>;
}
