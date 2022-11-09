import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect( () => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
    .catch(err => console.log(err));
  }, [user?.email])

  const handleDelete = id => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        const remaining = reviews.filter(review => review._id !== id);
        setReviews(remaining);
        toast.success('Review delete successfully!');
      }
    })
  }
  return (
    <div className='py-20 bg-gray-100'>
      <Toaster position="top-center" reverseOrder={false} />
       <div className="text-center">
        <h1 className="text-4xl font-bold">My Reviews</h1>
        <div className="h-1 w-10 bg-red-500 mx-auto mt-4"></div>
      </div>
      {
        reviews.length > 0 ?       <div className='w-5/6 mx-auto grid grid-cols-3 gap-10 my-5'>
        {
          reviews.map(review => <div key={review._id} className='border rounded-sm px-4 py-3 bg-gray-50'>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Name: {review.serviceName}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Review: {review.review}</p>
                  <div className='flex justify-between mt-3'>
                    <button className='text-white bg-[#3f6c51] hover:bg-[#365e45] font-medium text-base px-4 py-1'>Edit Review</button>
                    <button onClick={() => handleDelete(review._id)} className="text-white bg-[#9c380c] hover:bg-[#912f06] font-medium text-base px-4 py-1">Delete Review</button>
                  </div>
                 </div>)
        }
      </div> : <p className='text-center mt-20 text-3xl'>No reviews were added</p>
      }

    </div>
  );
};

export default MyReviews;