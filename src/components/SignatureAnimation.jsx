import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SignatureAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let points = [];
    let animationFrame;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Signature path coordinates - customize this to match your signature
    const signaturePath = [
      [0.2, 0.5], [0.25, 0.45], [0.3, 0.4], [0.35, 0.38], [0.4, 0.4], 
      [0.45, 0.45], [0.5, 0.5], [0.55, 0.55], [0.6, 0.6], [0.65, 0.55], 
      [0.7, 0.5], [0.75, 0.45], [0.8, 0.5], [0.85, 0.55], [0.9, 0.5],
    ];
    
    // Convert relative coordinates to actual canvas coordinates
    const getCanvasCoordinates = (relX, relY) => {
      return [relX * canvas.width, relY * canvas.height];
    };
    
    // Draw the signature
    const drawSignature = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // If we have points to render
      if (points.length > 0) {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
    };
    
    // Animate the signature drawing
    const animateSignature = () => {
      let progress = 0;
      const totalPoints = signaturePath.length;
      const speed = 0.01; // Speed of drawing
      
      const animate = () => {
        if (progress < 1) {
          progress += speed;
          
          // Calculate how many points to show
          const pointsToShow = Math.floor(progress * totalPoints);
          points = signaturePath
            .slice(0, pointsToShow)
            .map(([relX, relY]) => getCanvasCoordinates(relX, relY));
          
          drawSignature(progress);
          animationFrame = requestAnimationFrame(animate);
        } else {
          // Animation complete - add final flourish if desired
          ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
          ctx.shadowBlur = 8;
          drawSignature(1);
        }
      };
      
      animate();
    };
    
    // Start animation with a slight delay
    const timer = setTimeout(() => {
      animateSignature();
    }, 500);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div 
      className="relative my-12 w-full max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-4 text-lg font-light text-gray-500">
        Mirza Wajih Ali
      </div>
      <canvas 
        ref={canvasRef} 
        className="w-full h-32 cursor-pointer"
        style={{ 
          background: 'rgba(0, 0, 0, 0.03)', 
          borderRadius: '0.5rem' 
        }}
      />
    </motion.div>
  );
};

export default SignatureAnimation;