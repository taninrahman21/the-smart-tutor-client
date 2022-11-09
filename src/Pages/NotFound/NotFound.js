import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='my-20 text-center'>
      <p className='text-4xl mb-10 text-red-800 font-semibold text-center'>Ooops!! Page not Found!</p>
      <Link to='/home' className="text-white bg-[#3f6c51] hover:bg-[#365e45] font-medium text-base px-5 py-2.5">Back to home</Link>
    </div>
  );
};

export default NotFound;