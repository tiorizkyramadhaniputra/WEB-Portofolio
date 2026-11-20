
import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download } from 'lucide-react';
import {  NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-brand-bg/85 backdrop-blur-md
      py-6 md:py-7
    ">
      <div className="
        container-custom
        flex items-center justify-between
      ">

        {/* LEFT: DOWNLOAD CV */}

        <motion.a
href="https://drive.google.com/file/d/1p1P1UPn7oT6vAG2Kxon12_ChYtMbMXcz/view?usp=sharing"          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex items-center gap-3
            bg-white
            px-5 py-3
            rounded-full
            border border-brand-black/10
            shadow-sm
            hover:shadow-md
            transition-all duration-300
            group
          "
        >
          <span className="
            text-sm md:text-base
            font-medium
            text-brand-black
            whitespace-nowrap
          ">
            Download CV
          </span>

          <Download
            size={17}
            className="
              text-brand-black
              group-hover:translate-y-1
              transition-transform duration-300
            "
          />
        </motion.a>


        {/* CENTER: NAVIGATION LINKS */}

        <ul className="
          hidden md:flex
          items-center
          gap-8 lg:gap-10
        ">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  text-sm md:text-base
                  font-medium
                  text-brand-black
                  hover:text-brand-gray
                  transition-colors
                  flex items-start gap-1.5
                  whitespace-nowrap
                "
              >
                <span>{link.label}</span>

                {link.count && (
                  <span className="
                    text-[11px] md:text-xs
                    text-brand-gray/80
                    font-normal
                  ">
                    [{link.count}]
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>


        {/* RIGHT: CTA */}

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex
            items-center
            gap-2
            bg-brand-black
            text-white
            px-6 py-3
            rounded-full
            text-sm md:text-base
            font-semibold
            shadow-sm
            hover:bg-brand-gray
            transition-colors
            whitespace-nowrap
          "
        >
          Let's Talk
          <ArrowUpRight size={18} />
        </motion.a>

      </div>
    </nav>
  );
};

export default Navbar;
