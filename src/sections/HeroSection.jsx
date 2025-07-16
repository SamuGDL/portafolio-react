import { useState } from "react";
import Profile1 from "../assets/img/Profile1.jpeg";
import ProjectSection from "./ProjectSection";
export default function HeroSection() {
  const [click, setClick] = useState(0);
  const count = () => {
    setClick(click + 1);
    console.log(click);
  };
  return (
    <>
      <section
        className="
      min-h-screen
      flex flex-col 
      justify-center 
      items-center 
      p-6 md:p-16 
      bg-gradient-to-br from-blue-50 to-cyan-100 
      text-gray-800
    "
      >
        <div
          className="
        max-w-4xl 
        w-full 
        mx-auto 
        flex 
        flex-col md:flex-row 
        items-center 
        gap-10 md:gap-16 
        text-center md:text-left 
      "
        >
          <div
            className="
          flex-shrink-0 
          w-48 h-48 md:w-64 md:h-64
          rounded-full
          overflow-hidden 
          shadow-xl 
          border-4 border-white 
          transition-transform duration-300 hover:scale-105 
        "
          >
            <img
              src={Profile1}
              className="object-cover w-full h-full"
              alt="Imagen de perfil de Samuel"
            />
          </div>

          <div>
            <p
              className="
            text-4xl md:text-5xl lg:text-6xl 
            font-extrabold 
            leading-tight 
            text-blue-700 
            mb-4 md:mb-6 
          "
            >
              ¡Hola! Soy Samuel,
              <span className="block md:inline-block text-cyan-600">
                desarrollador web Front-End
              </span>
            </p>
            <p
              className="
            text-lg md:text-xl 
            text-gray-600 
            mb-6 md:mb-8 
            leading-relaxed 
          "
            >
              Estudiante autodidacta de programación, enfocado en el desarrollo
              Web Front-End. Mi enfoque es crear componentes reutilizables y
              mejoras de optimización para crear aplicaciones con diseños
              intuitivos y estéticamente agradables para una mejor experiencia
              de usuario.
            </p>
            <button
              onClick={count}
              className="
              px-8 py-3 
              bg-blue-600 
              text-white
              font-semibold 
              rounded-full 
              shadow-md 
              hover:bg-blue-700 
              transition-colors duration-300 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
            "
            >
              Descargar CV
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cyan-100 p-6 flex flex-col ">
        <div className="w-full my-4">
          <p className="my-5 text-center md:text-left text-4xl font-bold">
            Articulos recientes
          </p>

          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-7 md:gap-4">
            <div className="p-2 shadow-md  bg-gray-50 rounded-md">
              <p className="text-2xl font-bold">
                Making a design system from scratch
              </p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis accusamus alias illum, animi eaque similique sunt est
              maxime nostrum eos voluptatibus beatae facere inventore nisi
              reprehenderit, ipsa voluptatum minus quod?
            </div>
            <div className="p-2 shadow-md  bg-gray-50 rounded-md">
              <p className="text-2xl font-bold">
                Creating pixel perfect icons in Figma
              </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, temporibus. Fugiat voluptatem accusantium similique,
              cumque alias voluptates quis dolorum, ratione, minima nisi
              aliquid. Nulla quas architecto quis mollitia non consectetur.
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 flex flex-col">
        <p className="my-5 text-center md:text-left text-4xl font-bold">
          Trabajos recientes
        </p>
        <ProjectSection limit={2} showMoreB={true} />
      </section>
    </>
  );
}
