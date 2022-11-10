import React from 'react';
import { useState } from 'react';

const AddService = () => {
  const [service, setService] = useState({});

  
  const handleAddService = event => {
    event.preventDefault();
    console.log(service);
    
    fetch('https://the-smart-tutor-server.vercel.app/allservices', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(service)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
      if(data.acknowledged){
        
      }
  }).catch(err => console.error(err))

  }
  const handleInputBlur = event =>{
    const field = event.target.name;
    const value = event.target.value;
    const newService = {...service}
    newService[field] = value;
    setService(newService);
}
  return (
    <div className='py-20 bg-gray-100'>
       <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Add A New Reviews</h1>
        <div className="h-1 w-10 bg-red-500 mx-auto mt-4"></div>
      </div>
<form onSubmit={handleAddService} className='w-5/6 mx-auto'>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Name</label>
            <input onBlur={handleInputBlur}  type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write service name" required/>
        </div>
       
        <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Price</label>
            <input onBlur={handleInputBlur}  type="text" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add service price" required/>
        </div>  
        
        <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service photoURL</label>
            <input  onBlur={handleInputBlur} type="url" name='image'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add photoURL" required/>
        </div>
        <div>
            <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ratings</label>
            <input onBlur={handleInputBlur}  type="number" name='ratings' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ratings" required/>
        </div>
        <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Description</label>
            <textarea onBlur={handleInputBlur} name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           placeholder='Add a short service discription...' required></textarea>
        </div>
    </div>
    <div className='flex justify-center'>
    <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-20 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Service</button>
    </div>
   
</form>

    </div>
  );
};

export default AddService;