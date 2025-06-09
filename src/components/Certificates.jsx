const Certificates = () => {
  const certificates = [
    { src: "Certificado JS.png", title: "JavaScript" },
    { src: "diploma-react-router.png", title: "React Router" },
    { src: "diploma-manejo-de-estado.png", title: "Manejo de estado" },
    { src: "diploma-react.png", title: "React" },
    { src: "Certificado .NET.png", title: "ASP.NET" },
  ];

  return (
    <section id="certificates" className="pt-1">
      <div className="mt-12 max-w-6xl mx-auto px-11">
        <h1 className="text-[30px] text-center font-black py-10 text-gray-800">
          CERTIFICADOS
        </h1>
        <div className="animate__animated animate__zoomInUp grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                src={cert.src}
                alt={`Certificado de ${cert.title}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center text-gray-700">
                  {cert.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
