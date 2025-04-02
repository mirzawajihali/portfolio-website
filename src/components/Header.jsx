import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Marquee from './Marquee';
import developer from "../assets/images/developer.png"
import project from "../assets/images/studentManagment.png"
import GitHubC from './GitHubC';
import SkillsSection from './SkillsSection';




const Header = () => {
  const [isHoveredCredentials, setIsHoveredCredentials] = useState(false);
  const [isHoveredProjects, setIsHoveredProjects] = useState(false);
  const [isHoveredEducation, setIsHoveredEducation] = useState(false);
  const [isHoveredProfiles, setIsHoveredProfiles] = useState(false);
  const [isHoveredWork, setIsHoveredWork] = useState(false);

  // Using motion directly to avoid linter error
  const MotionDiv = motion.div;

  return (
    <div className="py-8">
      {/* Marquee text for featured work */}
      <Marquee text="Passionate Web Developer | Creating Responsive & User-Friendly Websites | Let’s Build Something Amazing!" />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        {/* Profile Card - 3 cols */}
       
        <MotionDiv 
          className="bg-base-300 rounded-3xl p-6 flex flex-col md:col-span-3 lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <img 
              src={developer} 
              alt="Mirza Wajih Ali" 
              className="w-48 h-48 object-cover rounded-full bg-blue-100 mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/200x200/blue/white?text=M+W+A";
              }}
            />
          </div>
          <div className="mb-6">
            <p className="text-sm text-base-content/70 uppercase">A WEB DESIGNER</p>
            <h1 className="text-3xl font-bold mb-2">Mirza Wajih Ali.</h1>
            <p className="text-sm text-base-content/70">
            Hi, I'm a
