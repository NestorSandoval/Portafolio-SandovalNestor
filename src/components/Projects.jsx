import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export const Projects = () => {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        entry.target.classList.remove("opacity-0");

        entry.target.classList.add("animated");
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleScroll, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="pt-1">
      <div className="text-[30px] text-center font-black py-10 mt-12">
        <h1
          ref={titleRef}
          className="opacity-0 transition-all duration-1000 ease-out"
        >
          PROYECTOS
        </h1>
      </div>
      <div className="flex items-center justify-center container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <Card
            ref={(el) => (cardRefs.current[0] = el)}
            className="opacity-0 transition-all duration-1000 ease-out"
          >
            <CardMedia component="img" image="PROYECTO-STAYEASE.png" />
            <CardContent>
              <Typography gutterBottom variant="h6">
                APP STAYEASE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                C# - .NET - FIREBASE - XAMARIN
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <Link to={"https://github.com/NestorSandoval/stay-ease"}>
                  GITHUB
                </Link>
              </Button>
            </CardActions>
          </Card>

          <Card
            ref={(el) => (cardRefs.current[1] = el)}
            className="opacity-0 transition-all duration-1000 ease-out"
          >
            <CardMedia component="img" image="PROYECTO-SNAKE.png" />
            <CardContent>
              <Typography gutterBottom variant="h6">
                SOFTWARE FARMACIA SNAKE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                C# - .NET - SQLSERVER
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <Link
                  to={"https://github.com/NestorSandoval/App-Farmacia-Forms"}
                >
                  GITHUB
                </Link>
              </Button>
            </CardActions>
          </Card>

          <Card
            ref={(el) => (cardRefs.current[2] = el)}
            className="opacity-0 transition-all duration-1000 ease-out"
          >
            <CardMedia component="img" image="PROYECTO-PAGINACREAR.png" />
            <CardContent>
              <Typography gutterBottom variant="h6">
                PAGINA WEB CREAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HTML - CSS - JAVASCRIPT
              </Typography>
            </CardContent>
          </Card>

          <Card
            ref={(el) => (cardRefs.current[3] = el)}
            className="opacity-0 transition-all duration-1000 ease-out"
          >
            <CardMedia component="img" image="POKEAPI.png" />
            <CardContent>
              <Typography gutterBottom variant="h6">
                POKE API
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ASTRO - JAVASCRIPT
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <Link to={"https://github.com/NestorSandoval/API-Pokemon"}>
                  GITHUB
                </Link>
              </Button>
              <Button>
                <Link to={"https://api-pokemon-zeta.vercel.app/"}>Ver</Link>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
