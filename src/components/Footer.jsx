import { Link } from "react-router-dom";
import { RiInstagramLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black p-2 md:p-20 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-primary pb-8">
        <div className="w-1/4">
          <Link to="/" className="text-xl font-bold relative text-white">
            Portafolio<span className="text-primary text-5xl">.</span>{" "}
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            to="https://github.com/NestorSandoval"
            className="block text-white p-4 bg-primary rounded-full"
          >
            <RiGithubLine />
          </Link>
        </nav>
      </div>

      <div className=" mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Datos Personales
        </h3>
      </div>
      <div>
        <nav className="mt-4 flex flex-col md:flex-row items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 mt-4 hover:text-red-500 transition-colors"
          >
            Sobre mi
          </Link>

          <Link
            to="#"
            className="text-gray-300 mt-4 hover:text-red-500 transition-color"
          >
            Servicios
          </Link>
        </nav>
      </div>
      <div className="flex text-center justify-center mt-20 text-gray-300 ">
        <span>© Nestor Daniel Sandoval Garvalena</span>
      </div>
    </footer>
  );
};

export default Footer;
