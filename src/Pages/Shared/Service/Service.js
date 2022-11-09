import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {name, description, image, _id} = service;
  return (
    <div className='border rounded-sm shadow-sm p-4'>
      <img className='h-[200px] w-full rounded-sm' src={image} alt="courseimg" />
      <h1 className='text-2xl font-semibold mt-3'>{name}</h1>
      <p className='text-justify'>{description.length < 10 ? description : description.slice(0,100)+'...'}</p>
      <div className="mt-2 flex justify-center">
        <Link to={`/service/${_id}`} className="w-full text-center focus:outline-none text-white bg-[#3f6c51] hover:bg-[#365e45] font-medium px-5 py-2">See Details</Link>
        </div>
    </div>
  );
};

export default Service;