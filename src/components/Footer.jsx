import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaArrowUp,
  FaCode,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);

  // Handle scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Handle mouse movement for the spotlight effect
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/mirzawajihali' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/mirzawajihali' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/mirzawajihali' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:your@email.com' }
  ];

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-base-200 overflow-hidden"
    >
      {/* Interactive spotlight effect */}
      <div 
        className="absolute opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4), transparent 40%)`,
          width: '100%',
          height: '100%',
          left: 0,
          top: 0
        }}
      />

      {/* Main footer content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              className="text-3xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaCode className="text-[#2dd4bf]" />
              <span>Mirza Wajih Ali</span>
            </motion.div>
            <p className="text-base-content/80 max-w-xs">
              Creating elegant digital experiences with modern web technologies. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#2dd4bf] pl-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="hover:text-[#2dd4bf] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#2dd4bf] pl-3">Get In Touch</h3>
            <motion.div 
              className="bg-base-300 p-4 rounded-lg transform transition duration-300 hover:translate-y-[-5px] hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-base-content/80 mb-2">Have a project in mind?</p>
              <Link 
                to="/contact" 
                className="btn btn-neutral btn-sm"
              >
                Let's Talk
              </Link>
            </motion.div>
            <p className="text-base-content/80">
              Based in Dhaka, Bangladesh
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#2dd4bf] pl-3">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-base-300 text-base-content hover:bg-gray-700 hover:text-[#2dd4bf]-content transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <motion.div 
                className="p-3 bg-base-300 rounded-lg"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
              >
                <p className="text-sm text-base-content/80">Join my newsletter for updates</p>
                <div className="join mt-2">
                  <input 
                    className="input input-sm join-item" 
                    placeholder="Email address"
                  />
                  <button className="btn btn-sm btn-neutral join-item">Subscribe</button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="divider my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom area */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-base-content/70"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Mirza Wajih Ali. All rights reserved.
          </motion.p>
         
        </div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-700 text-[#2dd4bf]-content shadow-lg z-50"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;