
import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  HardHat,
  Database,
  Lightbulb,
  Code2,
  Sparkles,
} from 'lucide-react';

const PROFESSIONAL_DEVELOPMENT = [
  {
    title: 'Food Safety Management',
    provider: 'Food Safety Training',
    description:
      'GMP, HACCP principles, ISO 22000, Food Defense, Halal Assurance System, and Critical Control Points.',
    icon: ShieldCheck,
  },
  {
    title: 'Industrial Occupational Safety',
    provider: 'K3 Industri — Intermediate Series #2 & Work System Design Series #1',
    description:
      'Workplace hazard identification, accident prevention, ergonomics, RULA assessment, and hierarchy of hazard controls.',
    icon: HardHat,
  },
  {
    title: 'Data Management & Analysis',
    provider: 'Technical Competencies',
    description:
      'Spreadsheet management, Microsoft Office, SPSS, and data organization for research and operational reporting.',
    icon: Database,
  },
  {
    title: 'Fullstack Java Developer',
    provider: 'BPSMDP Komdigi Yogyakarta · 2025',
    description:
      'Java Fundamentals, OOP, Spring Boot, JPA/Hibernate, MVC, Thymeleaf, Git, and API Integration.',
    icon: Code2,
  },
  {
    title: 'Creative Problem Solving',
    provider: 'Talent Class 20 · Ministry of Manpower × TalentHub',
    description:
      'Design Thinking, problem framing, ideation, prototyping, and testing.',
    icon: Lightbulb,
  },
  {
    title: 'Generative AI & Prompt Engineering',
    provider: 'Berinovasi dengan AI',
    description:
      'LLM fundamentals, effective prompting techniques, context interpretation, and Responsible AI.',
    icon: Sparkles,
  },
];

const LOGOS = [
  { name: 'AutoCAD', src: '/logos/Autocad.svg' },
  { name: 'Canva', src: '/logos/Canva.svg' },
  { name: 'CapCut', src: '/logos/CapCut.svg' },
  { name: 'OpenAI', src: '/logos/ChatGPT.svg' },
  { name: 'Broiler Management', src: '/logos/Chicken.svg' },
  { name: 'CSS', src: '/logos/CSS.svg' },
  { name: 'HTML', src: '/logos/HTML.svg' },
  { name: 'NotebookLM', src: '/logos/Notebooklm.svg' },
  { name: 'Notion', src: '/logos/Notion.svg' },
  { name: 'SketchUp', src: '/logos/Sketchup.svg' },
  { name: 'SPSS', src: '/logos/spss.svg' },
  { name: 'VSCode', src: '/logos/VsCode.svg' },
];

const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="pt-20 md:pt-28 pb-8 md:pb-10 bg-brand-gray-light text-black"
    >
      <div className="container-custom">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex items-start justify-between
            border-b border-black
            pb-6 md:pb-1.5
            mb-12 md:mb-5
          "
        >
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-display font-bold tracking-tight
          ">
            Education 
          </h2>

          <span className="
            text-lg md:text-xl font-inter font-bold
            text-black mt-2 shrink-0
          ">
            ( 01 )
          </span>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-[0.95fr_1.05fr]
          gap-12 lg:gap-16
          items-stretch
        ">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={40} />
                <h3 className="
                  text-sm font-inter uppercase tracking-[0.18em]
                ">
                  Education
                </h3>
              </div>

              <div className="
                relative border-l border-black/20
                pl-6 ml-1
              ">
                <div className="
                  absolute -left-[5px] top-1
                  w-2.5 h-2.5 rounded-full bg-black
                " />

                <h4 className="
                  text-xl md:text-2xl font-semibold leading-snug
                ">
                  Universitas Gadjah Mada
                </h4>

                <p className="text-sm md:text-base mt-1 text-black">
                  Bachelor of Animal Science
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="
                    text-xs font-semibold text-black
                    bg-black/5 border border-black/10
                    px-3 py-1.5 rounded-full
                  ">
                    GPA 3.59 / 4.00
                  </span>

                  <span className="text-xs text-black/50">
                    Expected 2027
                  </span>
                </div>

                <div className="mt-3">
                  <p className="
                    text-[12px] uppercase tracking-[0.16em]
                    text-black/50 font-bold mb-3
                  ">
                    Scholarship Awardee
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2.5">
                      <Award
                        size={20}
                        className="text-black shrink-0 mt-0.5"
                      />
                      <p className="text-sm leading-relaxed">
                        Charoen Pokphand Foundation Indonesian Scholarship
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Award
                        size={20}
                        className="text-black shrink-0 mt-0.5"
                      />
                      <p className="text-sm leading-relaxed">
                        Dato Low Tuck Kwong Purnomo Yusgiantoro
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="
                    text-[12px] uppercase tracking-[0.16em]
                    text-black/50 font-bold mb-1.5
                    text-justify
                  ">
                    Relevant Coursework
                  </p>

                  <p className="
                    text-xs md:text-sm text-black/65 leading-relaxed
                  ">
                    Meat Science and Technology, Animal Feed Nutrition,
                    Poultry Livestock Industry, Feed Technology and Fabrication,
                    and Livestock Industry Waste Management.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PROFESSIONAL DEVELOPMENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} />
                <h3 className="
                  text-sm font-bold uppercase tracking-[0.18em]
                ">
                  SHORT COURSES & PROFESSIONAL DEVELOPMENT
                </h3>
              </div>

              <div className="
                flex flex-col border-t border-black/10
              ">
                {PROFESSIONAL_DEVELOPMENT.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="
                        flex items-start gap-6
                        py-5 border-b border-black/10
                      "
                    >
                      <div className="
                        w-10 h-10 shrink-0 rounded-full
                        bg-black/5 text-black
                        flex items-center justify-center
                      ">
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="
                          text-sm md:text-sm font-semibold leading-snug
                        ">
                          {item.title}
                        </h4>

                        <p className="
                          text-[12px] md:text-xs
                          text-black/55 mt-1.5 font-inter
                        ">
                          {item.provider}
                        </p>

                        <p className="
                          text-xs md:text-sm text-black/75
                          mt-1.5 leading-relaxed
                        ">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: LOGO GRID */}
          <div className="flex flex-col h-full">

            <div className="
              flex items-center justify-between
              mb-3 pb-1.5 border-b border-black/15
            ">
              <h3 className="
                text-sm font-bold uppercase tracking-[0.18em]
              ">
                Technical Skills
              </h3>

              <span className="text-xs text-black/50">
                12 Tools
              </span>
            </div>

            <div className="
              grid grid-cols-3
              gap-3 md:gap-3
              lg:grid-rows-4 lg:flex-1
            ">
              {LOGOS.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    group relative
                    min-h-[125px]
                    sm:min-h-[150px]
                    lg:min-h-0
                    rounded-xl
                    border border-black/10
                    bg-white
                    flex items-center justify-center
                    p-5 md:p-6
                    transition-all duration-300
                    hover:border-black/40
                    hover:shadow-md
                  "
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width="96"
                    height="96"
                    loading="eager"
                    decoding="async"
                    className="
                      block
                      w-[68px] h-[68px]
                      sm:w-[78px] sm:h-[78px]
                      md:w-[88px] md:h-[88px]
                      object-contain
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="
                    absolute bottom-2
                    text-[12px] md:text-[12px]
                    font-medium tracking-wide
                    text-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  ">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
