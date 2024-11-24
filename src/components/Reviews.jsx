import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useEffect, useRef } from "react";

const Reviews = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains("animated")) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animated");
        }
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleScroll, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    imageRefs.current.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="review" className="pt-1" ref={sectionRef}>
      <div className="p-10 flex flex-col gap-8 bg-gray-100 mt-12">
        <h1
          ref={textRef}
          className="text-[30px] text-center font-black opacity-0 transition-all duration-1000 ease-out"
        >
          DESARROLLADOR DE SOFTWARE
        </h1>
        <div className="flex justify-center gap-4">
          <span className="text-5xl text-primary">
            <RiDoubleQuotesL />
          </span>
          <p className="animate__animated animate__zoomIn max-w-2xl text-center text-gray-500  transition-all duration-1000 ">
            Hasta el momento he desarrollado proyectos estudiantiles, siendo
            líder del equipo al momento de programar, he dedicado tiempo a
            estudiar y practicar por mi cuenta. He completado cursos en línea y
            proyectos personales para familiarizarme con conceptos como
            programación, bases de datos, diseño de interfaces y desarrollo web.
            Mi enfoque principal ha sido aprender lenguajes de programación como
            Java Script, REACT, ANGULAR y C#, así como tecnologías relacionadas
            como HTML, CSS y SQL Server, estoy comprometido con seguir
            aprendiendo y adquirir más experiencia con la práctica en este
            emocionante campo.
          </p>
          <span className="text-5xl text-primary">
            <RiDoubleQuotesR />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="animate__animated animate__fadeInDown flex items-center justify-center gap-8 md:gap-12 opacity-0 transition-all duration-1000 ease-out">
            <img
              src="ANGULAR.png"
              className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full opacity-0 transition-all duration-1000 ease-out"
              ref={(el) => (imageRefs.current[0] = el)}
            />
            <img
              src="REACT.png"
              className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full opacity-0 transition-all duration-1000 ease-out"
              ref={(el) => (imageRefs.current[1] = el)}
            />
            <img
              src="HTML.png"
              className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white opacity-0 transition-all duration-1000 ease-out"
              ref={(el) => (imageRefs.current[2] = el)}
            />
            <img
              src="C.png"
              className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full opacity-0 transition-all duration-1000 ease-out"
              ref={(el) => (imageRefs.current[3] = el)}
            />
            <img
              src="SQL.png"
              className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full opacity-0 transition-all duration-1000 ease-out"
              ref={(el) => (imageRefs.current[4] = el)}
            />
          </div>
          <div>
            <h3 className="text-center text-[20px] font-bold text-red-800 opacity-0 transition-all duration-1000 ease-out">
              - HABILIDADES -
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
