import React from 'react';
import { Link } from 'react-router-dom';
import GitHubC from './GitHubC';
import { HeroScrollDemo } from './HeroScrollDemo';
import { LampContainer } from './ui/lamp';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiAward, FiBookOpen } from 'react-icons/fi';
import { TimelineDemo } from './TimelineDemo';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="space-y-24  py-10">
            <Link to="https://github.com/mirzawajihali"><HeroScrollDemo /></Link>
            
            {/* About Me Section
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-base-100 py-16 rounded-xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
                    <div className="w-32 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="rounded-2xl overflow-hidden shadow-lg bg-base-300"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="p-1 bg-gradient-to-br from-primary to-secondary">
                            <img 
                                src="/images/developer.png" 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-xl" 
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold">Full Stack Developer</h3>
                        <p className="text-lg text-base-content/80 leading-relaxed">
                            I am a passionate web developer specializing in building exceptional digital experiences. 
                            With a strong foundation in both front-end and back-end technologies, I enjoy creating 
                            responsive, user-friendly applications that solve real-world problems.
                        </p>
                        <p className="text-lg text-base-content/80 leading-relaxed">
                            My journey in software development has taught me the importance of clean code, 
                            collaboration, and continuous learning. I'm always exploring new technologies 
                            and methodologies to enhance my skills and deliver better solutions.
                        </p>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="flex items-center gap-3 p-5 bg-base-200 rounded-lg"
                                variants={fadeInUp}
                            >
                                <FiUser className="text-primary text-2xl" />
                                <div>
                                    <h4 className="font-medium text-base">Name</h4>
                                    <p className="text-base text-base-content/70">Mirza Wajih Ali</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center gap-3 p-5 bg-base-200 rounded-lg"
                                variants={fadeInUp}
                            >
                                <FiCode className="text-primary text-2xl" />
                                <div>
                                    <h4 className="font-medium text-base">Experience</h4>
                                    <p className="text-base text-base-content/70">3+ Years</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center gap-3 p-5 bg-base-200 rounded-lg"
                                variants={fadeInUp}
                            >
                                <FiAward className="text-primary text-2xl" />
                                <div>
                                    <h4 className="font-medium text-base">Projects</h4>
                                    <p className="text-base text-base-content/70">20+ Completed</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center gap-3 p-5 bg-base-200 rounded-lg"
                                variants={fadeInUp}
                            >
                                <FiBookOpen className="text-primary text-2xl" />
                                <div>
                                    <h4 className="font-medium text-base">Education</h4>
                                    <p className="text-base text-base-content/70">Computer Science</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="pt-6">
                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                className="inline-flex items-center px-8 py-4 bg-primary text-primary-content rounded-lg font-medium text-lg hover:bg-primary-focus transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section> */}

          <TimelineDemo></TimelineDemo>
        </div>
    );
};

export default About;