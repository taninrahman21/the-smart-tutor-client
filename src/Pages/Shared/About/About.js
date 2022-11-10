import React from 'react';
import img from '../../../assets/about.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const About = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row w-5/6 justify-between mx-auto my-20'>
        <div className='w-full md:w-2/4 mb-5 md:mb-0'>
          <p className='text-gray-700 mb-3'>About Me</p>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Professor, Private Tutoring, Consulting & Lecturer</h1>
          <p className='mt-3 text-2xl text-justify'>I am a Professor, Private Tutor, Consulter & Lecturer.I was born on 1988.And Finished education from Havard University.Then Join as Professor.After joining I've achived a lot of success.</p>
          <ul className='flex mt-6'>
            <li className='text-2xl hover:bg-gray-100 p-2'><FaFacebook/></li>
            <li className='ml-5 text-2xl hover:bg-gray-100 p-2'><FaInstagram/></li>
            <li className='ml-5 text-2xl hover:bg-gray-100 p-2'><FaTwitter/></li>
            <li className='ml-5 text-2xl hover:bg-gray-100 p-2'><FaYoutube/></li>
          </ul>
        </div>
        <div className='ml-10'>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;