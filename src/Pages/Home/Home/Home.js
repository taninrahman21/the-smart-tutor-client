import React from 'react';
import { useEffect } from 'react';
import About from '../../Shared/About/About';
import Contact from '../../Shared/Contact/Contact';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  useEffect( () => {
    document.title = 'Home - The Smart Tutor';
  }, [])
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;