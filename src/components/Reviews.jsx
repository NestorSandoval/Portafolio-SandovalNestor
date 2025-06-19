import { experiences } from "../constants/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-28 lg:py-22 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-[30px] text-center font-black mb-10 text-gray-900">
          EXPERIENCIA PROFESIONAL
        </h1>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col space-y-1 ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {exp.title}
              </h2>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-xs text-red-400 font-semibold">{exp.period}</p>
              <p className="text-gray-700 italic mb-4">{exp.description}</p>
              <p className="text-gray-700 font-semibold">{exp.techUsed}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
