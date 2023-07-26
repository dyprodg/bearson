import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = ({ heading, message }) => {
  // Definiere den Stil für das Hintergrundbild
  const backgroundStyle = {
    backgroundImage: 'url(/main.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',  
    width: '100%',
    height: '100vh',
    position: 'absolute',
    zIndex: '1',
  };

  return (
    <motion.div className='relative overflow-hidden h-screen'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}>
      <div style={backgroundStyle}></div>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-10' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-2xl'>{message}</p>
        </div>
        <div className='flex justify-center mt-10'>
          <FaInstagram
            onClick={() => window.open('https://www.instagram.com/bearson.tattoo/', '_blank')}
            className='cursor-pointer hover:scale-110 transition-all duration-200 mx-8'
            size={100}
          />
          <FaWhatsapp
            onClick={() => window.open('https://wa.me/+491789751672', '_blank')}
            className='cursor-pointer hover:scale-110 transition-all duration-200 mx-8'
            size={100}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
