import React from 'react';

const UpdateReview = () => {
  return (
    <div className='w-3/4 mx-auto mt-10'>
      <h1 className='text-center font-semibold text-2xl'>Update Your Review</h1>
      <h2 className='mt-3'>Service Name:</h2>
      <textarea name="" className='w-1/2 block'></textarea>
      <button className='text-white bg-green-600 hover:bg-green-700 font-medium text-base px-4 py-1 mt-2'>Update</button>
    </div>
  );
};

export default UpdateReview;