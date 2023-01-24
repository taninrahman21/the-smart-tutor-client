import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
  const storedReview = useLoaderData();
  const newReview = useRef(null);

  const handleUpdate = () => {
    const review = newReview.current.value;
    const updateReview = { review };
    fetch(`https://the-smart-tutor-server.vercel.app/update/${storedReview._id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateReview)
    }).then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        toast.success('Successfully Updated');
      }
      console.log(data)
    });
  }

  return (
    <div className='w-3/4 mx-auto mt-10'>
      <h1 className='text-center font-semibold text-2xl'>Update Your Review</h1>
      <h2 className='my-3 text-xl font-semibold'>Service Name: {storedReview.serviceName}</h2>
      <textarea ref={newReview} className='w-1/2 block' placeholder='Write Your Review'></textarea>
      <button onClick={handleUpdate} className='text-white bg-green-600 hover:bg-green-700 font-medium text-base px-4 py-1 mt-2'>Update</button>
    </div>
  );
};

export default UpdateReview;