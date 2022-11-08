import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex h-[620px] w-5/6 mx-auto'>
      <div className='flex flex-col justify-center ml-10 w-[45%]'>
        <h1 className='text-5xl font-bold'>MAKE ME GROW YOUR SKILLS, CHANGE YOUR LIFE</h1>
        <div className='mt-10'>
          <Link to='/contact'>
          <button type="button" class="focus:outline-none text-white bg-[#3f6c51] hover:bg-[#365e45] focus:ring-4 focus:ring-red-300 font-medium text-base px-5 py-2.5 mr-8">Contact Me</button>
          </Link>
          <Link to='/about'>
          <button type="button" class="focus:outline-none text-white bg-[#9c380c] hover:bg-[#912f06] font-medium text-base px-5 py-2.5 mr-2 mb-2 ">About Me</button>
          </Link>
         
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