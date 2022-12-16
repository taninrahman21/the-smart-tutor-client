import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col-reverse justify-center lg:flex-row xl:h-[620px] w-5/6 mx-auto'>

      <div className='flex mt-5 pb-5 flex-col justify-center lg:w-[45%]'>
        <h1 className='text-3xl text-center lg:text-start xl:text-5xl font-bold'>MAKE ME GROW YOUR SKILLS, CHANGE YOUR LIFE</h1>
        <div className='mt-10 flex justify-center lg:justify-start'>
          <Link to='/contact'>
          <button type="button" className="text-white bg-[#3f6c51] hover:bg-[#365e45] font-medium text-base px-2 md:px-3 xl:px-5 py-2.5 mr-5 mb-3 lg:mb-0">Contact Me</button>
          </Link>
          <Link to='/about'>
          <button type="button" className="focus:outline-none text-white bg-[#9c380c] hover:bg-[#912f06] font-medium text-base px-2 md:px-3 xl:px-5 py-2.5 mb-2 ">About Me</button>
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