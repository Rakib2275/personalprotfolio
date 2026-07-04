import { FaGithub, FaDownload } from "react-icons/fa";
import profile from "../assets/rakib2.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Rakibul Hasan
          </h1>

          <h2 className="text-2xl text-gray-300 mb-5">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-7 mb-8">
            I'm a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I work with both front-end and back-end technologies to create complete, scalable solutions. My experience includes React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Tailwind CSS. I enjoy solving real-world problems, writing clean and maintainable code, and continuously learning new technologies to improve my skills. My goal is to build high-quality applications that deliver great user experiences and efficient performance.

          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold duration-300"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="https://github.com/Rakib2275"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg duration-300"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-500 shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;