import React, { useEffect, useState } from 'react';
import Service from '../Shared/Service/Service';

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/allservices')
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(error => console.error(error))
  }, [])
  
  return (
    <div className="my-10">
      <div className="text-center">
        <p>My Services</p>
        <h1 className="text-4xl font-bold">What I Do?</h1>
        <div className="h-1 w-10 bg-red-500 mx-auto mt-4"></div>
      </div>
      <div className='grid grid-cols-3 gap-5 w-5/6 mx-auto mt-10'>
        {
          services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>

     </div>
)};

export default AllServices;