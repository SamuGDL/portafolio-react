import Fondo1 from "../assets/img/Fondo1.png";
import css from "../assets/img/css.png";
import imgJs from "../assets/img/js.png";
import imgHtml from "../assets/img/html.png";
import imgReact from "../assets/img/react.png";
import imgTail from "../assets/img/tailwind.png";
import imgGit from "../assets/img/github.png";
import imgTrello from "../assets/img/trello.png";
import imgGith from "../assets/img/git.png";
import imgCecyt from "../assets/img/cecyt9.png";
import imgAca from "../assets/img/acatlan.png";
import imgUdem from "../assets/img/udemy.png";

export default function AboutMe() {
  return (
    <>
      <section className="bg-cyan-100 flex items-center justify-center h-screen py-10">
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 p-5 items-center">
          <div className="flex justify-center">
            <img
              src={Fondo1}
              alt="Acerca de mi"
              className="rounded w-72 h-72 object-cover"
            />
          </div>

          <div className="text-3xl text-center md:text-left">
            Como persona soy amante de la tecnología, me gusta aprender cosas
            nuevas relacionadas con la informática, los perros y la música. Me
            considero alguien bastante resiliente que da lo mejor de si en cada
            trabajo.
          </div>
        </div>
      </section>

      <p className="text-center font-bold py-5 text-4xl">Habilidades</p>
      <section className="py-10 md:flex">
        <div className=" mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={css}
              alt="Habilidad CSS"
              className="object-cover mx-auto"
            />
            <p className="text-center">CSS</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgJs}
              alt="Habilidad JS"
              className="object-cover mx-auto"
            />
            <p className="text-center">JS</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgHtml}
              alt="Habilidad HTML"
              className="object-cover mx-auto"
            />
            <p className="text-center">HTML</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgReact}
              alt="Habilidad React"
              className="object-cover mx-auto"
            />
            <p className="text-center">React</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgTail}
              alt="Habilidad Tailwind"
              className="object-cover mx-auto"
            />
            <p className="text-center">Tailwind</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgGit}
              alt="Habilidad Github"
              className="object-cover mx-auto"
            />
            <p className="text-center">Github</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgTrello}
              alt="Habilidad Trello"
              className="object-cover mx-auto"
            />
            <p className="text-center">Trello</p>
          </div>
          <div className="bg-gray-200 rounded-3xl p-4 hover:bg-gray-300">
            <img
              src={imgGith}
              alt="Habilidad Git"
              className="object-cover mx-auto"
            />
            <p className="text-center">Git</p>
          </div>
        </div>
      </section>

      <section className="p-10 flex flex-col bg-cyan-100">
        <p className="text-4xl font-bold text-center mb-15 text-gray-800">
          Formación
        </p>

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-15 items-end">
          <div className="">
            <img src={imgCecyt} alt="Formacion Cecyt 9" />
            <div className="text-center font-medium my-5 px-5">
              <p className="">
                Centro De Estudios Científicos y Tecnológicos 9 "Juan De Dios
                Bátiz Paredes"
              </p>
              <p className="">Técnico en Programación</p>
            </div>
          </div>
          <div className="">
            <img src={imgAca} alt="Formacion FES Acatlán" />
            <div className="text-center font-medium my-5 px-5">
              <p className="">Facultad De Estudios Superiores Acatlán UNAM</p>
              <p className="">Ingeniería Civil</p>
            </div>
          </div>
          <div className="">
            <img src={imgUdem} alt="Formacion Cursos Udemy" />
            <div className="text-center font-medium my-5 px-5">
              <p className="">Curso React/Node/SQL y varios</p>
              <p className="">Certificados de finalización de cursos</p>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center text-4xl font-bold py-10">Experiencia</p>
    </>
  );
}
