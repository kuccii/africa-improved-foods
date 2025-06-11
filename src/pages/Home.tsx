import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { Impact } from '../components/Impact';
import { Partnership } from '../components/Partnership';
import { News } from '../components/News';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Impact />
      <Partnership />
      <News />
      <Contact />
    </div>
  );
}; 