
import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
<section id="work" className="bg-white pt-16 md:pt-28 pb-8 md:pb-10">      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 block text-[12px] font-bold uppercase tracking-[0.25em] text-brand-gray">
              Learning, Exploring, and Growinng
            </span>

            <h2 className="font-display text-4xl leading-none md:text-7xl lg:text-8xl">
              | Highlights
            </h2>

            <p className="mt-6 max-h-xl text-xs uppercase leading-relaxed tracking-widest text-brand-gray md:text-sm">
              A collection of what I've done, learned, and become.
            </p>
          </motion.div>

          <div className="flex items-center gap-3 text-[28px] font-bold uppercase tracking-widest text-brand-black">
            <span className="h-1.5 w-1.5" />
            (02)
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-x-6 md:gap-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
