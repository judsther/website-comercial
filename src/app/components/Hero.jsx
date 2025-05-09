// export default function Hero() {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{ backgroundImage: "url('https://placehold.co/600x400/000000/FFF')" }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <h1 className="text-white text-5xl font-bold">Nombre Empresa</h1>
//       </div>
//     </section>
//   );
'use client';
import "animate.css/animate.min.css";

// }
export default function Hero({ title, backgroundImage }) {

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center px-4 animate__animated animate__fadeInDown">
          {title}
        </h1>
      </div>
    </section>
  );
}
