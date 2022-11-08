import React from 'react';
import About from '../../Shared/About/About';
import Contact from '../../Shared/Contact/Contact';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
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