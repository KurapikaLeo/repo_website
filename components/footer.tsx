import React from 'react';


export default function Footer() {
  return (
    <footer className='relative text-gray-700 py-10'>
      <div className='absolute bottom-[-15rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#fbe2e3] dark:bg-[#946263]'></div>
      <div className='absolute bottom-[15rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#dbd7fb] dark:bg-[#676394]'></div>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 dark:text-gray-50'>
          <h1 className='text-4xl font-bold opacity-10 absolute inset-0 flex items-center justify-center dark:text-gray-50 '>
            Justyna
          </h1>
          </div>

        <div className='border-t border-purple-200 pt-8'>
          
          <div className='text-center mt-4 dark:text-gray-50'>
            <small className='mb-2 text-xs block'>
              &copy; 2024 All rights reserved.  
            </small>
            <p className='text-xs'>
              <span className='font-semibold'>About this website: </span> built with React & Next.js. My personal website. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}