import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={45} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={45} />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs size={45} />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact size={45} />, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={45} />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs size={45} />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress size={45} />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb size={45} />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql size={45} />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt size={45} />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub size={45} />, color: "text-white" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 hover:bg-slate-700 duration-300"
            >
              <div className={skill.color}>
                {skill.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;