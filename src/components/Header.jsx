import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

/* HEADER PRINCIPAL */

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <header className="flex items-center justify-between md:justify-start w-full py-4 px-8 h-[10vh]">
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
        <Link to="/" className="">
          Inicio
        </Link>
        <Link to="#" className="">
          Proyectos
        </Link>
        <Link to="" className="">
          Contacto
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
