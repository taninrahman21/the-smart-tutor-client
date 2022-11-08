import React from 'react';
import img from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex h-[420px] w-5/6 mx-auto'>
      <div className='flex flex-col justify-center ml-10 items-center w-[40%]'>
        <h1 className='text-4xl font-bold'>MAKE ME GROW YOUR SKILLS,CHANGE YOUR LIFE</h1>
        <div className='mt-10'>
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-8 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Contact Me</button>
          <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">About Me</button>
        </div>
      </div>
      <div className='flex items-end w-full'>
        <img src={img} alt="teacherphoto" />
      </div>
      </div>
    </div>
  );
};

export default Banner;