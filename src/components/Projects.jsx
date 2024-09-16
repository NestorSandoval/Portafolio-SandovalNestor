import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <section id="projects" className="pt-1">
      <div className="text-[30px] text-center font-black py-10 mt-12  ">
        <h1>PROYECTOS</h1>
      </div>
      <div className="flex items-center justify-center container mx-auto">
        <div className="animate__animated animate__zoomInUp grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <Card className="">
            <CardMedia
              className=""
              component="img"
              image="PROYECTO-STAYEASE.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                APP STAYEASE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                C# - .NET - FIREBASE - XAMARIN
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>

          <Card>
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
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia component="img" image="PROYECTO-PAGINACREAR.png" />
            <CardContent>
              <Typography gutterBottom variant="h6">
                PAGINA WEB CREAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HTML - CSS - JAVASCRIPT
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
