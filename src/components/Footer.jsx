import {Link} from "react-router-dom"
import { RiInstagramLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-primary pb-8">
        {/* Logo */}
        <div className="w-1/4">
          <Link
            to="#"
            className="text-xl font-bold relative bg-footer text-black"
          >
            Portafolio<span className="text-primary text-5xl">.</span>{" "}
          </Link>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <Link to="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </Link>

          <Link to="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </Link>
        </nav>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Datos Personales
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Sobre mi
          </Link>
          <Link
            to="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Proyectos
          </Link>
          <Link
            to="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Experencia laboral
          </Link>

          <button
            type="button"
            className="font-semibold py-2 px-5 bg-primary text-white rounded-xl"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Nestor Daniel Sandoval Garvalena
        </p>
      </div>
    </footer>
  );
};

export default Footer;
