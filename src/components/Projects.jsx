import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/project1.png"

const projects = [
  {
    title: "Job Protal App",
    image: project1,
    description:
      "A responsive job protal website built with React and Tailwind CSS.",
    tech: "React • Tailwind CSS • Node.js",
    github: "https://github.com/Rakib2275/Job-Protal-App.git",
    live: "#",
  },
  {
    title: "Demo Project",
    image: "https://picsum.photos/500/300?random=2",
    description:
      "Student management system with authentication and CRUD functionality.",
    tech: "React • Express • MongoDB",
    github: "#",
    live: "#",
  },
  {
    title: "Demo Project",
    image: "https://picsum.photos/500/300?random=3",
    description:
      "Modern personal portfolio website with responsive design.",
    tech: "React • Tailwind CSS",
    github: "#",
    live: "#",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Here are some of my recent works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-cyan-500 px-4 py-2 rounded-lg duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;