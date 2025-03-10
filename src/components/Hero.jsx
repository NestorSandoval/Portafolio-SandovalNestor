import "animate.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import TrueFocus from "./design-components/TrueFocus";
import { AiFillFilePdf } from "react-icons/ai";

const Hero = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-8 pt-1 mt-20 sm:mt-36"
    >
      <div className="md:col-span-5 flex items-center justify-center p-8 md:p-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h1 className="text-[40px] font-black sm:text-5xl md:text-6xl ">
              Nestor Sandoval
            </h1>

            <div className="text-primary mt-4 md:mt-1">
              <TrueFocus
                sentence="Desarrollador Web"
                manualMode={false}
                blurAmount={4}
                borderColor="red"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
            </div>
          </div>

          <p className="text-gray-500 text-base sm:text-xl md:text-2xl leading-[2.5rem]">
            Soy un desarrollador Web apasionado por crear experiencias
            interactivas de alta calidad. Actualmente en búsqueda de una
            oportunidad profesional donde pueda aplicar mis conocimientos y
            seguir creciendo en el campo laboral. Me considero una persona
            trabajadora, comunicativa y comprometida, siempre dispuesta a
            aprender y colaborar en equipo para lograr los objetivos del
            proyecto.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="LogoP2.png"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] object-cover md:-mt-28"
            alt="Logo"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] sm:max-w-[300px] mx-auto -mt-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-[1px] text-gray-800 text-center">
              Lic. Tecnologías de la Información
            </h2>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-6xl sm:text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[230px] 
        h-[230px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]
        bg-white border-[10px] border-primary rounded-full -z-10"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
