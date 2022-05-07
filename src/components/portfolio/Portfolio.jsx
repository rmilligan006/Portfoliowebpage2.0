import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pokedex.png";
import IMG2 from "../../assets/MEET-screenshot.png";
import IMG3 from "../../assets/myflix.png";
import IMG4 from "../../assets/todolist.png";
import IMG5 from "../../assets/weatherapp.png";
import IMG6 from "../../assets/digitalClock.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "PokeDex App",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligan006.github.io/PokedexApp/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Meet App",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligan006.github.io/PokedexApp/",
  },
  {
    id: 3,
    image: IMG3,
    title: "myFlix App",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligans-movie-app.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "To-do-list",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligan006.github.io/To-do-list/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligan006.github.io/weather-app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Digital Clock",
    github: "https://github.com/rmilligan006",
    demo: "https://rmilligan006.github.io/Digital-clock-with-animations--/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href="{github}}" className="btn">
                  Github
                </a>
                <a href={demo} className="btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
