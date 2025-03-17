import LogoWall from "./design-components/LogoWall";

const Skills = () => {
  const logoImgs = [
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
      altText: "Astro Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      altText: "Next.js Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      altText: "React Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      altText: "JavaScript Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      altText: "TypeScript Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      altText: "C# Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
      altText: ".Net Logo",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      altText: "Vue Logo",
    },
  ];

  return (
    <section id="skills">
      <h1 className="text-[30px] text-center font-black mt-24">HABILIDADES</h1>
      <div className="mt-16">
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="20s"
          bgColor="#060606"
          bgAccentColor="#FFFF"
        />
      </div>
    </section>
  );
};

export default Skills;
