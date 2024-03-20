import React from 'react';
import Hero from '../general/hero/Hero';
import AppDemo from '../general/appDemo/AppDemo';
import ScrollingBanner from '../general/scorllingBanner/ScrollingBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollingBanner />
      <AppDemo />
    </>
  )
}

export default Home