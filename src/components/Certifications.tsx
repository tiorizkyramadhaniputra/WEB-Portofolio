
import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS } from '../data/certifications';
import {
  Search,
  ExternalLink,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const PAGE_SIZE = 10;

const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    'All',
    'Honors & Awards',
    'Animal Science',
    'Technology',
    'Soft Skills',
    'Short Courses',
  ];

  const filteredCertifications = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesCategory =
        activeCategory === 'All' || cert.category === activeCategory;

      const query = searchQuery.toLowerCase();

      const matchesSearch =
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredCertifications.length / PAGE_SIZE);

  const visibleCertifications = filteredCertifications.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  useEffect(() => {
    setCurrentPage(0);
    setFlippedCards([]);
  }, [activeCategory, searchQuery]);

  const toggleFlip = (id: string) => {
    setFlippedCards((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const changePage = (direction: number) => {
    setCurrentPage((page) =>
      Math.max(0, Math.min(totalPages - 1, page + direction))
    );
    setFlippedCards([]);
  };

  return (
    <section
      id="certifications"
className="bg-brand-section pt-20 md:pt-28 pb-8 md:pb-10 text-brand-black"    >
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-end justify-between border-b border-black pb-3">
            <div>
              <span className="block mb-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-brand-gray">
                Digital Certificate Gallery
              </span>

              <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-none font-bold uppercase">
                Certificates
              </h2>
            </div>

            <span className="text-sm md:text-lg font-bold mb-2">
              ( 04 )
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3">
            <p className="text-xs md:text-sm uppercase tracking-widest text-brand-gray">
              A collection of certifications, training, and learning experiences
            </p>

            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gray">
              {filteredCertifications.length} / {CERTIFICATIONS.length} Certificates
            </span>
          </div>
        </motion.div>

        {/* SEARCH & FILTER */}
        <div className="flex flex-col gap-5 mb-8">

          {/* SEARCH */}
          <div className="relative w-full md:max-w-md">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates..."
              className="w-full bg-white border border-black/10 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-brown-dark transition-colors"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeCategory === category
                    ? 'bg-brand-black text-white border-brand-black'
                    : 'bg-transparent text-brand-gray border-black/15 hover:border-black hover:text-brand-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        {filteredCertifications.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
              >
                {visibleCertifications.map((cert, index) => {
                  const isFlipped = flippedCards.includes(cert.id);

                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.035,
                      }}
                      className="group relative w-full aspect-video"
                      style={{ perspective: 1200 }}
                    >
                      {/* FLIP CONTAINER */}
                      <motion.div
                        animate={{
                          rotateY: isFlipped ? 180 : 0,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 18,
                          mass: 0.8,
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          WebkitTransformStyle: 'preserve-3d',
                        }}
                        className="relative w-full h-full"
                      >
                        {/* FRONT */}
                        <button
                          type="button"
                          onClick={() => toggleFlip(cert.id)}
                          aria-label={`Show details: ${cert.title}`}
                          aria-pressed={isFlipped}
                          tabIndex={isFlipped ? -1 : 0}
                          className="absolute inset-0 w-full h-full overflow-hidden bg-white border border-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown-dark"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            pointerEvents: isFlipped ? 'none' : 'auto',
                          }}
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <RotateCcw size={14} className="text-white" />
                          </div>
                        </button>

                        {/* BACK */}
                        <div
                          role="button"
                          tabIndex={isFlipped ? 0 : -1}
                          aria-label={`Show certificate: ${cert.title}`}
                          onClick={() => toggleFlip(cert.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleFlip(cert.id);
                            }
                          }}
                          className="absolute inset-0 flex flex-col justify-between overflow-hidden bg-brand-black text-white p-2.5 md:p-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-beige"
                          style={{
                            transform: 'rotateY(180deg)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            pointerEvents: isFlipped ? 'auto' : 'none',
                          }}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <span className="text-[7px] md:text-[8px] uppercase tracking-wider text-brand-beige">
                                {cert.category}
                              </span>

                              <h3 className="mt-1.5 text-[9px] md:text-[11px] font-bold leading-snug line-clamp-2">
                                {cert.title}
                              </h3>

                              <p className="mt-1 text-[8px] md:text-[9px] text-white/60 line-clamp-1">
                                {cert.issuer}
                              </p>
                            </div>

                            <RotateCcw
                              size={12}
                              className="shrink-0 text-white/60"
                            />
                          </div>

                          <div className="space-y-1.5 border-t border-white/20 pt-1.5">

                            {/* ISSUE DATE */}
                            <div>
                              <p className="text-[7px] md:text-[8px] uppercase tracking-wider text-white/50">
                                Issued
                              </p>
                              <p className="text-[8px] md:text-[9px] font-medium">
                                {cert.date}
                              </p>
                            </div>

                            {/* CREDENTIAL ID */}
                            {cert.credentialId && (
                              <div>
                                <p className="text-[7px] md:text-[8px] uppercase tracking-wider text-white/50">
                                  Credential ID
                                </p>

                                <p className="text-[8px] md:text-[9px] font-medium break-all leading-relaxed">
                                  {cert.credentialId}
                                </p>
                              </div>
                            )}

                            {/* DESCRIPTION */}
                            {cert.description && (
                              <p className="text-[8px] md:text-[9px] leading-relaxed text-white/70 line-clamp-2">
                                {cert.description}
                              </p>
                            )}

                            {/* CREDENTIAL LINK */}
                            {cert.link && (
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="relative z-10 inline-flex items-center gap-1 text-[8px] md:text-[9px] font-bold uppercase text-brand-beige hover:text-white"
                              >
                                View Credential
                                <ExternalLink size={9} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-7 border-t border-black/10 pt-4">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gray">
                  Page {currentPage + 1} / {totalPages}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changePage(-1)}
                    disabled={currentPage === 0}
                    aria-label="Previous page"
                    className="w-10 h-10 flex items-center justify-center border border-black/20 hover:bg-brand-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-black transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => changePage(1)}
                    disabled={currentPage >= totalPages - 1}
                    aria-label="Next page"
                    className="w-10 h-10 flex items-center justify-center border border-black/20 hover:bg-brand-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-black transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center border border-black/10">
            <p className="text-sm font-bold uppercase tracking-widest">
              No certificates found
            </p>
            <p className="mt-2 text-xs text-brand-gray">
              Try another keyword or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
