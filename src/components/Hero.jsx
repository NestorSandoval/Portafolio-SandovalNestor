import "animate.css";

import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri";
import { AiFillFilePdf } from "react-icons/ai";


const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 md:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="animate__animated animate__zoomInDown text-6xl md:text-7xl font-bold md:leading-[7.5rem] ">
            Lic.Nestor Sandoval
            <span className=" text-primary py-3 px-2 border-8 border-primary relative inline-block text-5xl ">
              Egresado
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="animate__animated animate__zoomIn text-gray-500 text-2xl leading-[2.5rem] justify-center text-justify">
            Egresado de Tecnologías de Información, con gran interés en acceder
            al mercado laboral para poner en práctica mis conocimientos. Soy una
            persona trabajadora, comunicativa y comprometida. Desearía encontrar
            una oportunidad para adquirir más experiencia profesional
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full md:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              <a href="https://wa.link/o8ovzm">Contactame</a>
            </button>
            <button className="w-full md:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <AiFillFilePdf className="bg-black text-white p-4 rounded-full box-content" />{" "}
              <a href="/CV Sandoval Nestor.pdf" download className="font-bold text-black"> 
              Curriculum vitae 
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}

        <div>
          <img
            src="LogoP2.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover md:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <h1></h1>
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800 text-center">
              Lic.Tecnologías de la Informacion
            </h2>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] 
        h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
