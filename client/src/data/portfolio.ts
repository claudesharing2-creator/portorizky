/**
 * SUMBER KONTEN PORTOFOLIO
 * Ubah rekaman terstruktur ini untuk mengubah informasi publik tanpa menyentuh komponen UI.
 * Seluruh fakta bersumber dari CV yang diberikan; jangan menambah hasil kuantitatif yang tidak terdokumentasi.
 */

export type Project = {
  id: string; slug: string; index: string; title: string; category: string; year: string;
  role: string; organization: string; location: string; shortDescription: string;
  problem: string; approach: string[]; result: string; takeaway: string;
  tools: string[]; tags: string[]; visual: "water" | "air" | "field" | "facility";
};

export type Experience = {
  period: string; role: string; organization: string; location: string; status?: string;
  summary: string; responsibilities: string[];
};

export const profile = {
  name: "Rizky Bakti Caturraga",
  initials: "RBC",
  role: "Environmental Engineer · HSSE Specialist",
  statement: "Saya membangun sistem di titik temu lingkungan, data, dan operasi.",
  summary: "Insinyur Lingkungan dengan fokus pada kepatuhan, pemantauan air dan air limbah, data lingkungan, kualitas udara, serta HSSE dalam konteks migas, pelayaran, dan lapangan.",
  email: "rizkycaturraga@gmail.com",
  phone: "+62 822-4178-0966",
  linkedin: "https://linkedin.com/in/rizkycaturraga",
  location: "Samarinda, Kalimantan Timur, Indonesia",
  education: {
    degree: "S1 Teknik Lingkungan",
    institution: "Universitas Mulawarman",
    period: "2020—2024",
    gpa: "3,90 / 4,00",
    distinction: "Cum laude",
    thesis: "Pemodelan dispersi SO₂, NO₂, dan CO dengan AERMOD pada cerobong insinerator RSUD Inche Abdoel Moeis, Samarinda.",
  },
  languages: ["Indonesia — Penutur asli", "Inggris — TOEFL 557"],
  cvUrl: `${import.meta.env.BASE_URL}assets/cv-rizky-bakti-caturraga.pdf`,
};

export const navigation = [["Tentang", "#about"], ["Pekerjaan", "#work"], ["Keahlian", "#skills"], ["Arsip", "#archive"], ["Kontak", "#contact"]] as const;

