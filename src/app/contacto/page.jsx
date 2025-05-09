'use client';
import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import MailForm from './components/MailForm';
import Socials from './components/Socials';
import Footer from '../components/Footer';

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero
        backgroundImage={
          "https://placehold.co/1200x600/232323/ffffff?text=CONTÁCTANOS"
        }
        title="Placeholder"
      />
      <Socials />
      <MailForm />
      <Footer/>
    </div>
  );
}
