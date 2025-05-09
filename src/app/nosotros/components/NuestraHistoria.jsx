'use client';
import Image from 'next/image';
import React from 'react'

export default function NuestraHistoria() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row h-full items-center justify-center">
        {/* Columna izquierda */}
        <div className="flex items-center justify-center w-full h-full lg:w-1/2 p-6">
          <p className="text-center">
            <span className="font-black text-2xl">Nuestra Historia</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            commodi explicabo earum odio repellat ducimus obcaecati doloremque?
            Labore nobis, veniam, ipsam temporibus quidem voluptatibus illo
            magnam dolor natus eum eaque atque! Sapiente ipsam quos voluptate
            nostrum deserunt! Quo, reprehenderit. Sed. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Veniam iure nemo perferendis
            magni magnam. Adipisci explicabo nam dicta commodi in culpa minima
            asperiores, tempora nemo temporibus! Fugiat omnis, saepe quia ea,
            quasi delectus eveniet cumque voluptatum quibusdam libero et nisi
            nam! Commodi sint minima molestias expedita nam possimus aliquam
            voluptatem. Repellat magni, sequi, id ipsam explicabo hic
            praesentium iste accusamus autem fugiat sint nisi doloremque ex
            quaerat ad libero, cum consequatur aperiam et a temporibus ullam
            porro rerum animi. 
            <br /><br />
            Ex. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veritatis eum impedit molestias quidem. Accusamus
            aliquid repudiandae hic quod, unde, pariatur repellendus sunt magni
            velit sed totam molestiae aut similique laboriosam labore nobis
            facilis aliquam voluptas optio quas incidunt cum temporibus debitis
            ipsa? Placeat eligendi porro perferendis enim a? Officia, pariatur
            reiciendis itaque, velit, iure asperiores architecto nemo iste rem
            molestias culpa provident quo ullam quos quasi voluptatum? Assumenda
            sint incidunt qui totam provident! Alias quisquam ea, ab adipisci
            facere accusamus vitae labore tempora officiis aperiam ratione nobis
            ipsa libero! Optio ut fuga sed laudantium aliquid vitae natus.
            Ratione, dolore ad.
          </p>
        </div>

        {/* Columna derecha */}
        <div className=" flex items-center justify-center w-full h-full lg:w-1/2">
          <Image
            src="https://placehold.co/600x400?text=FOTO"
            alt="placeholder"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
