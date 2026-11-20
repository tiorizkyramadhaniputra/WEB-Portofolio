
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
 
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period?: string;
  location?: string;
  images: string[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  highlights?: string[];
  tech?: string[];
  award?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalImages = project.images.length;

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % totalImages);
  };

  const previousImage = () => {
    setActiveImage ((current) => (current - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (totalImages <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % totalImages);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalImages, isHovered]);

  return (
    <div className="relative">

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.65,
          delay: (index % 2) * 0.12,
          ease: 'easeOut',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative z-10 min-w-0"
      >
        {/* Image Carousel */}
        <div className="relative isolate aspect-[16/9] w-full overflow-hidden rounded-2xl bg-brand-beige/20">

          {/* Project Images */}
          <AnimatePresence mode="sync">
            <motion.img
              key={project.images[activeImage]}
              src={project.images[activeImage]}
              alt={`${project.title} - Image ${activeImage + 1}`}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: {
                  duration: 0.9,
                  ease: 'linear',
                },
                scale: {
                  duration: 1.4,
                  ease: 'easeInOut',
                },
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
            />
          </AnimatePresence>

          {/* Softer Cinematic Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

          {/* Period Badge */}
          {project.period && (
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/40 bg-white/200 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-md">
              {project.period}
            </div>
          )}

          {/* Image Counter */}
          {totalImages > 1 && (
            <div className="absolute right-5 top-5 z-10 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white shadow-sm backdrop-blur-md">
              {String(activeImage + 1).padStart(2, '0')}
              <span className="mx-1.5 text-white/70">/</span>
              {String(totalImages).padStart(2, '0')}
            </div>
          )}

          {/* Project Information */}
          <div className="absolute bottom-5 left-5 z-10 max-w-[80%] text-white">
            <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.2em] text-white/90">
              {project.category}
            </span>

            <h3 className="font-display text-2xl leading-tight md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/90">
              {project.subtitle}
            </p>

            {project.location && (
              <p className="mt-2 text-[9px] font-medium uppercase tracking-widest text-white/80">
                {project.location}
              </p>
            )}
          </div>

          {/* Navigation Controls */}
          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
              >
                <ChevronRight size={17} />
              </button>
            </>
          )}

          {/* Carousel Indicators */}
          {totalImages > 1 && (
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5">
              {project.images.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  type="button"
                  aria-label={`Go to image ${imageIndex + 1}`}
                  onClick={() => setActiveImage(imageIndex)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeImage === imageIndex
                      ? 'w-6 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Hover Hint */}
          {totalImages > 1 && (
            <div className="pointer-events-none absolute right-5 top-1/2 z-10 -translate-y-1/2 translate-x-2 text-[9px] font-bold uppercase tracking-widest text-white/70 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Explore
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="pt-0">
          <div className="flex items-center justify-end">
        
          </div>

          {/* Project Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-black/10 bg-white/70 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#555555]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Technology Tags */}
          {project.tech && project.tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/10 bg-white/70 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#555555]"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;
