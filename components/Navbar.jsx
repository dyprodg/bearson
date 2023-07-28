import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [image, setImage] = useState('/logo.svg')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setImage('/logob.svg');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setImage('/logo.svg');
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
      className='fixed left-0 top-0 w-full z-30 ease-in'
    >
      <div className='max-w-[1240px] m-auto flex justify-between py-4 items-center text-white text-xl'>
      <Link href='/'>
        <a className='flex items-center'>
        <img src={image} style={{ width: '10%', height: 'auto' }}/>


         <h1 style={{ color: `${textColor}` }} className='font-bold thinoo whitespace-nowrap text-4xl sm:text-5xl'>
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
        <div onClick={handleNav} className='block sm:hidden z-10 pr-4'>
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

