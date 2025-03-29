import { motion } from 'framer-motion';

const Marquee = ({ text }) => {
  const MotionDiv = motion.div;
  
  return (
    <div className="overflow-hidden bg-base-300 rounded-full py-2 mb-8">
      <MotionDiv 
        className="whitespace-nowrap flex"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="inline-block mr-8">{text}</span>
        ))}
      </MotionDiv>
    </div>
  );
};

export default Marquee; 