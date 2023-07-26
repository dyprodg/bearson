import React from 'react'
import IgImg1 from '../public/insta1.jpeg';
import IgImg2 from '../public/insta4.jpeg';
import IgImg3 from '../public/insta2.jpeg';
import IgImg4 from '../public/insta5.jpeg';
import IgImg5 from '../public/insta3.jpeg';
import IgImg6 from '../public/insta7.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold text-white'>Folge mir auf Instagram!</p>
        <p className='pb-4 text-white text-xl'>@bearson.tattoo</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram