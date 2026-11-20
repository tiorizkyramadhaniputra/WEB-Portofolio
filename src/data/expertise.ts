export interface ExpertiseArea {
  id: string;
  title: string;
  skills: string[];
}

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: "animal-science",
    title: "Animal Science & Livestock",
    skills: [
      "Broiler Management",
      "Poultry Production",
      "Animal Nutrition",
      "Feed Technology",
      "Farm Management",
      "Animal Welfare",
      "Biosecurity"
    ]
  },
  {
    id: "food-industry",
    title: "Food Industry & Quality",
    skills: [
      "Poultry Processing",
      "Food Safety",
      "Quality Assurance",
      "Good Storage Practices",
      "FIFO and FEFO",
      "Critical Control Points"
    ]
  },
  {
    id: "research-data",
    title: "Research & Data",
    skills: [
      "Applied Research",
      "Environmental Monitoring",
      "Production Performance Evaluation",
      "Data Analysis",
      "BigQuery",
      "Looker Studio"
    ]
  },
  {
    id: "tech-automation",
    title: "Technology & Automation",
    skills: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "React",
      "SQL",
      "Golang",
      "Arduino",
      "n8n",
      "AutoCAD",
      "SketchUp"
    ]
  },
  {
    id: "sustainability",
    title: "Sustainability & Community",
    skills: [
      "Organic Waste Utilization",
      "BSF Cultivation",
      "Environmental Initiatives",
      "Community Development",
      "Collaborative Projects"
    ]
  }
];
