import { useEffect, useRef } from "react";
import "animate.css";

const Skills = () => {
  const iconRefs = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        entry.target.classList.remove("opacity-0");
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleScroll, observerOptions);

    iconRefs.current.forEach((icon) => observer.observe(icon));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="pt-10">
      <div className="flex flex-col items-center space-y-8 mt-16">
        <h1 className="text-[30px] text-center font-black">HABILIDADES</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <img
            ref={(el) => (iconRefs.current[6] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg"
            alt="Astro"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[0] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[1] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[2] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[3] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[4] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            alt="C#"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
          <img
            ref={(el) => (iconRefs.current[5] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
            alt=".NET Core"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />

          <img
            ref={(el) => (iconRefs.current[7] = el)}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            className="w-20 h-20 opacity-0 transition-all duration-1000 ease-out hover:scale-110 animate__animated"
          />
        </div>
        <hr className="w-full border-t border-gray-300 px-10" />
      </div>
    </section>
  );
};

export default Skills;
