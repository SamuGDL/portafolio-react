import guitarLaR from "../assets/img/projects/guitarLAReducer.png";
import calculadoraC from "../assets/img/projects/calculadoraCalorias.png";
import calculadoraP from "../assets/img/projects/calculadoraPropinas.png";
import guitarLa from "../assets/img/projects/guitarLa.png";
import super6 from "../assets/img/projects/superSeis.png";
import sassP from "../assets/img/projects/sassPersonal.png";

const projects = [
  {
    id: 1,
    title: "Guitar LA - UseReducer",
    description:
      "Tienda online de guitarras. Este proyecto fue mejorado usando el hook de UseReducer y con esto se reduce el codigo y se maneja más general el estado de la aplicación. Aún se sigue con el uso de TS para mayor seguridad y escalabilidad en terminos de variables. Se utilizó Tailwind para mejor experiencia en todos los dispositivos. Contiene LocalStorage para que al recargar la pagina no se pierdan los articulos guardados en el carrito.",
    image: guitarLaR,
    technologies: [
      "JSX",
      "Hooks",
      "TypeScript",
      "HTML",
      "Tailwind",
      "LocalStorage",
    ],
    liveUrl: "https://guitarlaxd-usereducer-ts.netlify.app/",
  },
  {
    id: 2,
    title: "Calculadora De Calorias",
    description:
      "App web donde se registran comidas y ejercicios, introduciendo las calorias que cada uno aporta para obtener al final las calorias totales. Se desarrolló usando varios hooks como UseReducer para manejo global de la app, UseMemo para la información, mantiene LocalStorage y cuenta con validación de inpus via Tailwind y un extra gracias a TS.",
    image: calculadoraC,
    technologies: [
      "JSX",
      "Hooks",
      "TypeScript",
      "HTML",
      "Tailwind",
      "LocalStorage",
    ],
    liveUrl: "https://calculadoradecalorias-react-ts.netlify.app/",
  },
  {
    id: 3,
    title: "Calculadora de propinas",
    description:
      "App donde se agregan elementos a una orden, muestra un subtotal, se agrgega una propina deseada para obtener un gran total. Maneja el estado con UseState y Custom Hooks para la funcionalidad en general. Cuenta con almacenamiento local y se hizo actualización a UseReducer.",
    image: calculadoraP,
    technologies: [
      "JSX",
      "TypeScript",
      "Hooks",
      "HTML",
      "Tailwind",
      "LocalStorage",
    ],
    liveUrl: "https://propinas-react-ts.netlify.app/",
  },
  {
    id: 4,
    title: "Guitar LA",
    description:
      "Tienda online de guitarras. Primer proyecto realizado utilizando solo JSX, datos e imagenes locales, manejando el estado con UseState y UseEffect. Es la introducción a los Hooks y a Tailwind para un desarrollo rápido pero eficaz y responsivo.",
    image: guitarLa,
    technologies: ["JSX", "Hooks", "HTML", "Tailwind", "JavaScript"],
    liveUrl: "https://guitarlas.netlify.app/",
  },
  {
    id: 5,
    title: "El super 6",
    description:
      "Landing page de sitio web de hamburguesas y snacks, estilizado con Mobirise y montado en Hostgator. Se aprendió el manejo de versiones, a tratar con un cliente real así como seguir requerimientos especificos y un diseño dado por mockups",
    image: super6,
    technologies: ["HTML", "CSS", "Figma", "Mobirise"],
    liveUrl: "https://www.google.com",
  },
  {
    id: 6,
    title: "Modificando el SASS",
    description:
      "Sitio web estilizado con Bootstrap y modificando con Sass, usando y personalizando solo las clases necesarios. Landing page.",
    technologies: ["HTML", "CSS", "Bootstrap", "Sass"],
    image: sassP,
    liveUrl: "https://personalizacion-sass.netlify.app/",
  },
];
export default projects;
