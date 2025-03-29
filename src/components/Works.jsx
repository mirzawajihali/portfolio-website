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
            title: "Student Management System",
            
            description: "A comprehensive platform for students to find tutoring, internships, and exchange food tokens.",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "E-commerce Platform",
            description: "Full-featured online shopping platform with cart, payment integration, and admin dashboard.",
            technologies: ["React", "Redux", "Node.js", "MongoDB"]
        },
        {
            title: "Real-time Chat Application",
            description: "Instant messaging application with real-time updates and user authentication.",
            technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"]
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
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            variants={itemVariants}
                          >
                            {/* Screenshot Container with Overlay */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-r from-[#88BDF2] to-[#384959]">
                              {/* Website Screenshot (replace with your image) */}
                              <img 
                                src={project.screenshot} 
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                              />
                              
                              {/* Hover Overlay with Buttons */}
                              <div className="absolute inset-0 bg-[#384959]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                  href={project.liveUrl} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-white text-[#384959] px-4 py-2 rounded-full font-medium hover:bg-[#BDDDFC] transition-colors flex items-center gap-2"
                                >
                                  <FiExternalLink className="w-4 h-4" />
                                  Live Site
                                </a>
                                <a 
                                  href={project.repoUrl} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-[#384959] transition-colors flex items-center gap-2"
                                >
                                  <FiGithub className="w-4 h-4" />
                                  Repository
                                </a>
                              </div>
                            </div>
                          
                            {/* Content */}
                            <div className="p-6">
                              <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-[#384959]">{project.title}</h3>
                                {project.featured && (
                                  <span className="bg-[#BDDDFC] text-[#384959] px-3 py-1 rounded-full text-xs font-medium">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              <p className="text-[#6A89A7] mb-4">{project.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                  <span 
                                    key={techIndex} 
                                    className="bg-[#BDDDFC]/30 text-[#384959] px-3 py-1 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              {/* Additional "Case Study" button if applicable */}
                              {project.caseStudyUrl && (
                                <a
                                  href={project.caseStudyUrl}
                                  className="text-[#384959] font-medium text-sm hover:text-[#88BDF2] transition-colors inline-flex items-center gap-1"
                                >
                                  Read Case Study
                                  <FiArrowRight className="w-3 h-3" />
                                </a>
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