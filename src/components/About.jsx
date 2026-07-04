import { FaUserGraduate, FaLaptopCode, FaProjectDiagram, FaCode } from "react-icons/fa";
import profile2 from "../assets/rakib3.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Get to know me better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <img
              src={profile2}
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right */}
          <div>

            <h3 className="text-3xl font-semibold mb-4">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I'm a passionate web developer who enjoys creating responsive,
              modern and user-friendly websites. I love learning new
              technologies and building real-world projects using React,
              Node.js, Express.js and MongoDB.
            </p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 duration-300">
                <FaLaptopCode className="text-4xl text-cyan-400 mb-3" />
                <h4 className="font-bold text-xl">Experience</h4>
                <p className="text-gray-400 mt-2">
                  Fresher Developer
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 duration-300">
                <FaProjectDiagram className="text-4xl text-cyan-400 mb-3" />
                <h4 className="font-bold text-xl">Projects</h4>
                <p className="text-gray-400 mt-2">
                  10+ Completed
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 duration-300">
                <FaUserGraduate className="text-4xl text-cyan-400 mb-3" />
                <h4 className="font-bold text-xl">Education</h4>
                <p className="text-gray-400 mt-2">
                  Computer Science Student
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 duration-300">
                <FaCode className="text-4xl text-cyan-400 mb-3" />
                <h4 className="font-bold text-xl">Skills</h4>
                <p className="text-gray-400 mt-2">
                  MERN Stack
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;