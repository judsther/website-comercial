import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 text-sm tracking-wide border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div>
          <h2 className="text-lg font-semibold mb-3 uppercase">
            Nombre empresa
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis arcu vel nunc tincidunt varius.
          </p>
        </div>

        {/* Columna 2: Menú principal */}
        <div>
          <h3 className="text-md font-semibold mb-3 uppercase">Servicios</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Lorem Link 1</Link>
            </li>
            <li>
              <Link href="#">Lorem Link 2</Link>
            </li>
            <li>
              <Link href="#">Lorem Link 3</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Boutiques */}
        <div>
          <h3 className="text-md font-semibold mb-3 uppercase">Sucursales</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Lugar</Link>
            </li>
            <li>
              <Link href="#">Lugar</Link>
            </li>
            <li>
              <Link href="#">Lugar</Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes sociales */}
        <div>
          <h3 className="text-md font-semibold mb-3 uppercase">Síguenos</h3>
          <div className="flex gap-4 text-xl text-gray-100">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Jud Developer. Todos los Derechos Reservados.
      </div>
    </footer>
  );
}
