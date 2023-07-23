import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero = ({ heading, message }) => {
  // Definiere den Stil für das Hintergrundbild
  const backgroundStyle = {
    backgroundImage: 'url(/main.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',  // Das Bild wird immer zentriert dargestellt
  };

  return (
    <div style={backgroundStyle} className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <div className='flex justify-center'>
          <FaInstagram
            onClick={() => window.open('https://www.instagram.com/bearson.tattoo/', '_blank')}
            className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
            size={100}
          />
          <FaWhatsapp
            onClick={() => window.open('https://wa.me/+4916091208750', '_blank')}
            className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
            size={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
