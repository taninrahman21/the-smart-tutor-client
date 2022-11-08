import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/services')
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
      
        <div className="mt-5 flex justify-center">
        <Link to='/services' className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 dark:focus:ring-yellow-900">See All Services</Link>
        </div>

    </div>
  );
};

export default Services;
