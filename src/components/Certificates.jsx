const Certificates = () => {
  return (
    <section id="certificates" className="pt-1">
      <div className="mt-12">
        <h1 className="text-[30px] text-center font-black py-10">
          CERTIFICADOS
        </h1>
        <div className="animate__animated animate__zoomInUp grid grid-cols-1 md:grid-cols-2 place-items-center space-y-10">
          <img src="Certificado .NET.png" width={600} />
          <img src="Certificado ShadcnUI.png" width={500} />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
