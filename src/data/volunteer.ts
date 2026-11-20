export interface VolunteerActivity {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  duration?: string;
  description: string;
  contributions?: {
    title: string;
    details: string;
  }[];
  reflection?: string;
  relatedProjectId?: string;
  isFeatured?: boolean;
}

export const VOLUNTEER_ACTIVITIES: VolunteerActivity[] = [
  {
    id: "kkn-ugm-2026",
    title: "KKN-PPM UGM Period II 2026 — Swara Cangkringan (Unit YO021)",
    organization: "Universitas Gadjah Mada",
    role: "Student Volunteer",
    period: "July 2026 – August 2026",
    duration: "50 Days",
    location: "Karang Pakis and Balangan, Cangkringan, Sleman, Yogyakarta",
    description: "Contributed to community-based environmental, educational, and social initiatives through collaboration with local residents and youth groups.",
    contributions: [
      {
        title: "ECO ENZYME EDUCATION",
        details: "Facilitated workshops with PKK Pesona Bunda in Dusun Balangan covering production processes and environmental benefits."
      },
      {
        title: "COMMUNITY EDUCATION",
        details: "Supported educational activities at TPA Masjid Al-Huda, teaching Iqro and Islamic character-based topics."
      },
      {
        title: "BSF MAGGOT CULTIVATION",
        details: "Reactivated an existing BSF cultivation facility with local youth to process organic waste into a sustainable cycle."
      }
    ],
    reflection: "Meaningful community development involves listening, adapting, and supporting initiatives that can continue beyond the program duration.",
    relatedProjectId: "bsf-maggot",
    isFeatured: true
  },
  {
    id: "gembala-1445h",
    title: "Gerakan Qurban Kembali ke Desa (GEMBALA) 1445H",
    organization: "KMFPT UGM",
    role: "Logistics and Supplies Volunteer",
    period: "June 2024",
    location: "Ngroto Village, Kulon Progo",
    duration: "3 Days",
    description: "Supported a community livestock-based sacrificial program through field assistance and logistics coordination."
  },
  {
    id: "eco-volunteer-2025",
    title: "Eco Volunteer Day 2025",
    organization: "DLTK-PYC UGM x Eco Enzyme Sleman",
    role: "Environmental Volunteer",
    period: "December 2025",
    description: "Assisted with organic waste sorting and hands-on eco enzyme workshops for sustainable waste management."
  },
  {
    id: "mangrove-restoration",
    title: "Mangrove Restoration Volunteer",
    organization: "UGM SIGMA x BPPM Gallusia",
    role: "Environmental Volunteer",
    period: "October 2025",
    location: "Kulon Progo, Yogyakarta",
    description: "Participated in mangrove seedling preparation and planting to support coastal ecosystem protection."
  },
  {
    id: "gembala-committee",
    title: "Gembala Committee — Equipment & Logistics",
    organization: "KMFPT UGM",
    role: "Committee Member",
    period: "May 2024 – June 2024",
    description: "Managed logistics procurement and distribution for a community Qurban program in Ngroto Village."
  },
  {
    id: "action-plan-herman",
    title: "Action Plan Project — Herman Yohanes 13",
    organization: "Community Project",
    role: "Project Leader",
    period: "August 2023",
    description: "Led an action plan project involving childhood education, waste recycling, and village beautification."
  }
];
