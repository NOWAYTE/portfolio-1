import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  letterClass: string;
  strArray: string[];
  idx: number;
};

const AnimatedLetters = ({ letterClass, strArray, idx }: Props) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Animation logic here
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {strArray.map((char, i) => (
        <motion.span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          style={{
            display: 'inline-block',
            opacity: 0,
            minWidth: '10px',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { delay: (i + idx) / 20, type: 'spring', stiffness: 100, damping: 10 } } : {}}
          whileHover={{
            color: '#ffd700',
            scale: 1.5,
            y: -2,
            transition: { duration: 0.1 },
            animation:  'rubberband 1s'
          }}
          whileTap={{ y: 2 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
