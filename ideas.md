# Design Exploration — Rizky Bakti Caturraga CV

## Three Candidate Directions

### Theme Name: Swiss Industrial Print
**Very Brief Intro:** A paper-white personnel dossier constructed as a field manual: huge typographic blocks, disciplined red markers, and black structural rules turn career history into an editorial machine. It is direct, precise, and confidently human.

**Probability:** 0.047

### Theme Name: Tactical Telemetry CRT
**Very Brief Intro:** A dark classified-record terminal that treats every skill and role as system output. Dense mono readouts and scanlines create an aerospace operations-room tone.

**Probability:** 0.083

### Theme Name: Concrete Atelier
**Very Brief Intro:** A material-led portfolio inspired by workshop labels, stencilled type, and raw concrete signage. The page reads as an exposed studio wall rather than a conventional profile.

**Probability:** 0.029

## Chosen Direction: Swiss Industrial Print

### Design Movement
**Swiss Industrial Print** combines the discipline of the International Typographic Style with heavy-equipment manuals, institutional personnel forms, and visual language from 1960s corporate identity programs. The site remains in a light substrate mode throughout.

### Core Principles
1. **Information is architecture.** Every CV fact is anchored to a defined grid cell and marked by its relationship to the next fact.
2. **Scale creates hierarchy.** Oversized uppercase headings establish landmarks; small monospaced metadata provides evidence and operational detail.
3. **No decorative softness.** Corners are square, dividers are structural, and the sole accent is used only to guide urgency and navigation.
4. **Analog physicality.** Restrained paper grain, registration marks, and dot-screen imagery suggest a printed dossier rather than an abstract UI.

### Color Philosophy
Matte documentation paper (`#F4F4F0`) is the permanent substrate: legible, archival, and tactile. Carbon ink (`#101010`) carries all primary content. Aviation red (`#E61919`) is an intentional interruption—not decoration—used for the identity mark, action links, section coordinates, and one active status signal. No gradients, soft shadows, or additional accent colors appear.

### Layout Paradigm
The experience is arranged as a **vertical dossier conveyor** rather than a centered landing page. A compact masthead locks to the top. Each succeeding record block has a fixed left coordinate rail and an asymmetric information field: hero identity, profile statement, experience ledger, competency index, and contact terminal. On large screens the red left rail remains visibly continuous; on mobile it becomes a stack of stamped document labels.

### Signature Elements
- **Registration geometry:** red crosshair intersections, corner crop marks, and offset unit numbers.
- **Mechanical rules:** one-pixel black lines with occasional heavy red dividers that structure the page.
- **Dossier coding:** compact bracketed labels, dates, and data IDs in monospaced uppercase text.

### Interaction Philosophy
Links respond like physical index tabs: the red fill snaps in, text inverts, and the action shifts by two pixels. Navigation is an explicit jump list rather than a hidden or decorative control. The user should feel they are operating a carefully assembled document.

### Animation
Motion is scarce and decisive. On first load, the hero title and primary dossier sections rise by 8px while fading in across a short stagger. Hover states use a 150–180ms high-contrast color swap and 2px translation. A reduced-motion preference removes all entrance and hover translations. There are no ambient loops, glows, or floating effects.

### Typography System
**Archivo Black** supplies macro typography: uppercase, tight-tracked, and compressed in leading. **IBM Plex Mono** carries navigation, metadata, labels, dates, technologies, and interface controls in deliberate uppercase. Body copy uses **IBM Plex Sans** at a generous reading size. Headings scale via `clamp()`; metadata remains fixed and compact.

### Brand Essence
**A precisely indexed professional dossier for collaborators who value clear systems, accountable craft, and durable digital work.**

Personality: **exact, industrious, unvarnished.**

### Brand Voice
Headlines are declarative, short, and structural. CTAs use operational verbs rather than marketing language. Microcopy names the information being revealed, never adds filler.

> Example headline: `BUILDING SYSTEMS / NOT NOISE.`

> Example CTA: `OPEN CONTACT CHANNEL →`

### Wordmark & Logo
The mark is a bold red registration target interrupted by a black diagonal output bar, a graphic shorthand for a finished, routed process. It is always used without text; the wordmark is constructed through macro typography rather than a default font treatment.

### Signature Brand Color
**Aviation Red — `#E61919`**

## Style Decisions

- Macro typography can be oversized and poster-like, but the candidate’s full name and the meaning of primary section labels remain legible at first glance.
- The red registration mark is the masthead’s primary identity device; its accompanying identifier reads as small dossier metadata rather than a conventional wordmark.
- Red geometry must indicate navigation, status, coordinates, verification, or an active action. It is never ambient decoration.

## Keputusan Revisi — Environmental Brutalism

Sistem visual direvisi menjadi **Environmental Brutalism** dengan bahasa Indonesia sebagai bahasa antarmuka. Struktur Swiss Industrial Print, grid yang tegas, sudut siku, data monospasi, dan skala tipografi ekstrem tetap dipertahankan; namun tampilannya sekarang terasa seperti buku catatan lapangan lingkungan dan dokumentasi operasional.

Palet bumi menggunakan **Kertas Aluvial `#EAE4D6`** sebagai substrat, **Arang Hutan `#182018`** sebagai tinta utama, **Hijau Lumut `#52623E`** sebagai penanda sistem dan navigasi aktif, **Tanah Liat `#A95B37`** sebagai aksen tindakan dan peringatan, serta **Oker Pengukuran `#B88A2B`** hanya untuk indikator teknis yang terbatas. Warna ini digunakan secara fungsional, bukan dekoratif.

Motif visual mengambil bentuk kontur tanah, jalur air, titik pengambilan sampel, kisi peta, dan jejak peralatan lapangan. Citra tetap diproses sebagai arsip cetak kasar dengan rona tanah, sehingga tidak menampilkan hijau korporat yang generik. Seluruh headline, label, tombol, dan pesan status harus singkat, teknis, serta terdengar seperti catatan lapangan yang terindeks.
