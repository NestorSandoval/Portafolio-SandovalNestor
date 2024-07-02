import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-10 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[30px] text-center font-black">
        DESARROLLADOR DE SOFTWARE
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="animate__animated animate__zoomIn max-w-2xl text-justify text-gray-500">
          Hasta el momento he desarrollado proyectos estudiantiles, siendo líder
          del equipo al momento de programar, he dedicado tiempo a estudiar y
          practicar por mi cuenta. He completado cursos en línea y proyectos
          personales para familiarizarme con conceptos como programación, bases
          de datos, diseño de interfaces y desarrollo web. Mi enfoque principal
          ha sido aprender lenguajes de programación como Java Script, REACT,
          ANGULAR y C#, así como tecnologías relacionadas como HTML, CSS y SQL
          Server, estoy comprometido con seguir aprendiendo y adquirir más
          experiencia con la práctica en este emocionante campo.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="animate__animated animate__fadeInDown  flex items-center justify-center gap-8 md:gap-12">
          <img
            src="ANGULAR.png"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="REACT.png"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="HTML.png"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="C.png"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="SQL.png"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">SKILLS</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            EN DESARROLLO
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
