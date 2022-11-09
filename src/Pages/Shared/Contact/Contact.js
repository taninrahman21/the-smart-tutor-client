import React from 'react';

const Contact = () => {
  return (
    <div className='bg-gray-100 py-24'>
      
<div className="w-5/6 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:px-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="">
      <p className='text-gray-700 mb-5 text-center'>Request Appointment</p>
        <h2 className="text-2xl font-medium text-gray-900 text-center">Make an Appointment With Me</h2>
        <div className='my-3'>
            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name*" required/>
        </div>
        <div className='mb-3'>
            <input type="text" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone Number*" required/>
        </div>
        <div className='mb-3'>
            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required/>
        </div>
        <div className='mb-4'>
            <input type='date' name="date" placeholder="Choose Date*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
       
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
    </form>
</div>

    </div>
  );
};

export default Contact;