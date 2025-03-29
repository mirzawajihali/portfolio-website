import React from 'react';
 import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const Works = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const projects = [
        
        {
            title: "Pawsitive Placements",
            image: 'https://i.ibb.co/JF5r6nJg/student-Managment.png',
            description: "Full-featured online shopping platform with cart, payment integration, and admin dashboard.",
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            live : 'https://coffee-store-7d628.web.app/',
            repository : "https://github.com/mirzawajihali/Pawsitive-Placements"
        },
        {
          title: "Student Management System",
          image: 'https://i.ibb.co/JF5r6nJg/student-Managment.png',
          description: "A comprehensive platform for students to find tutoring, internships, and exchange food tokens.",
          technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
          live: 'https://student-management-250a8.web.app',
          repository: "https://github.com/mirzawajihali/student-management"
      },
        {
            title: "Coffee Store",
            image: "https://i.ibb.co.com/spGy70B6/Screenshot-2025-03-29-221149.png",
            description: "Instant messaging application with real-time updates and user authentication.",
            technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"],
            live: 'https://coffee-store-7d628.web.app/',
            repository: "https://github.com/mirzawajihali/Coffee-Store-BothEnd"
        }
    ];
    return (
        <div>
            <section className="py-16 bg-base-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-[#a1a1a1] mb-4">My Projects</h2>
                        <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                           <motion.div 
                           key={index}
                           className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                           variants={itemVariants}
                           whileHover={{ y: -5 }}
                         >
                           {/* Screenshot Container with Parallax Effect */}
                           <div className="relative h-56 overflow-hidden">
                             {/* Image with zoom effect */}
                             <motion.img 
                               src={project.image}
                               alt={project.title}
                               className="w-full h-full p-2 rounded-2xl object-cover"
                               initial={{ scale: 1 }}
                               whileHover={{ scale: 1.05 }}
                               transition={{ duration: 0.5 }}
                             />
                             
                             {/* Gradient Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             
                             {/* Action Buttons - Slide Up */}
                             <motion.div 
                               className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                               initial={{ opacity: 0 }}
                               whileHover={{ opacity: 1 }}
                             >
                               <div className="flex justify-center gap-3">
                                 <a 
                                   href={project.live}
                                   target="_blank" 
                                   className="bg-white text-[#384959] px-5 py-2 rounded-full font-medium hover:bg-[#BDDDFC] transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                                 >
                                   <FiExternalLink className="w-4 h-4" />
                                   Live Demo
                                 </a>
                                 <a 
                                   href={project.repository}
                                   className="bg-[#384959] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2a3642] transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                                 >
                                   <FiGithub className="w-4 h-4" />
                                   Code
                                 </a>
                               </div>
                             </motion.div>
                           </div>
                         
                           {/* Content with Elegant Typography */}
                           <div className="p-6 space-y-4">
                             <div className="flex justify-between items-center">
                               <h3 className="text-2xl font-bold text-[#384959] font-serif tracking-tight">
                                 {project.title}
                               </h3>
                               {project.featured && (
                                 <span className="bg-[#BDDDFC] text-[#384959] px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                                   FEATURED
                                 </span>
                               )}
                             </div>
                             
                             <p className="text-[#6A89A7] leading-relaxed">
                               {project.description}
                             </p>
                             
                             {/* Tech Tags with Hover Effects */}
                             <div className="flex flex-wrap gap-2 pt-2">
                               {project.technologies.map((tech, techIndex) => (
                                 <motion.span
                                   key={techIndex}
                                   className="bg-[#BDDDFC]/30 text-[#384959] px-3 py-1 rounded-full text-sm cursor-default"
                                   whileHover={{ scale: 1.05, backgroundColor: "#BDDDFC" }}
                                 >
                                   {tech}
                                 </motion.span>
                               ))}
                             </div>
                             
                             {/* Case Study Link with Animated Arrow */}
                             {project.caseStudyUrl && (
                               <motion.a
                                 href={project.caseStudyUrl}
                                 className="inline-block mt-3 text-[#384959] font-medium group/link"
                                 whileHover={{ x: 3 }}
                               >
                                 <div className="flex items-center gap-1">
                                   <span>View Case Study</span>
                                   <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                 </div>
                                 <div className="h-0.5 bg-[#BDDDFC] w-0 group-hover/link:w-full transition-all duration-300" />
                               </motion.a>
                             )}
                           </div>
                         </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Works;