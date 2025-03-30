import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFramer,
  SiDaisyui
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" />, confidence: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, confidence: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, confidence: 92 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, confidence: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, confidence: 85 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, confidence: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, confidence: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, confidence: 95 },
    { name: "Daisy UI", icon: <SiDaisyui className="text-purple-500" />, confidence: 88 },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" />, confidence: 75 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, confidence: 82 },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, confidence: 90 },
    { name: "Figma", icon: <FaFigma className="text-purple-600" />, confidence: 78 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  const progressVariants = {
    hidden: { width: 0 },
    show: (confidence) => ({
      width: `${confidence}%`,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      }
    })
  };

  return (
    <section className="py-8 px-4 bg-base-300" id="skills">
      <div className="max-w-md mx-auto">
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <motion.div
          className="flex flex-col gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="space-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="text-xl">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-medium">{skill.name}</h3>
              </div>
              <div className="h-2 w-full bg-base-300 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  variants={progressVariants}
                  custom={skill.confidence}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;