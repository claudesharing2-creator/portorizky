/**
 * PORTFOLIO CONTENT SOURCE
 * Update these structured records to change published information without editing UI components.
 * Facts are grounded in the supplied CV; do not add quantitative results unless documented.
 */

export type Project = {
  id: string;
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  shortDescription: string;
  problem: string;
  approach: string[];
  result: string;
  takeaway: string;
  tools: string[];
  tags: string[];
  visual: "water" | "air" | "field" | "facility";
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  status?: string;
  summary: string;
  responsibilities: string[];
};

export const profile = {
  name: "Rizky Bakti Caturraga",
  initials: "RBC",
  role: "Environmental Engineer · HSSE Specialist",
  statement: "I engineer systems where environment, data & operations meet.",
  summary:
    "Environmental Engineer focused on compliance, water and wastewater monitoring, environmental data, air quality, and HSSE in oil and gas, shipping, and field settings.",
  email: "rizkycaturraga@gmail.com",
  phone: "+62 822-4178-0966",
  linkedin: "https://linkedin.com/in/rizkycaturraga",
  location: "Samarinda, East Kalimantan, Indonesia",
  education: {
    degree: "B.Eng. Environmental Engineering",
    institution: "Universitas Mulawarman",
    period: "2020—2024",
    gpa: "3.90 / 4.00",
    distinction: "Cum laude",
    thesis:
      "AERMOD dispersion modelling of SO₂, NO₂, and CO from an incinerator stack at RSUD Inche Abdoel Moeis, Samarinda.",
  },
  languages: ["Indonesian — Native", "English — TOEFL 557"],
  cvUrl: "/manus-storage/CV-Rizky-Bakti-Caturraga_f11cc721.pdf",
};

export const navigation = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Archive", "#archive"],
  ["Contact", "#contact"],
] as const;

