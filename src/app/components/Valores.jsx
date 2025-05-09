
"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "animate.css/animate.min.css";

const values = [
  {
    title: "Valor 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet voluptatem praesentium fugit, aut et fuga qui, neque similique quibusdam iste commodi?",
    image: "https://placehold.co/600x400/000000/FFF?text=FOTO",
  },
  {
    title: "Valor 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae totam nisi dolore cum repellendus nam nemo pariatur eligendi?",
    image: "https://placehold.co/600x400/000000/FFF?text=FOTO",
  },
];

export default function Valores() {

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {once: true});

  return (
    <section
      ref={ref2}
      className={`py-16 ${
        isInView2
          ? "animate__animated animate__fadeInLeft animate__slow opacity-100"
          : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center px-2 md:px-0"
          >
            <img
              src={value.image}
              alt={value.title}
              className="w-full md:w-1/2 h-64 object-cover rounded"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-2xl font-bold">{value.title}</h3>
              <p className="mt-2 text-gray-700">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
