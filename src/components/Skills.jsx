import { frontendLogos, backendLogos, toolsLogos } from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="p-10">
      <h1 className="text-[30px] text-center font-black text-black mt-20">
        HABILIDADES
      </h1>
      <div className="p-2 lg:p-10 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Frontend
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {frontendLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo.imgUrl}
                    alt={logo.altText}
                    className="w-16 h-16 mb-4"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-6 rounded-lg shadow-lg  ">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Backend
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {backendLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo.imgUrl}
                    alt={logo.altText}
                    className="w-16 h-16 mb-4"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Software y herramientas
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {toolsLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo.imgUrl}
                    alt={logo.altText}
                    className="w-16 h-16 mb-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
