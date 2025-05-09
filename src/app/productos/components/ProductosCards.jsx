"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "animate.css/animate.min.css";

const productos = [
  {
    nombre: "Producto/Servicio 1",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum dolorum, quos quis dolores accusantium totam nihil odit itaque tempora quam, ipsum minus.",
    imagen: "https://placehold.co/400x300?text=FOTO1",
  },
  {
    nombre: "Producto/Servicio 2",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imagen: "https://placehold.co/400x300?text=FOTO2",
  },
  {
    nombre: "Producto/Servicio 3",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum dolorum, quos quis dolores accusantium totam nihil.",
    imagen: "https://placehold.co/400x300?text=FOTO3",
  },
  {
    nombre: "Producto/Servicio 4",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum dolorum, quos quis dolores accusantium totam nihil odit itaque tempora quam, ipsum minus.",
    imagen: "https://placehold.co/400x300?text=FOTO4",
  },
  {
    nombre: "Producto/Servicio 5",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum dolorum, quos quis dolores accusantium totam nihil odit.",
    imagen: "https://placehold.co/400x300?text=FOTO5",
  },
  {
    nombre: "Producto/Servicio 6",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum dolorum, quos quis dolores accusantium totam nihil odit itaque tempora quam, ipsum minus.",
    imagen: "https://placehold.co/400x300?text=FOTO6",
  },
];

export default function ProductosCards() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section
    ref={ref}
    className={`max-w-7xl mx-auto px-4 py-16 ${isInView ? " animate__animated animate__fadeInUp animate__slow opacity-100" : "opacity-0"}`}>
      <h2 className="text-3xl font-bold text-center mb-12">
        Nuestros Productos/Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productos.map((producto, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold mb-1">{producto.nombre}</h3>
              <p className="text-gray-600 text-sm">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-7xl mx-auto bg-gray-300 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="https://placehold.co/600x400?text=FOTO"
            alt="placeholder"
            width={600}
            height={400}
            className=""
          />
        </div>
        <div className="flex justify-start items-center">
          <p className="pe-2.5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            nostrum dolorum, quos quis dolores accusantium totam nihil odit
            itaque tempora quam, ipsum minus. <br /><br /> Aliquid distinctio provident minus
            ipsam fugit omnis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ullam sint. Porro iusto veritatis ea ipsum cum dolorum quod asperiores. <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae aspernatur similique ullam sed esse quia doloribus obcaecati vel at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eos qui maiores obcaecati iste ad minus eligendi nisi? Nihil, facere!
          </p>
        </div>
      </div>
    </section>
  );
}
