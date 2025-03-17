import { RiSuitcaseLine, RiBuilding4Line } from "react-icons/ri";

const experiences = [
  {
    title: "Front-End Developer Jr",
    company: "Local Solutions IT",
    period: "Junio 2024 - Marzo 2025",
    borderColor: "border-blue-500",
    icon: <RiSuitcaseLine className="text-blue-500 text-6xl" />,
    description:
      "Diseñando y desarrollando interfaces intuitivas con Next.js, React y Tailwind CSS, optimizando la experiencia del usuario en cada interacción.",
    tasks: [
      "Desarrollo de interfaces modernas y accesibles.",
      "Colaboración con diseñadores y backend developers.",
      "Realización de pruebas y corrección de errores.",
      "Gestión de versiones y trabajo en equipo con Git y GitHub.",
    ],
  },
  {
    title: "Desarrollador Jr",
    company: "Sistemas aKúbica",
    period: "Marzo 2025 - Actualidad",
    borderColor: "border-green-500",
    icon: <RiSuitcaseLine className="text-green-500 text-6xl" />,
    description:
      "Construyendo experiencias digitales fluidas con las últimas tecnologías front-end y asegurando la mejor usabilidad para los usuarios.",
    tasks: [
      "Implementación de diseños responsivos y atractivos.",
      "Optimización de rendimiento en aplicaciones web.",
      "Colaboración en equipos multidisciplinarios para proyectos ágiles.",
      "Mantenimiento y mejora de código en producción.",
    ],
  },
  {
    title: "Servicio Social",
    company: "Hospital Universitario",
    period: "Agosto 2023 - Noviembre 2023",
    borderColor: "border-red-500",
    icon: <RiBuilding4Line className="text-red-500 text-6xl" />,
    description:
      "Apoyando la organización de bases de datos hospitalarias y optimizando el almacenamiento de información para mejorar la eficiencia operativa.",
    tasks: [
      "Manejo y control de bases de datos hospitalarias.",
      "Desarrollo de soluciones técnicas para la gestión de datos.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-[30px] text-center font-black  mb-10">
          EXPERIENCIA PROFESIONAL
        </h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-xl rounded-3xl p-8 border-l-8 ${exp.borderColor} transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300`}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-gray-100 rounded-full shadow-md">
                  {exp.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-700">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <p className="text-xs text-gray-400 font-semibold">
                    {exp.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">"{exp.description}"</p>
              <ul className="space-y-3 text-gray-800">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl text-blue-500">✔</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
