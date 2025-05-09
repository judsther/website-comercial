'use client';
import { useInView } from "framer-motion";
import { useRef } from "react";
import "animate.css/animate.min.css";

const products = [
  {
    name: "Producto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas cumque a.",
    image: "https://placehold.co/600x400/FFF/000000?text=PRODUCTO",
  },
  {
    name: "Producto 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, harum.",
    image: "https://placehold.co/600x400/FFF/000000?text=PRODUCTO",
  },
  {
    name: "Producto 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veniam, tenetur veritatis explicabo ex ullam ut error atque.",
    image: "https://placehold.co/600x400/FFF/000000?text=PRODUCTO",
  },
];

export default function Imperdibles() {
    const ref1 = useRef(null);
  //const ref2 = useRef(null);

  const isInView1 = useInView(ref1, {once: true});
  //const isInView2 = useInView(ref2, {once: true});

  return (
    <section
      ref={ref1}
      className={`py-16 bg-white ${
        isInView1
          ? "animate__animated animate__fadeInUp animate__slow opacity-100"
          : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Los Imperdibles</h2>
      <div className="max-w-6xl mx-1 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded border-gray-200 border-2"
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

