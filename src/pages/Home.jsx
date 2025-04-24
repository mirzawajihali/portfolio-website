import React from 'react';
import Header from '../components/Header';
import SignatureAnimation from '../components/SignatureAnimation';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="container max-w-7xl mx-auto">
            <Header />
            
            <motion.div 
                className="py-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SignatureAnimation />
                
                <div className="text-center mt-10 max-w-2xl mx-auto">
                    <motion.p 
                        className="text-base text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Thank you for visiting my portfolio. Feel free to explore my work and get in touch!
                    </motion.p>
                </div>
            </motion.div>
            
            {/* Other home page content can go here */}
        </div>
    );
};

export default Home;