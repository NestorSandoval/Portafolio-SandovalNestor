import { RiSuitcaseLine, RiBuilding4Line } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-[30px] text-center font-black">
          EXPERIENCIA LABORAL
        </h1>
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center gap-4">
              <RiSuitcaseLine className="text-blue-500 text-4xl" />
              <h2 className="text-xl font-bold text-gray-700">
                Front-End Developer Jr.
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Local Solutions IT</p>
            <p className="text-xs text-gray-400">Junio 2024 - Actualidad</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <span className="text-blue-500 font-bold">•</span> Diseño y
                desarrollo de interfaces de usuario dinámicas, optimizadas y
                accesibles, utilizando {""}
                <span className="font-semibold text-blue-500">
                  Next.js
                </span>, {""}
                <span className="font-semibold text-blue-500">React</span>
                <span>,</span> {""}
                <span className="font-semibold text-blue-500">
                  Tailwind CSS
                </span>
                <span>.</span>
              </li>

              <li>
                <span className="text-blue-500 font-bold">•</span> Comunicación
                constante con diseñadores, desarrolladores front-end como
                back-end para alinear el desarrollo con los objetivos del
                negocio.
              </li>
              <li>
                <span className="text-blue-500 font-bold">•</span> Realización
                de pruebas funcionales y corrección de errores para asegurar la
                calidad del código antes de las entregas.
              </li>
              <li>
                <span className="text-blue-500 font-bold">•</span> Uso de{" "}
                <span className="font-semibold text-blue-500">Git</span> y
                plataformas como{" "}
                <span className="font-semibold text-blue-500">GitHub</span> para
                el manejo de repositorios y colaboración en equipo.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
            <div className="flex items-center gap-4">
              <RiBuilding4Line className="text-red-500 text-4xl" />
              <h2 className="text-xl font-bold text-gray-700">
                Servicio Social
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Hospital Universitario</p>
            <p className="text-xs text-gray-400">
              Agosto 2023 - Noviembre 2023
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <span className="text-red-500 font-bold">•</span> Organización y
                control de bases de datos hospitalarias.
              </li>
              <li>
                <span className="text-red-500 font-bold">•</span> Desarrollo de
                soluciones técnicas para optimizar el almacenamiento de datos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
