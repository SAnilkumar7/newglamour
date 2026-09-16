import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';

// Automatically scroll to top smoothly when route changes
export const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname, search]);

  return null;
};

// Sleek golden reading/scroll progress bar at the very top of viewport
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#E5C384] to-[#C59E50] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(212,175,55,0.6)]"
    />
  );
};

// Reusable scroll-reveal section with playful smooth spring
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  id,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered list / grid container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered item
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Playful floating decoration component
export const PlayfulFloat: React.FC<{
  children: React.ReactNode;
  className?: string;
  duration?: number;
  offsetY?: number;
}> = ({ children, className = '', duration = 4, offsetY = 6 }) => {
  return (
    <motion.div
      animate={{
        y: [-offsetY, offsetY, -offsetY],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Luxury animated ticker marquee
export const LuxuryMarquee: React.FC<{ items?: string[]; className?: string }> = ({
  items = [
    'ROYAL BRIDAL ARTISTRY',
    '16-HOUR WATERPROOF HD BASE',
    'SHWETHA SUBHASH ATELIER',
    'RAICHUR, KARNATAKA',
    '500+ CELEBRATED BRIDES',
    'SWEAT-PROOF AIRBRUSH',
    'ZERO FLASHBACK 4K CAMERA READY',
    'HAUTE COUTURE JEWELRY SETTING',
  ],
  className = '',
}) => {
  return (
    <div className={`overflow-hidden py-3 bg-[#13100E] text-[#F3E8DB] border-y border-[#26201A] select-none ${className}`}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 24,
        }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {/* Doubled list for infinite continuous loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-medium text-[#E0D3C3]">
            <span>{item}</span>
            <span className="text-[#C9A050] text-xs">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