export const experience: Experience[] = [
  {
    period: "MAY 2025—PRESENT",
    role: "Environmental Data Engineer — Water & Wastewater",
    organization: "PT Pertamina Hulu Mahakam",
    location: "Balikpapan, East Kalimantan",
    status: "ACTIVE RECORD",
    summary:
      "Supports the management, validation, and reporting of environmental data for water and wastewater monitoring in oil and gas operations.",
    responsibilities: [
      "Supports technical-approval (Pertek) updates, regulatory gap analysis, and compliance with wastewater quality standards.",
      "Coordinates sampling schedules, validates external-laboratory Certificates of Analysis, and prepares periodic reports.",
      "Updates EVEREST, SIMPEL, and EMF data; maintains Request Form Analysis, authorization, and analysis documentation.",
      "Supports RKL-RPL review, PROPER and ESG Water documentation, and observes PROPER Compliance and ISO 14001 audit activity.",
    ],
  },
  {
    period: "FEB 2025—MAY 2025",
    role: "Environmental HSE",
    organization: "PT Pelayaran Duta Lintas Samudera",
    location: "Samarinda, East Kalimantan",
    summary:
      "Managed environmental documentation, reporting, monitoring coordination, and facility-planning support for a shipping company.",
    responsibilities: [
      "Prepared and updated environmental documents and routine reporting for relevant authorities.",
      "Contributed to planning for a hazardous-waste temporary storage facility and wastewater treatment installation.",
      "Conducted periodic environmental sampling for water, air, and soil and coordinated laboratory analysis.",
      "Coordinated annual environmental activity schedules across departments and operational compliance requirements.",
    ],
  },
  {
    period: "2024",
    role: "HSSE Internship — HSE/ENV",
    organization: "PT Pertamina Hulu Mahakam",
    location: "Balikpapan Base Office & SPS Site Senipah",
    summary:
      "Worked across office and field settings, supporting environmental documentation and a clean-water distribution troubleshooting effort.",
    responsibilities: [
      "Supported environmental-document updates and existing-data inventory at the base office.",
      "Assisted with updates to hazardous-waste temporary-storage technical detail documentation.",
      "Surveyed clean-water distribution conditions, reconstructed P&ID pipe routing, and sampled water at distribution points.",
      "Participated in routine safety talks and National K3 Month activity.",
    ],
  },
  {
    period: "JUN 2024—DEC 2024",
    role: "Air-Emission Dispersion Modelling",
    organization: "Kesling RSUD I. A. Moeis Samarinda",
    location: "Samarinda, East Kalimantan",
    summary:
      "Modelled SO₂, NO₂, and CO dispersion from an incinerator stack and examined emission-control options.",
    responsibilities: [
      "Configured AERMOD using meteorological data, source settings, and receptor grids.",
      "Conducted stack-emission and ambient-air sampling according to applicable SNI procedures.",
      "Analysed wet-scrubber technology as an emission-control option and prepared a technical report with dispersion mapping.",
    ],
  },
  {
    period: "2022—2023",
    role: "K3 & Environmental Physics Laboratory Assistant Coordinator",
    organization: "Environmental Technology Laboratory, Universitas Mulawarman",
    location: "Samarinda, East Kalimantan",
    summary:
      "Coordinated laboratory-assistant activity, practical safety, field-sampling guidance, and assessment feedback.",
    responsibilities: [
      "Scheduled K3 practical sessions and maintained readiness of laboratory equipment.",
      "Guided field sampling and the correct, safe use of environmental-physics equipment.",
      "Reviewed practical reports and coordinated feedback with instructors.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "environmental-compliance-water-wastewater",
    slug: "environmental-compliance-water-wastewater",
    index: "PROJECT / 001",
    title: "Environmental Compliance & Water / Wastewater Data",
    category: "ENVIRONMENTAL DATA",
    year: "2025—PRESENT",
    role: "Environmental Data Engineer — Water & Wastewater",
    organization: "PT Pertamina Hulu Mahakam",
    location: "Balikpapan, East Kalimantan",
    shortDescription:
      "A source-grounded record of water and wastewater monitoring, data validation, and compliance-support activities in oil and gas operations.",
    problem:
      "Environmental monitoring data, technical-approval requirements, regulatory updates, and reporting cycles require disciplined coordination and validation.",
    approach: [
      "Coordinate sampling schedules with operational teams and sites.",
      "Validate external-laboratory Certificates of Analysis and maintain analysis documentation.",
      "Update EVEREST, SIMPEL, and EMF records; support periodic reporting and regulatory gap analysis.",
      "Support PROPER, ESG Water, RKL-RPL, and audit-related environmental documentation.",
    ],
    result:
      "The CV documents operational support and documentation work; no quantitative project outcome is published here.",
    takeaway:
      "Demonstrates environmental-compliance fluency at the intersection of monitoring workflows, regulatory systems, and data stewardship.",
    tools: ["EVEREST", "SIMPEL", "EMF", "CoA Validation", "Environmental Reporting"],
    tags: ["WATER", "WASTEWATER", "COMPLIANCE", "DATA"],
    visual: "water",
  },
  {
    id: "aermod-air-dispersion",
    slug: "aermod-air-dispersion",
    index: "PROJECT / 002",
    title: "Air Emission Dispersion Modelling",
    category: "AIR QUALITY",
    year: "2024",
    role: "Environmental Engineering Project",
    organization: "Kesling RSUD I. A. Moeis Samarinda",
    location: "Samarinda, East Kalimantan",
    shortDescription:
      "AERMOD modelling of SO₂, NO₂, and CO emissions from an incinerator stack, paired with sampling and wet-scrubber analysis.",
    problem:
      "The project investigated the dispersion of incinerator emissions and considered appropriate pollution-control technology.",
    approach: [
      "Set up AERMOD with source configuration, meteorological input, and receptor-grid parameters.",
      "Performed source-emission stack sampling and ambient-air sampling in accordance with applicable SNI requirements.",
      "Analysed wet-scrubber technology and assembled dispersion maps, impact analysis, and technical recommendations.",
    ],
    result:
      "The documented output was a final technical report including dispersion maps, impact analysis, and pollution-control recommendations; no numerical result is published.",
    takeaway:
      "Demonstrates ability to connect atmospheric modelling, environmental sampling, compliance context, and engineering control selection.",
    tools: ["AERMOD", "Stack Sampling", "Ambient-Air Sampling", "Meteorological Data", "Receptor Grid"],
    tags: ["AERMOD", "AIR QUALITY", "DISPERSION", "MODELLING"],
    visual: "air",
  },
  {
    id: "clean-water-distribution",
    slug: "clean-water-distribution",
    index: "PROJECT / 003",
    title: "Clean-Water Distribution Troubleshooting",
    category: "FIELD ENGINEERING",
    year: "2024",
    role: "HSSE Intern — HSE/ENV",
    organization: "PT Pertamina Hulu Mahakam, SPS Site Senipah",
    location: "Senipah, East Kalimantan",
    shortDescription:
      "A field-based record of clean-water distribution surveying, P&ID reconstruction, water sampling, and quality analysis.",
    problem:
      "The operating site required investigation of its clean-water treatment and distribution system.",
    approach: [
      "Surveyed the existing field condition and mapped the distribution setting.",
      "Reconstructed the clean-water pipe-route P&ID.",
      "Collected clean-water samples at multiple distribution points and assessed quality and distribution patterns.",
    ],
    result:
      "The CV records the field investigation and analysis activities; no quantified performance result is presented.",
    takeaway:
      "Demonstrates practical field-engineering capability across water infrastructure, drawings, sampling, and operational observation.",
    tools: ["P&ID", "Water Sampling", "Distribution Analysis", "Field Survey"],
    tags: ["WATER", "FIELD", "P&ID", "SAMPLING"],
    visual: "field",
  },
  {
    id: "environmental-facility-engineering",
    slug: "environmental-facility-engineering",
    index: "PROJECT / 004",
    title: "Environmental Facility Engineering",
    category: "ENVIRONMENTAL FACILITY",
    year: "2025",
    role: "Environmental HSE",
    organization: "PT Pelayaran Duta Lintas Samudera",
    location: "Samarinda, East Kalimantan",
    shortDescription:
      "Planning support for a hazardous-waste temporary-storage facility and wastewater treatment installation alongside environmental documentation.",
    problem:
      "The company required environmentally compliant facilities and associated documentation to support its operations.",
    approach: [
      "Contributed to facility planning and environmental-document updates.",
      "Supported planning for TPS Limbah B3 and an IPAL / wastewater treatment installation.",
      "Coordinated recurring sampling and laboratory-analysis workflow for environmental parameters.",
    ],
    result:
      "The CV establishes the planning and documentation scope; no delivered construction or numerical outcome is published.",
    takeaway:
      "Demonstrates applied environmental-facility and documentation experience within operational compliance work.",
    tools: ["TPS Limbah B3", "IPAL / WWTP", "Environmental Documents", "Sampling Coordination"],
    tags: ["WWTP", "TPS LB3", "FACILITY", "COMPLIANCE"],
    visual: "facility",
  },
];

export const skillGroups = [
  { label: "AIR", skills: ["AERMOD", "ALOHA"] },
  { label: "GIS / MAPPING", skills: ["ArcGIS", "QGIS", "Surpac"] },
  { label: "ENGINEERING", skills: ["AutoCAD", "SketchUp 3D", "EPANET"] },
  { label: "SYSTEMS / DATA", skills: ["EVEREST", "SIMPEL", "EMF", "Python", "SQL"] },
  { label: "FIELD", skills: ["Water / Air / Waste Sampling", "Drone", "Total Station", "Theodolite", "pH & Turbidity Meter"] },
] as const;

export const certifications = [
  ["CERT / 001", "QHSE Management System", "ISO 9001 · 14001 · 45001 · 31000 · LOTO · HSE Plan", "2024"],
  ["CERT / 002", "Ahli K3 Muda Konstruksi & Construction Management", "Environmental and construction safety training", "2025"],
  ["CERT / 003", "Diklat Ahli K3 Muda Pertambangan", "Mining occupational-safety training", "2024"],
  ["CERT / 004", "Managing HSE Aspects in Drilling Operation", "Onshore and offshore drilling context", "2024"],
  ["CERT / 005", "K3 Industri Pengelolaan Air Limbah", "Industrial wastewater-management safety", "2023"],
  ["CERT / 006", "Environmental & Technical Upskilling", "Persetujuan Lingkungan · ArcGIS · SketchUp 3D", "2023—2025"],
] as const;

export const achievements = [
  ["3.90", "GPA / CUM LAUDE"],
  ["100", "JUNIOR-HIGH MATH NATIONAL EXAM"],
  ["9.78", "ELEMENTARY NATIONAL-EXAM AVERAGE"],
  ["30", "HIMATELI KPSDM MEMBERS LED"],
] as const;

export const recognition = [
  "Bakti BCA Scholarship recipient",
  "Kaltim Tuntas Scholarship recipient, 2022/2023",
  "1st Place, BCA Community Service Project",
  "3rd Place, East Kalimantan Regional Biology Olympiad, 2019",
  "Finalist, Astramatika XXII, 2014",
] as const;

export const leadership = [
  {
    role: "Organizational Supervisory Board",
    organization: "HIMATELI UNMUL",
    period: "2024",
    text: "Oversaw organizational operations, strategic direction, and adherence to internal rules.",
  },
  {
    role: "Head of KPSDM Department",
    organization: "HIMATELI UNMUL",
    period: "2022/2023",
    text: "Led 30 department members and organized technical training, industry seminars, environmental campaigns, and member-development programs.",
  },
  {
    role: "Internal Affairs Department Officer",
    organization: "IMTLI Regional V",
    period: "2021—2022",
    text: "Managed regional administrative coordination and helped deliver online technical training across Kalimantan.",
  },
] as const;

export const technicalEcosystem = [
  ["AIR", ["AERMOD", "ALOHA", "Sampling"]],
  ["WATER", ["Wastewater", "WWTP", "CoA Validation", "SIMPEL"]],
  ["GIS", ["ArcGIS", "QGIS", "Surpac"]],
  ["DATA", ["Python", "SQL", "EVEREST", "EMF"]],
  ["COMPLIANCE", ["Pertek", "RKL-RPL", "PROPER", "ISO 14001"]],
] as const;