Full Stack Developer
I'm passionate about creating intuitive and impactful web applications that solve real-world problems. With expertise in both frontend and backend technologies.
            </p>
          </div>
          <div className="mt-auto flex justify-end">
            <MotionDiv
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MotionDiv>
          </div>
        </MotionDiv>
        

        

      

        {/* Projects Card - 2 cols */}
        <MotionDiv 
          className="bg-base-300 rounded-3xl p-6 flex flex-col md:col-span-3 lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={() => setIsHoveredProjects(true)}
          onMouseLeave={() => setIsHoveredProjects(false)}
        >
          <div className="mb-4 flex justify-center">
            <img 
              src="https://i.ibb.co.com/spGy70B6/Screenshot-2025-03-29-221149.png"
              alt="Project" 
              className="h-44 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/200x100/gray/white?text=Project";
              }}
            />
          </div>
          <div className="mt-auto">
            <p className="text-sm text-base-content/70 uppercase">SHOWCASE</p>
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="mt-4 flex justify-end">
            <motion.a
            href="/works"
            target="_blank"
              whileHover={{ rotate: 90 }}
              animate={{ rotate: isHoveredProjects ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
        </MotionDiv>

         {/* Profiles Card - 2 cols */}
         <MotionDiv 
          className=" flex gap-6 flex-col md:col-span-2 lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseEnter={() => setIsHoveredProfiles(true)}
          onMouseLeave={() => setIsHoveredProfiles(false)}
        >
          <div className="bg-base-300 rounded-3xl  p-10 ">
          <div className="grid grid-cols-5 gap-4 mb-8">
        {/* Github */}
        <a 
          href="https://dribbble.com/mirzawajihali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-base-300 rounded-full p-4 flex items-center justify-center hover:bg-base-300 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      
        {/* Twitter */}
        <a 
          href="https://twitter.com/mirzawajihali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-base-300 rounded-full p-4 flex items-center justify-center hover:bg-base-300 transition-colors"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
      
        {/* Facebook */}
        <a 
          href="https://facebook.com/mirzawajihali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-base-300 rounded-full p-4 flex items-center justify-center hover:bg-base-300 transition-colors"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      
        {/* Instagram */}
        <a 
          href="https://instagram.com/mirzawajihali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-base-300 rounded-full p-4 flex items-center justify-center hover:bg-base-300 transition-colors"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/mirzawajihali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-base-300 rounded-full p-4 flex items-center justify-center hover:bg-base-300 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
          <div className="my-auto">
            <p className="text-sm text-base-content/70 uppercase">STAY WITH ME</p>
            <h2 className="text-2xl font-bold">Profiles</h2>
          </div>
        </div>
      
  <div className="bg-base-300 rounded-3xl p-10 " >
  <div className="flex-grow flex flex-col justify-between mt-3">
    <div className="flex md:flex-row flex-col justify-around gap-8 w-full">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">07</span>
        <span className="text-xs uppercase text-base-content/70">YEARS EXPERIENCE</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">+125</span>
        <span className="text-xs uppercase text-base-content/70">CLIENTS WORLDWIDE</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">+210</span>
        <span className="text-xs uppercase text-base-content/70">TOTAL PROJECTS</span>
      </div>
    </div>
    <div className="mt-4 flex justify-end">
      <MotionDiv
        whileHover={{ rotate: 90 }}
        animate={{ rotate: isHoveredWork ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </MotionDiv>
    </div>
  </div>
  </div>
        </MotionDiv>

        {/* Education Card - 2 cols */}
        <MotionDiv 
          className="bg-base-300 rounded-3xl p-6 flex flex-col md:col-span-4 lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onMouseEnter={() => setIsHoveredEducation(true)}
          onMouseLeave={() => setIsHoveredEducation(false)}
        >
          <div className="mb-4 flex justify-center">
            <div className="bg-base-300 p-4 rounded-full">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 9L12 15L22 9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9V15M7 12V18L12 21L17 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-base-content/70 uppercase">BACKGROUND</p>
            <h2 className="text-2xl font-bold">Education</h2>
            <h2 className="text-xl font-semibold">B.Sc in Computer Science & Engineering

            </h2>
            <p>Rajshahi University of Engineering & Technology

              2020 - Present</p>
          </div>
          <div className="mt-4 flex justify-end">
            <MotionDiv
              whileHover={{ rotate: 90 }}
              animate={{ rotate: isHoveredEducation ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MotionDiv>
          </div>
        </MotionDiv>


          {/* Credentials Card - 2 cols */}
          <MotionDiv 
          className="bg-base-300 rounded-3xl p-6 flex flex-col md:col-span-3 lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseEnter={() => setIsHoveredCredentials(true)}
          onMouseLeave={() => setIsHoveredCredentials(false)}
        >
          <div className="mb-4 flex justify-center">
            <img 
              src="/signature.png" 
              alt="Signature" 
              className="h-24 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/200x100/gray/white?text=Signature";
              }}
            />
          </div>
          <div className="mt-auto">
            <p className="text-sm text-base-content/70 uppercase">MORE ABOUT ME</p>
            <h2 className="text-2xl font-bold">Credentials</h2>
          </div>
          <div className="mt-4 flex justify-end">
            <MotionDiv
              whileHover={{ rotate: 90 }}
              animate={{ rotate: isHoveredCredentials ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Services Card - 4 cols */}
        <MotionDiv 
          className="bg-base-300 rounded-3xl p-6 flex flex-col md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-base-300 rounded-full p-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="bg-base-300 rounded-full p-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="bg-base-300 rounded-full p-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5C3.89543 20.9999 3 20.1045 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1045 20.1046 20.9999 19 21H15M12 12H12.01M16 12H16.01M8 12H8.01M12 16H12.01M16 16H16.01M8 16H8.01M12 8H12.01M16 8H16.01M8 8H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="bg-base-300 rounded-full p-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 21C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9Z" fill="currentColor"/>
                <path d="M10 13L6 17H17L12 12L10 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-base-content/70 uppercase">SPECIALIZATION</p>
            <h2 className="text-2xl font-bold">Services Offering</h2>
          </div>
          <div className="mt-4 flex justify-end">
            <MotionDiv
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="bg-base-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MotionDiv>
          </div>
        </MotionDiv>


        <MotionDiv 
  className="bg-base-300 rounded-3xl p-6 w-full flex flex-col  justify-center  md:col-span-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
  onMouseEnter={() => setIsHoveredWork(true)}
  onMouseLeave={() => setIsHoveredWork(false)}
>
        <GitHubC></GitHubC>

        </MotionDiv>


       




<MotionDiv 
  className=" rounded-3xl p-6 w-full flex gap-10 flex-col lg:flex-row  justify-center  md:col-span-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
  onMouseEnter={() => setIsHoveredWork(true)}
  onMouseLeave={() => setIsHoveredWork(false)}
>
      
<div className="bg-base-300 p-6 rounded-3xl lg:w-1/2  ">
  
<SkillsSection></SkillsSection>
</div>


<div className="text-5xl text-center rounded-3xl bg-base-300 p-6  lg:w-1/2 font-bold">
      Let's work <span className="text-[#2dd4bf]">together.</span>
    </div>

        </MotionDiv>


      </div>
             
    </div>
  );
};

export default Header; 