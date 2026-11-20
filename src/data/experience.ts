
export interface Experience {
  id: string;
  organization: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  website?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "gl-zoo",
    organization: "Gembira Loka Zoo",
    website: "https://gembiralokazoo.com/",
    location: "Yogyakarta, Special Region of Yogyakarta",
    role: "Internship",
    period: "September 2026 – November 2026",
    responsibilities: [
      "Performed animal husbandry across Aves, Petting Zoo, and Reptile sections, including enclosure cleaning, feeding, and animal display preparation.",
      "Delivered scheduled keeper talks to visitors and assisted with keeper examination records.",
      "Supported visitor services through animal feed sales, photography, photo printing, and visitor engagement.",
      "Prepared, portioned, and distributed animal diets, including feed preparation for bears, in the Nutrition Department."
    ]
  },
  {
    id: "sido-agung",
    organization: "Sido Agung Group",
    website: "https://sidoagunggroup.com/",
    location: "Magelang, Central Java",
    role: "MBKM Internship | Sido Agung Feed & Sido Agung Farm",
    period: "March 2026 – June 2026",
    responsibilities: [
      "Explored end-to-end feed manufacturing processes through multi-departmental exposure across production, QA/QC, and warehouse divisions.",
      "Applied laboratory and quality control techniques under industrial SOPs, including ELISA testing, phosphorus determination, CPO analysis, and crude protein analysis.",
      "Participated in closed-house broiler management involving approximately 22,500 birds, from DOC placement to harvest, including vaccination, grading, sexing, feeding, litter preparation, pen expansion, environmental monitoring, and harvesting operations.",
      "Conducted independent undergraduate research titled “Analisis Performans Produksi dan Efisiensi Konversi Pakan Ayam Broiler Berdasarkan Gradien Kualitas dan Distribusi Udara pada Kandang Closed House,” while coordinating field data collection and production parameter monitoring."
    ]
  },
  {
    id: "cp-indonesia",
    organization: "PT Charoen Pokphand Indonesia Tbk",
    website: "https://cp.co.id/",
    location: "Demak, Central Java",
    role: "Practical Work | Finished Goods Area",
    period: "December 2025 – January 2026",
    responsibilities: [
      "Applied Good Storage Practices (GSP) in finished goods warehouses by monitoring storage conditions, warehouse hygiene, product handling, and compliance with Standard Operating Procedures (SOPs).",
      "Observed and assisted in quality control of finished feed products, particularly during repacking and labeling, including inspection of packaging integrity, product condition, and compliance with company quality standards.",
      "Evaluated the implementation of First In, First Out (FIFO) and First Expired, First Out (FEFO) inventory systems.",
      "Prepared a practical work report titled “Evaluasi Penerapan Good Storage Practices (GSP) dengan Sistem FIFO dan FEFO pada Gudang Produk Jadi PT. Charoen Pokphand Indonesia (Agro-Feedmill) Demak, Jawa Tengah.”"
    ]
  },
  {
    id: "alfalfa-tropic",
    organization: "Alfalfa Tropic Study",
    location: "Faculty of Animal Science, Universitas Gadjah Mada",
    role: "Field Research Assistant",
    period: "October 2025 – November 2025",
    responsibilities: [
      "Assisted in field preparation, mulching (M1), and alfalfa planting using spacing treatments of 15 × 40 cm and 20 × 30 cm.",
      "Conducted routine crop maintenance, harvesting, and initial hay drying.",
      "Recorded morphological data, including plant height, leaf number, stem count, leaf width, and plant length, across different treatments.",
      "Ensured research protocol compliance through regular coordination with the research supervisor."
    ]
  },
  {
    id: "ciomas-adisatwa",
    organization: "RPA PT Ciomas Adisatwa Unit Yogyakarta",
    website: "https://www.japfacomfeed.co.id/",
    location: "Sleman Regency, Yogyakarta",
    role: "Internship",
    period: "July 2025 – August 2025",
    responsibilities: [
      "Participated in production stages across dirty and clean areas, including live bird receiving, grading, rehanging, by-product packing, carcass chilling, cut-up, marination, boneless processing, weighing, and packaging.",
      "Observed and recorded sanitation activities, monitored drum chiller operations, and documented corrective actions for Critical Control Point (CCP) deviations, including metal detector findings.",
      "Interviewed personnel from production, quality assurance, and other departments to understand operational workflows.",
      "Prepared an internship report titled “Implementasi Critical Control Point (CCP) dalam Proses Produksi Ayam Pedaging di RPA PT. Ciomas Adisatwa Unit Yogyakarta.”"
    ]
  },
  {
    id: "japfa-ugm",
    organization: "Teaching Farm Broiler",
    website: "https://piat.ugm.ac.id/",
    location: "Sleman Regency, Yogyakarta",
    role: "Internship | Japfa × Universitas Gadjah Mada",
    period: "August 2025",
    responsibilities: [
      "Assisted in daily broiler farm management, including feed preparation, cleaning and sanitizing automatic and manual bell drinkers, and refilling water supplies.",
      "Performed grading and sexing to separate male and female broilers.",
      "Participated in routine pen expansion activities every two days.",
      "Engaged with farm management and operators to gather operational insights."
    ]
  },
  {
    id: "freelance-autocad",
    organization: "Freelance",
    location: "Remote",
    role: "AutoCAD Designer",
    period: "December 2023 – January 2024",
    responsibilities: [
      "Designed slaughterhouse layouts using AutoCAD for clients on a paid basis.",
      "Applied fundamental engineering principles to develop functional and practical blueprints."
    ]
  }
];
