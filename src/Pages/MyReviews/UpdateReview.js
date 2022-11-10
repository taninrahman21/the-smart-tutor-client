import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
  const storedReview = useLoaderData();
  
  const handleUpdate = event => {
    event.preventDefault();
    const newReview = event.target.review.value;
    console.log(newReview);

    fetch(`https://the-smart-tutor-server.vercel.app/${storedReview._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledge){
        toast.success("Succesfully Updated");
        event.target.reset();
      }
    })
}
  return (
    <div className='my-20'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Update Your Review</h1>
        <div className="h-1 w-10 bg-red-500 mx-auto mt-4"></div>
      </div>
        <div className='w-5/6 mx-auto mt-8'>
                 <h1 className='text-3xl font-semibold'>Service Name: {storedReview.serviceName}</h1>
                <form onSubmit={handleUpdate} className='mt-5'>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Review</label>
                  <textarea name='review' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='Add a new review....'></textarea>
                  <button type='submit' className={`text-white mt-3 bg-[#9c380c] hover:bg-[#912f06] font-medium text-base px-4 py-1 `}>Update Review</button>
                 </form>
            </div>
    </div>
  );
};

export default UpdateReview;