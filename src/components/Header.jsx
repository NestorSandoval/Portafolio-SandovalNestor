import React ,{useState} from "react";
//Icons
import { RiCheckboxBlankCircleFill, 
    RiMenu3Fill, 
    RiCloseLine,  
} from "react-icons/ri";


/* HEADER PRINCIPAL */

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh]">
    <div className="xk:w-1/6 text-center -mt-6">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
            Portafolio<span className="text-primary text-5xl">.</span>{" "}
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10"/>
            </a>
    </div>
    <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} 
    top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50
     `}>
        <a href="#" className="">
            home
        </a>
        <a href="#" className="">
            About me
        </a>
        <a href="#" className="">
            Services
        </a>
        <a href="#" className="">
            Contact
        </a>
    </nav>
    <button onClick={()=> setShowMenu(!showMenu)} className=" xl:hidden text-2xl p-2">
        {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
    </header>

);
}

export default Header;
