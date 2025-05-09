import React from 'react'
import ProductosCards from './components/ProductosCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero
title = "placeholder"
backgroundImage={"https://placehold.co/1200x600/232323/ffffff?text=PRODUCTS"}
      />
      <ProductosCards />
      <Footer/>
    </>
  );
}
