import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleMobileLinkClick = () => {
    setMenu(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-black text-2xl font-bold  hover:text-cyan-600"
          onClick={menu ? handleMobileLinkClick : undefined}
        >
          Mi Portafolio
        </Link>
        <div className="md:hidden text-black  hover:text-cyan-600">
          <button
            className=" focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* MENU PANTALLAS GRANDES */}

        <div className="hidden md:flex space-x-6 text-black">
          <Link to="/about" className=" hover:text-cyan-600 text-lg">
            Acerca de Mí
          </Link>
          <Link to="/projects" className="  hover:text-cyan-600 text-lg">
            Proyectos
          </Link>
          <Link to="/contact" className="  hover:text-cyan-600 text-lg">
            Contacto
          </Link>
        </div>
      </div>

      {/* MENÚ PANTALLAS PEQUEÑAS */}

      <div
        className={`md:hidden bg-transparent text-black mt-4 py-2 ${
          menu ? "block" : "hidden"
        }`}
      >
        <Link
          to="/about"
          className="block px-4 py-2 text-lg hover:bg-gray-100"
          onClick={handleMobileLinkClick}
        >
          Acerca de Mí
        </Link>
        <Link
          to="/projects"
          className="block px-4 py-2 text-lg"
          onClick={handleMobileLinkClick}
        >
          Proyectos
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-lg"
          onClick={handleMobileLinkClick}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
