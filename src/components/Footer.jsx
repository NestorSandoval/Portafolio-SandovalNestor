import { RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
    </footer>
  );
};

export default Footer;
