import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [image, setImage] = useState('/logow.png')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setImage('/logob.png');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setImage('/logow.png');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 2 }}
      
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-30 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between py-4 items-center text-white'>
      <Link href='/'>
        <a className='flex items-center'>
        <img src={image}/>

         <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
          Bearson Tattoo
  </h1>
       
        </a>
      </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Galerie</Link>
          </li>
          <li className='p-4'>
            <Link href='/#impressum'>Impressum</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Galerie</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#impressum'>Impressum</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

