import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { LampContainer } from './ui/lamp';


const Layout = () => {
  // Apply dark theme by default when the component mounts
  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    localStorage.setItem('theme', savedTheme);
  }, []);

  return (
    <div className= " min-h-screen bg-base-200">
      <Navbar />
   
    <LampContainer className="">
     <main className="pt-24 mt-80 px-4 md:px-8 lg:px-12">
       
       <Outlet></Outlet>
       
 
       </main>
     </LampContainer>
    
      <Footer></Footer>
    </div>
  );
};

export default Layout; 