import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="top-0 left-0 flex items-center justify-between md:justify-start w-full px-8 h-[11vh] bg-white shadow-lg z-50 ">
      <div className="xk:w-1/6 text-center -mt-6">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Portafolio<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed font-bold bg-white w-[80%] x-[40%] md:justify-end md:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } 
       top-0 md:static flex-1 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link
          to="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Proyectos
        </Link>
        <Link
          to="#certificates"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#certificates")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Certificados
        </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className=" md:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