export const experience: Experience[] = [
  {
    period: "MEI 2025—SEKARANG", role: "Environmental Data Engineer — Water & Wastewater", organization: "PT Pertamina Hulu Mahakam", location: "Balikpapan, Kalimantan Timur", status: "REKAMAN AKTIF",
    summary: "Mendukung pengelolaan, validasi, dan pelaporan data lingkungan untuk pemantauan air serta air limbah di operasi minyak dan gas.",
    responsibilities: [
      "Mendukung penyusunan dan penyesuaian Persetujuan Teknis, analisis kesenjangan regulasi, serta kepatuhan terhadap baku mutu air limbah.",
      "Mengoordinasikan jadwal sampling, memvalidasi Certificate of Analysis dari laboratorium eksternal, dan menyusun pelaporan berkala.",
      "Memperbarui data EVEREST, SIMPEL, dan EMF; menjaga dokumen Request Form Analysis, otorisasi, dan Surat Analisa.",
      "Mendukung telaah RKL-RPL, dokumen PROPER dan ESG Water, serta observasi audit PROPER Compliance dan ISO 14001.",
    ],
  },
  {
    period: "FEB 2025—MEI 2025", role: "HSE Lingkungan", organization: "PT Pelayaran Duta Lintas Samudera", location: "Samarinda, Kalimantan Timur",
    summary: "Menangani dokumen, pelaporan, koordinasi pemantauan, dan dukungan perencanaan fasilitas lingkungan untuk perusahaan pelayaran.",
    responsibilities: [
      "Menyusun dan memperbarui dokumen lingkungan serta pelaporan rutin kepada instansi terkait.",
      "Terlibat dalam perencanaan TPS Limbah B3 dan instalasi pengolahan air limbah.",
      "Melaksanakan sampling berkala air, udara, serta tanah dan berkoordinasi dengan laboratorium.",
      "Mengoordinasikan jadwal kegiatan lingkungan tahunan lintas departemen dan kepatuhan operasional.",
    ],
  },
  {
    period: "2024", role: "Magang HSSE — HSE/ENV", organization: "PT Pertamina Hulu Mahakam", location: "Balikpapan Base Office & SPS Site Senipah",
    summary: "Bekerja lintas kantor dan lapangan untuk mendukung dokumen lingkungan serta penelusuran gangguan distribusi air bersih.",
    responsibilities: [
      "Mendukung pembaruan dokumen lingkungan dan inventarisasi data existing di base office.",
      "Membantu pembaruan rincian teknis TPS Limbah B3 sesuai regulasi.",
      "Mensurvei kondisi distribusi air bersih, merekonstruksi jalur P&ID, dan melakukan sampling pada titik distribusi.",
      "Berpartisipasi dalam safety talk rutin dan kegiatan Bulan K3 Nasional.",
    ],
  },
  {
    period: "JUN 2024—DES 2024", role: "Pemodelan Dispersi Emisi Udara", organization: "Kesling RSUD I. A. Moeis Samarinda", location: "Samarinda, Kalimantan Timur",
    summary: "Memodelkan dispersi SO₂, NO₂, dan CO dari cerobong insinerator serta mengkaji opsi pengendalian emisi.",
    responsibilities: [
      "Menyiapkan AERMOD dengan data meteorologi, konfigurasi sumber, dan grid reseptor.",
      "Melakukan stack sampling emisi sumber dan sampling udara ambien sesuai SNI yang berlaku.",
      "Mengkaji teknologi wet scrubber serta menyiapkan laporan teknis dengan peta sebaran dispersi.",
    ],
  },
  {
    period: "2022—2023", role: "Koordinator Asisten Lab. K3 & Fisika Lingkungan", organization: "Laboratorium Teknologi Lingkungan, Universitas Mulawarman", location: "Samarinda, Kalimantan Timur",
    summary: "Mengoordinasikan aktivitas asisten laboratorium, keselamatan praktikum, bimbingan sampling lapangan, dan umpan balik penilaian.",
    responsibilities: [
      "Menyusun jadwal praktikum K3 dan menjaga kesiapan peralatan laboratorium.",
      "Membimbing sampling lapangan dan penggunaan peralatan fisika lingkungan yang benar dan aman.",
      "Menilai laporan praktikum dan berkoordinasi dengan dosen untuk perbaikan umpan balik.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "environmental-compliance-water-wastewater", slug: "environmental-compliance-water-wastewater", index: "PROYEK / 001", title: "Kepatuhan Lingkungan & Data Air / Air Limbah", category: "DATA LINGKUNGAN", year: "2025—SEKARANG", role: "Environmental Data Engineer — Water & Wastewater", organization: "PT Pertamina Hulu Mahakam", location: "Balikpapan, Kalimantan Timur", visual: "water",
    shortDescription: "Rekaman berbasis CV mengenai pemantauan air dan air limbah, validasi data, serta dukungan kepatuhan di operasi migas.",
    problem: "Data pemantauan, persyaratan Persetujuan Teknis, pembaruan regulasi, dan siklus pelaporan membutuhkan koordinasi serta validasi yang disiplin.",
    approach: ["Mengoordinasikan jadwal sampling bersama tim dan site operasi.", "Memvalidasi Certificate of Analysis dari laboratorium eksternal serta menjaga dokumen analisa.", "Memperbarui rekaman EVEREST, SIMPEL, dan EMF; mendukung pelaporan serta analisis kesenjangan regulasi.", "Mendukung dokumen PROPER, ESG Water, RKL-RPL, dan kebutuhan audit lingkungan."],
    result: "CV mendokumentasikan pekerjaan dukungan operasional dan dokumentasi; tidak ada hasil kuantitatif proyek yang dipublikasikan di sini.",
    takeaway: "Menunjukkan pemahaman kepatuhan lingkungan pada pertemuan antara alur pemantauan, sistem regulasi, dan pengelolaan data.",
    tools: ["EVEREST", "SIMPEL", "EMF", "Validasi CoA", "Pelaporan Lingkungan"], tags: ["AIR", "AIR LIMBAH", "KEPATUHAN", "DATA"],
  },
  {
    id: "aermod-air-dispersion", slug: "aermod-air-dispersion", index: "PROYEK / 002", title: "Pemodelan Dispersi Emisi Udara", category: "KUALITAS UDARA", year: "2024", role: "Proyek Teknik Lingkungan", organization: "Kesling RSUD I. A. Moeis Samarinda", location: "Samarinda, Kalimantan Timur", visual: "air",
    shortDescription: "Pemodelan AERMOD untuk emisi SO₂, NO₂, dan CO dari cerobong insinerator, dipadukan dengan sampling dan kajian wet scrubber.",
    problem: "Proyek ini menelaah sebaran emisi insinerator dan mempertimbangkan teknologi pengendalian pencemaran yang sesuai.",
    approach: ["Menyiapkan AERMOD dengan konfigurasi sumber, data meteorologi, dan parameter grid reseptor.", "Melakukan stack sampling emisi sumber dan sampling udara ambien sesuai kebutuhan SNI.", "Mengkaji teknologi wet scrubber dan menyusun peta dispersi, analisis dampak, serta rekomendasi teknis."],
    result: "Keluaran yang terdokumentasi adalah laporan teknis akhir berisi peta dispersi, analisis dampak, dan rekomendasi pengendalian; tidak ada angka hasil yang dipublikasikan.",
    takeaway: "Menunjukkan kemampuan menghubungkan pemodelan atmosfer, sampling lingkungan, konteks kepatuhan, dan pemilihan pengendalian rekayasa.",
    tools: ["AERMOD", "Stack Sampling", "Sampling Udara Ambien", "Data Meteorologi", "Grid Reseptor"], tags: ["AERMOD", "KUALITAS UDARA", "DISPERSI", "PEMODELAN"],
  },
  {
    id: "clean-water-distribution", slug: "clean-water-distribution", index: "PROYEK / 003", title: "Penelusuran Distribusi Air Bersih", category: "REKAYASA LAPANGAN", year: "2024", role: "Magang HSSE — HSE/ENV", organization: "PT Pertamina Hulu Mahakam, SPS Site Senipah", location: "Senipah, Kalimantan Timur", visual: "field",
    shortDescription: "Rekaman berbasis lapangan mengenai survei distribusi air bersih, rekonstruksi P&ID, sampling, dan analisis kualitas air.",
    problem: "Site operasi membutuhkan investigasi terhadap sistem pengolahan serta distribusi air bersih yang berjalan.",
    approach: ["Melakukan survei kondisi existing di lapangan dan pemetaan konteks distribusi.", "Merekonstruksi P&ID jalur perpipaan air bersih.", "Mengambil sampel air pada berbagai titik distribusi serta menganalisis kualitas dan pola distribusi."],
    result: "CV mencatat aktivitas investigasi serta analisis lapangan; tidak ada hasil kinerja kuantitatif yang disajikan.",
    takeaway: "Menunjukkan kemampuan rekayasa lapangan yang praktis pada infrastruktur air, gambar teknis, sampling, dan observasi operasi.",
    tools: ["P&ID", "Sampling Air", "Analisis Distribusi", "Survei Lapangan"], tags: ["AIR", "LAPANGAN", "P&ID", "SAMPLING"],
  },
  {
    id: "environmental-facility-engineering", slug: "environmental-facility-engineering", index: "PROYEK / 004", title: "Rekayasa Fasilitas Lingkungan", category: "FASILITAS LINGKUNGAN", year: "2025", role: "HSE Lingkungan", organization: "PT Pelayaran Duta Lintas Samudera", location: "Samarinda, Kalimantan Timur", visual: "facility",
    shortDescription: "Dukungan perencanaan TPS Limbah B3 dan instalasi pengolahan air limbah yang disertai dokumentasi lingkungan.",
    problem: "Perusahaan membutuhkan fasilitas dan dokumen lingkungan yang sesuai untuk mendukung operasi.",
    approach: ["Berpartisipasi dalam perencanaan fasilitas serta pembaruan dokumen lingkungan.", "Mendukung perencanaan TPS Limbah B3 dan IPAL.", "Mengoordinasikan alur sampling berkala dan analisis laboratorium untuk parameter lingkungan."],
    result: "CV menegaskan lingkup perencanaan dan dokumentasi; tidak ada hasil konstruksi maupun angka hasil yang dipublikasikan.",
    takeaway: "Menunjukkan pengalaman rekayasa fasilitas lingkungan dan dokumentasi yang terapan dalam konteks kepatuhan operasional.",
    tools: ["TPS Limbah B3", "IPAL", "Dokumen Lingkungan", "Koordinasi Sampling"], tags: ["IPAL", "TPS LB3", "FASILITAS", "KEPATUHAN"],
  },
];

export const skillGroups = [
  { label: "UDARA", skills: ["AERMOD", "ALOHA"] },
  { label: "GIS / PEMETAAN", skills: ["ArcGIS", "QGIS", "Surpac"] },
  { label: "REKAYASA", skills: ["AutoCAD", "SketchUp 3D", "EPANET"] },
  { label: "SISTEM / DATA", skills: ["EVEREST", "SIMPEL", "EMF", "Python", "SQL"] },
  { label: "LAPANGAN", skills: ["Sampling Air / Udara / Limbah", "Drone", "Total Station", "Theodolite", "pH & Turbidity Meter"] },
] as const;

export const certifications = [
  ["SERT / 001", "QHSE Management System", "ISO 9001 · 14001 · 45001 · 31000 · LOTO · HSE Plan", "2024"],
  ["SERT / 002", "Ahli Muda K3 Konstruksi & Manajemen Konstruksi", "Pelatihan keselamatan lingkungan dan konstruksi", "2025"],
  ["SERT / 003", "Diklat Ahli K3 Muda Pertambangan", "Pelatihan keselamatan kerja pertambangan", "2024"],
  ["SERT / 004", "Managing HSE Aspects in Drilling Operation", "Konteks pengeboran onshore dan offshore", "2024"],
  ["SERT / 005", "K3 Industri Pengelolaan Air Limbah", "Keselamatan pengelolaan air limbah industri", "2023"],
  ["SERT / 006", "Upskilling Lingkungan & Teknis", "Persetujuan Lingkungan · ArcGIS · SketchUp 3D", "2023—2025"],
] as const;

export const achievements = [["3,90", "IPK / CUM LAUDE"], ["100", "NILAI UN MATEMATIKA SMP"], ["9,78", "RATA-RATA UN SEKOLAH DASAR"], ["30", "ANGGOTA KPSDM HIMATELI DIPIMPIN"]] as const;
export const recognition = ["Penerima Beasiswa Bakti BCA", "Penerima Beasiswa Kaltim Tuntas, 2022/2023", "Juara 1 Project Pengabdian Masyarakat BCA", "Juara 3 Olimpiade Biologi Regional Kalimantan Timur, 2019", "Finalis Astramatika XXII, 2014"] as const;
export const leadership = [
  { role: "Dewan Pengawas Organisasi", organization: "HIMATELI UNMUL", period: "2024", text: "Mengawasi operasi organisasi, arah strategis, dan kepatuhan terhadap aturan internal." },
  { role: "Ketua Departemen KPSDM", organization: "HIMATELI UNMUL", period: "2022/2023", text: "Memimpin 30 anggota dan menyelenggarakan pelatihan teknis, seminar industri, kampanye lingkungan, serta program pengembangan anggota." },
  { role: "Pengurus Departemen Dalam Negeri", organization: "IMTLI Regional V", period: "2021—2022", text: "Mengelola koordinasi administrasi regional dan mendukung pelatihan teknis daring lintas Kalimantan." },
] as const;
export const technicalEcosystem = [
  ["UDARA", ["AERMOD", "ALOHA", "Sampling"]], ["AIR", ["Air Limbah", "IPAL", "Validasi CoA", "SIMPEL"]], ["GIS", ["ArcGIS", "QGIS", "Surpac"]], ["DATA", ["Python", "SQL", "EVEREST", "EMF"]], ["KEPATUHAN", ["Pertek", "RKL-RPL", "PROPER", "ISO 14001"]],
] as const;
