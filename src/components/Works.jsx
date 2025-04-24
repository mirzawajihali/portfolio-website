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
            title: "Pawsitive Placements (University Project)",
            image: 'https://i.ibb.co.com/V0W0L2Pf/Screenshot-2025-03-31-001511.png',
            description: "Full-featured online shopping platform with cart, payment integration, and admin dashboard.",
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            live : 'https://burj-al-arab-d0a77.web.app/',
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
            description: "Coffee shop related website",
            technologies: ["React",  "Firebase", "Tailwind CSS"],
            live: 'https://coffee-store-7d628.web.app',
            repository: "https://github.com/mirzawajihali/Coffee-Store-BothEnd"
        },
        {
            title: "Dragon News FrontEnd",
            image: "https://i.ibb.co.com/MxHcy6qS/Screenshot-2025-03-31-001052.png",
            description: "News related website.",
            technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"],
            live: 'https://dragon-news-frontend-8c73a.web.app',
            repository: "https://github.com/mirzawajihali/dragon-news-frontend"
        },
        {
            title: "Harley Davidson Clone",
            image: "https://i.ibb.co.com/jvqvr5cd/Screenshot-2025-03-31-001240.png",
            description: "Clone of harley davidson website",
            technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"],
            live: 'https://harley-davidson-wajih.netlify.app/',
            repository: ""
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
                        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                        <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col space-y-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                         <motion.div 
                             key={index}
                             className="bg-base-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group border border-base-300 w-full"
                             variants={itemVariants}
                             whileHover={{ y: -5 }}
                         >
                             <div className="flex flex-col lg:flex-row">
                                 {/* Image Container - Takes 40% width on desktop */}
                                 <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-base-200">
                                     <motion.img 
                                         src={project.image}
                                         alt={project.title}
                                         className="w-full h-full object-cover"
                                         initial={{ scale: 1 }}
                                         whileHover={{ scale: 1.05 }}
                                         transition={{ duration: 0.5 }}
                                     />
                                     
                                     {/* Gradient Overlay */}
                                     <div className="absolute inset-0 bg-gradient-to-t from-base-300/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                 </div>
                             
                                 {/* Content Container - Takes 60% width on desktop */}
                                 <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                                     <div>
                                         <div className="flex justify-between items-center mb-4">
                                             <h3 className="text-2xl font-bold text-base-content tracking-tight">
                                                 {project.title}
                                             </h3>
                                             {project.featured && (
                                                 <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                                                     FEATURED
                                                 </span>
                                             )}
                                         </div>
                                         
                                         <p className="text-base-content/70 leading-relaxed mb-6">
                                             {project.description}
                                         </p>
                                         
                                         {/* Tech Tags with Hover Effects */}
                                         <div className="flex flex-wrap gap-2 mb-8">
                                             {project.technologies.map((tech, techIndex) => (
                                                 <motion.span
                                                     key={techIndex}
                                                     className="bg-base-200 text-base-content/80 px-4 py-2 rounded-full text-sm cursor-default"
                                                     whileHover={{ scale: 1.05, backgroundColor: "var(--primary-focus)", color: "var(--primary-content)" }}
                                                 >
                                                     {tech}
                                                 </motion.span>
                                             ))}
                                         </div>
                                     </div>
                                     
                                     {/* Action Buttons */}
                                     <div className="flex gap-4 mt-auto">
                                         {project.live && (
                                             <a 
                                                 href={project.live}
                                                 target="_blank" 
                                                 className="bg-primary text-primary-content px-6 py-3 rounded-lg font-medium hover:bg-primary-focus transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                                                 rel="noreferrer"
                                             >
                                                 <FiExternalLink className="w-5 h-5" />
                                                 Live Demo
                                             </a>
                                         )}
                                         {project.repository && (
                                             <a 
                                                 href={project.repository}
                                                 target="_blank"
                                                 className="bg-base-200 text-base-content px-6 py-3 rounded-lg font-medium hover:bg-base-300 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                                                 rel="noreferrer"
                                             >
                                                 <FiGithub className="w-5 h-5" />
                                                 Source Code
                                             </a>
                                         )}
                                         
                                         {/* Case Study Link with Animated Arrow */}
                                         {project.caseStudyUrl && (
                                             <motion.a
                                                 href={project.caseStudyUrl}
                                                 className="inline-flex items-center px-6 py-3 text-primary font-medium group/link"
                                                 whileHover={{ x: 3 }}
                                                 target="_blank"
                                                 rel="noreferrer"
                                             >
                                                 <span>View Case Study</span>
                                                 <FiArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                                             </motion.a>
                                         )}
                                     </div>
                                 </div>
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