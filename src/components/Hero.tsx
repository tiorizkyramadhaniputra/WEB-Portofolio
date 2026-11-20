
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Mail, Bot, X } from 'lucide-react';
import {
  SiGithub,
  SiInstagram,
} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';

import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  const [portraitColor, setPortraitColor] = useState(false);
  const [showDesktopHint, setShowDesktopHint] = useState(false);

  // DESKTOP RECOMMENDATION NOTIFICATION
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesktopHint(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const iconMap: Record<string, any> = {
    Linkedin: FaLinkedinIn,
    Github: SiGithub,
    Instagram: SiInstagram,
    Mail: Mail,
  };

  return (
    <section
      id="hero"
      className="
        relative
        w-full
        min-h-screen
        md:h-[min(56.25vw,100svh)]
        md:min-h-[680px]
        pt-28
        sm:pt-32
        md:pt-31
        pb-0
        overflow-hidden
        bg-brand-bg
        border-b border-brand-black/5
      "
    >
      <div className="
        relative
        w-full
        h-full
        px-5
        sm:px-8
        md:px-[5vw]
        flex flex-col
      ">

        {/* ================================= */}
        {/* 1. OVERSIZED NAME */}
        {/* ================================= */}

        <div className="
          relative z-[0]
          w-full
          flex justify-center
          pointer-events-none
          select-none
          shrink-0
        ">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="
              big-case
              w-full
              text-center
              font-bold
              tracking-tight
              leading-[1.15]
              text-[clamp(2rem,8.5vw,7.5rem)]
              flex flex-wrap
              justify-center
              items-center
              gap-x-2
              sm:gap-x-3
              md:gap-x-6
              gap-y-0
            "
          >
            <span
              className="whitespace-nowrap"
              style={{
                WebkitTextStroke: '2px #0A0909',
                color: 'transparent',
              }}
            >
              Tio Rizky
            </span>

            <span className="
              text-brand-black
              whitespace-nowrap
            ">
              Ramadhani Putra
            </span>
          </motion.h1>
        </div>


        {/* ================================= */}
        {/* 2. CONTENT & PORTRAIT STAGE */}
        {/* ================================= */}

        <div className="
          relative
          w-full
          mt-8
          md:mt-2
          flex flex-col
          md:flex-row
          items-center
          md:items-end
          justify-between
          flex-1
          min-h-0
          gap-8
          md:gap-0
        ">

          {/* LEFT: INTRODUCTION */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              relative z-20
              w-full
              md:max-w-[510px]
              pb-0
              md:pb-28
              text-left
              order-1
            "
          >
            <h3 className="
              normal-case
              text-xl
              sm:text-2xl
              md:text-2xl
              font-bold
              tracking-tight
              text-brand-black
              leading-snug
              mb-2
            ">
              {PERSONAL_INFO.introduction}
            </h3>

            <p className="
              text-xs
              sm:text-sm
              md:text-base
              font-inter-
              tracking-tight
              text-brand-gray
              leading-relaxed
              mb-4
              max-w-md
            ">
              {PERSONAL_INFO.description}
            </p>

            <a
              href="#experience"
              className="
                btn-primary
                inline-flex
                items-center
                gap-2
                shadow-sm
              "
            >
              Explore My Work
              <ArrowUpRight size={20} />
            </a>
          </motion.div>


          {/* ================================= */}
          {/* CENTER: INTERACTIVE PORTRAIT */}
          {/* ================================= */}

          <div className="
            relative md:absolute
            bottom-0
            md:left-1/2
            md:-translate-x-1/2
            z-10
            w-[520px]
            sm:w-[640px]
            md:w-[700px]
            lg:w-[min(777px,55vw)]
            pointer-events-auto
            flex justify-center items-end
          ">
            <motion.img
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: 'easeOut',
              }}
              src={heroImg}
              alt="Tio Rizky Ramadhani Putra"
              role="button"
              tabIndex={0}
              aria-label="Toggle portrait color"
              aria-pressed={portraitColor}
              onClick={() => {
                setPortraitColor((prev) => !prev);
              }}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  setPortraitColor((prev) => !prev);
                }
              }}
              className={`
                w-full
                h-auto
                object-contain
                object-bottom
                block
                cursor-pointer
                transition-all
                duration-700
                ease-in-out
                ${
                  portraitColor
                    ? 'grayscale-0'
                    : 'grayscale'
                }
                md:hover:grayscale-0
              `}
            />
          </div>


          {/* ================================= */}
          {/* RIGHT: SOCIAL LINKS */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              relative z-20
              w-full
              md:w-auto
              pb-8
              md:pb-14
              flex
              flex-row
              flex-wrap
              md:flex-col
              gap-2.5
              justify-start
              md:items-end
              order-3
            "
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-[calc(50%-5px)]
                    sm:w-44
                    md:w-52
                    flex items-center
                    justify-center
                    gap-3
                    px-4
                    py-3
                    md:px-6
                    md:py-4
                    rounded-full
                    bg-white
                    border border-brand-black/15
                    text-xl
                    md:text-base
                    font-inter
                    text-brand-black
                    shadow-2xs
                    hover:bg-brand-black
                    hover:text-white
                    hover:border-brand-black
                    transition-all
                    duration-200
                    whitespace-nowrap
                  "
                >
                  {Icon && <Icon size={16} />}
                  <span>{social.label}</span>
                </a>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* ================================= */}
      {/* FLOATING DESKTOP RECOMMENDATION */}
      {/* ================================= */}

      <div className="
        fixed
        bottom-6
        left-0
        right-0
        z-[100]
        flex
        justify-center
        px-4
        pointer-events-none
      ">
        <AnimatePresence>
          {showDesktopHint && (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: [0, -5, 0],
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="
                pointer-events-auto
                flex items-center gap-3
                max-w-[360px]
                bg-white/90
                backdrop-blur-xl
                border border-brand-black/10
                rounded-2xl
                px-4 py-3
                shadow-lg
              "
            >
              <div className="
                shrink-0
                w-10 h-10
                rounded-full
                bg-brand-black
                text-white
                flex items-center justify-center
              ">
                <Bot size={21} strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="
                  text-[14px]
                  font-bold
                  Sentences
                  tracking-widest
                  text-brand-black
                  mb-1
                ">
                  Psst...
                </p>

                <p className="
                  text-[12px] sm:text-xs
                  leading-relaxed
                  text-inter-dark
                ">
                  This portfolio looks different on a laptop or desktop. Try it out! 
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowDesktopHint(false)}
                aria-label="Dismiss notification"
                className="
                  shrink-0
                  text-brand-gray
                  hover:text-brand-black
                  transition-colors
                "
              >
                <X size={15} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default Hero;
