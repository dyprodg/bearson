import React, { useState } from 'react';

const Impressum = () => {


  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover font-sans font-thin'>
      <footer id='impressum' className='bg-black text-white py-4'>
        <div className='container mx-auto px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row justify-center'>
            <p className='text-center sm:text-left'>&copy; {new Date().getFullYear()}</p>
          </div>
          <div className='flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4 text-xs'>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='text-lg font-bold mb-2 text-white'>Impressum</h4>
              <p>This</p>
              <p>is</p>
              <p>just</p>
              <p>a Portfolio work</p>
            </div>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='text-lg font-bold mb-2 text-white'>Kontakt</h4>
              <p>This</p>
              <p>is</p>
              <p>just</p>
              <p>a Portfolio work</p>
            </div>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='font-bold mb-2 text-white text-lg'>Weitere Infos</h4>
              <p>This</p>
              <p>is</p>
              <p>just</p>
              <p>a Portfolio work</p>
              <p></p>
              
          
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
