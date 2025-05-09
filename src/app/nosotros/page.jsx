'use client';

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NuestraHistoria from "./components/NuestraHistoria";

export default function page() {
  return (
    <div>
        <Navbar/>
      <Hero
        title="placeholder"
        backgroundImage={
          "https://placehold.co/1200x600/232323/ffffff?text=NOSOTROS"
        }
      />
      <NuestraHistoria/>
      <Footer/>
    </div>
  );
}
