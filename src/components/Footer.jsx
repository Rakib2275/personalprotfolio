import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Rakibul Hasan
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>
        </div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/Rakib2275"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rakibul-hasan-336017214/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/rakib1215"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaFacebook />
          </a>

        </div>

      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rakibul Hasan. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;