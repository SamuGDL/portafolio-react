export default function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl } = project;

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 p-5 w-5/6 mx-auto max-w-screen-lg my-5">
        <div className="flex flex-col md:flex-row md:items-center">
          <img
            src={image}
            alt={title}
            className="rounded-md mx-auto h-42 w-64"
          />

          <div className="flex flex-col text-center md:text-left md:px-5 p-5">
            <p className="p-5 md:my-0 text-center uppercase text-2xl font-bold">
              {title}
            </p>
            <p className="my-3">{description}</p>
            <p className="">Tecnologias Usadas en este proyecto:</p>
            <div className="my-3 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={liveUrl}
              className="rounded-full w-fit p-2 mx-auto my-5 bg-blue-600 text-white font-semibold shadow-md  hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 
              "
            >
              Ir al sitio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
