
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { House } from 'lucide-react';

const BackToHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backToHero = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={backToHero}
          aria-label="Back to Hero"
          className="
            fixed bottom-8 right-8
            z-[999]
            w-14 h-14
            rounded-full
            bg-brand-black text-white
            flex items-center justify-center
            shadow-lg
            hover:bg-brand-accent hover:text-brand-black
            transition-colors duration-300
          "
        >
          <House size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToHero;
