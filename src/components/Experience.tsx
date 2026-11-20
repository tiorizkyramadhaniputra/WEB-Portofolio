
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/experience';

const Experience: React.FC = () => {
  const heading = 'Resume';
  const [typedHeading, setTypedHeading] = useState('');

  // TYPEWRITER EFFECT — REPEAT EVERY 90 SECONDS
  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval>;
    let repeatTimeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      let index = 0;

      clearInterval(typingInterval);
      setTypedHeading('');

      typingInterval = setInterval(() => {
        index++;
        setTypedHeading(heading.slice(0, index));

        if (index >= heading.length) {
          clearInterval(typingInterval);
        }
      }, 120);
    };

    const scheduleNextTyping = () => {
      repeatTimeout = setTimeout(() => {
        startTyping();
        scheduleNextTyping();
      }, 90000);
    };

    startTyping();
    scheduleNextTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(repeatTimeout);
    };
  }, []);

  return (
    <section
      id="experience"
      className="bg-[#f5f5f3] pt-20 pb-0 md:pt-28 md:pb-14 text-brand-black"
    >
      <div className="container-custom">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-1 md:mb-1"
        >
          <div className="flex items-end justify-between border-b border-black pb-1 md:pb-1.5">
            <div>
              <span className="block mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gray">
                Professional Background / Intern History
              </span>

              <h2
                aria-label={heading}
                className="font-display text-4xl md:text-7xl lg:text-8xl leading-none font-bold uppercase"
              >
                {typedHeading}
              </h2>
            </div>

            <span className="text-lg md:text-l font-inter font-bold mb-10">
              ( 03 )
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1.5">
            <p className="text-xs md:text-sm uppercase tracking-widest text-brand-gray">
              An overview of my professional journey and hands-on experience.
            </p>

            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">
              {EXPERIENCES.length} Experiences
            </span>
          </div>
        </motion.div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div>
          {EXPERIENCES.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className="border-t border-black/15 py-8 md:py-1.5"
            >
              {/* ORGANIZATION & PERIOD */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-1">
                <div className="min-w-0">
                  <h3 className="text-lg md:text-2xl font-display font-bold uppercase leading-snug">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-colors duration-200 hover:text-blue-600 focus-visible:text-blue-600"
                      >
                        {exp.organization}
                      </a>
                    ) : (
                      exp.organization
                    )}
                  </h3>

                  <p className="mt-1 text-xs md:text-sm text-brand-gray">
                    {exp.location}
                  </p>
                </div>

                <span className="shrink-0 text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-gray md:text-right">
                  {exp.period}
                </span>
              </div>

              {/* ROLE */}
              <p className="text-xs md:text-sm font-bold text-brand-brown-dark mb-5">
                {exp.role}
              </p>

              {/* RESPONSIBILITIES */}
              <ul className="space-y-2.5 max-w-5xl">
                {exp.responsibilities.map((responsibility, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs md:text-base leading-relaxed text-brand-black/75"
                  >
                    <span className="mt-[1px] shrink-0 text-brand-black">
                      •
                    </span>

                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          <div className="border-t border-black/15" />
        </div>

      </div>
    </section>
  );
};

export default Experience;
