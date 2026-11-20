export interface Education {
  institution: string;
  degree: string;
  faculty: string;
  period: string;
  gpa: string;
  scholarship?: string;
  relevantAreas: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  organization?: string;
  role?: string;
  description?: string;
  team?: string[];
}

export const EDUCATION_DATA: Education = {
  institution: "Universitas Gadjah Mada",
  degree: "Bachelor of Animal Science",
  faculty: "Faculty of Animal Science",
  period: "2023 – 2027",
  gpa: "3.59/4.00",
  scholarship: "Charoen Pokphand Foundation Indonesian Scholarship",
  relevantAreas: [
    "Meat Science and Technology",
    "Animal Feed Nutrition",
    "Poultry Livestock Industry",
    "Slaughter Animal Industry",
    "Dairy Livestock Industry",
    "Feed Technology and Fabrication",
    "Livestock Industry Waste Management"
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ais-itb-2025",
    title: "First Runner Up & Best Paper",
    subtitle: "AIS ITB 2025"
  },
  {
    id: "isif-iysa-silver",
    title: "Silver Medal — ISIF/IYSA",
    description: "Lithium Iron Phosphate cathode innovation using fertilizer industry by-products."
  },
  {
    id: "innection-2026",
    title: "4th Place — INNECTION 2026",
    organization: "UIN Syarif Hidayatullah Jakarta",
    role: "Team Leader",
    team: ["Hasbi Ash Shiddiqi", "Rafi Afnan Atallah"]
  },
  {
    id: "integrity-ambassador",
    title: "4th Place — Central Java Provincial Integrity Ambassador",
    description: "Advocating for the nine integrity values in public service and youth leadership."
  },
  {
    id: "cp-scholarship",
    title: "Charoen Pokphand Foundation Indonesian Scholarship",
    subtitle: "Prestigious Academic Award"
  }
];
