import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function ProjectSection({ limit, showMoreB }) {
  const mostrarMasProyectos = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="proyectos"
      className="mt-15 bg-gradient-to-b from-cyan-200 to-blue-400 container mx-auto"
    >
      <p className="text-4xl font-bold text-center p-5">Mis Trabajos</p>
      {mostrarMasProyectos.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {showMoreB && (
        <div className="text-center mt-12">
          <Link
            href="#proyectos"
            to="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 my-5 rounded-lg transition-colors duration-300"
          >
            Ver Todos los Proyectos
          </Link>
        </div>
      )}
    </section>
  );
}
