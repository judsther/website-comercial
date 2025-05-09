import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Valores from "./components/Valores";
import "bootstrap-icons/font/bootstrap-icons.css";
import Imperdibles from "./components/Imperdibles";


export default function Home() {
  return (
 
    <div className="">
      <Navbar />
      <Hero
        title="Nombre Empresa"
        backgroundImage="https://placehold.co/1200x600/232323/ffffff?text=FOTO"
      />
      <Imperdibles />
      <Valores />
      <Footer />
    </div>
  );
}
