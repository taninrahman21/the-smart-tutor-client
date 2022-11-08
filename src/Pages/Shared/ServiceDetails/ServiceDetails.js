import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const {name, price, image, description, ratings} = useLoaderData();
  return (
    <div className='w-5/6 mx-auto mt-8'>
      <img className='h-[250px] w-2/4 mx-auto' src={image} alt="" />
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>Ratings: {ratings}</p>
      <p>About Service: {description}</p>
    </div>
  );
};

export default ServiceDetails;