import React from 'react';

const Service = ({service}) => {
  console.log(service);
  const {name, price, description, image} = service;
  return (
    <div className='border rounded-sm shadow-sm p-4'>
      <img className='h-[180px] rounded-sm' src={image} alt="courseimg" />
      <h1 className='text-2xl font-semibold mt-3'>{name}</h1>
      <p className='text-justify'>{description.length < 10 ? description : description.slice(0,100)+'...'}</p>
    </div>
  );
};

export default Service;