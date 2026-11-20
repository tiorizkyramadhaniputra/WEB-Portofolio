import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_DATA, ACHIEVEMENTS } from '../data/academic';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const Academic: React.FC = () => {
  return (
    <section id="academic" className="py-20 md:py-40 bg-[#F5F5F3] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase leading-none">
                /Education
              </h2>
            </div>

            <div className="space-y-12">
              <div className="relative pl-8 border-l border-brand-black/10">
                <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-brand-black" />
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-2">{EDUCATION_DATA.institution}</h3>
                <p className="text-brand-brown-dark font-bold text-sm uppercase tracking-widest mb-4">
                  {EDUCATION_DATA.degree} — {EDUCATION_DATA.faculty}
                </p>
                <div className="flex flex-wrap gap-4 mb-8 text-[12px] font-bold uppercase tracking-widest text-brand-gray">
                  <span>{EDUCATION_DATA.period}</span>
                  <span className="text-brand-black/20">|</span>
                  <span>GPA: {EDUCATION_DATA.gpa}</span>
                </div>
                
                {EDUCATION_DATA.scholarship && (
                  <div className="bg-white p-6 rounded-2xl border border-brand-black/5 mb-8">
                    <span className="text-[9px] font-bold text-brand-brown-dark uppercase tracking-widest block mb-2">Scholarship</span>
                    <p className="text-xs font-medium text-brand-black">{EDUCATION_DATA.scholarship}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black/30 mb-4">Relevant Academic Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA.relevantAreas.map((area) => (
                      <span key={area} className="text-[9px] px-3 py-1.5 rounded-full bg-white border border-brand-black/5 text-brand-gray uppercase font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-beige text-brand-brown-dark flex items-center justify-center">
                <Award size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase leading-none">
                /Recognition
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {ACHIEVEMENTS.map((ach, index) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 bg-white border border-brand-black/5 rounded-2xl hover:border-brand-black/20 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg md:text-xl font-display font-bold uppercase group-hover:text-brand-brown-dark transition-colors">
                      {ach.title}
                    </h3>
                    <CheckCircle2 size={16} className="text-brand-beige" />
                  </div>
                  
                  {ach.subtitle && (
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-2">
                      {ach.subtitle}
                    </p>
                  )}
                  
                  {ach.description && (
                    <p className="text-xs text-brand-gray leading-relaxed mb-4">
                      {ach.description}
                    </p>
                  )}

                  {ach.team && (
                    <div className="pt-4 border-t border-brand-black/5 flex flex-wrap gap-4 items-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-black/30">Team Lead</span>
                      <div className="flex gap-2">
                        {ach.team.map(member => (
                          <span key={member} className="text-[9px] font-medium uppercase text-brand-black">{member}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Academic;
