import { Link } from "react-router-dom";

import VantaBackground from "./VantaBackground";
import "./Hero.css";

import Typewriter from "../ui/Typewriter";
import Latency from "../ui/Latency";

function Hero() {
  return (
    <section className="hero">
      <VantaBackground />

      <div className="hero__content container">

        <h1 className="hero__title">
          <span className="hero__typewriter">
            I&nbsp;
          </span>
          <span className="hero__typewriter">
            <Typewriter phrases={["engineer systems", "apply mathematics", "build software", "think creatively", "leverage AI", "work collaboratively", "analyze data"]} />
          </span>
          <br />
          <span className="hero__subtitle">
            to solve problems.
          </span>
        </h1>

        <p className="hero__description">
          I'm Jaydon Carter, a Computer Science and Applied Mathematics undergraduate at the University of Utah College of Engineering. I design efficient and scalable software solutions for the real world.
        </p>

        <div className="hero__actions">
          <Link to="/projects" className="hero__button hero__button--primary">
            View projects
          </Link>

          <Link to="/contact" className="hero__button">
            Get in touch
          </Link>
        </div>
      </div>
      

      <div className="hero__coordinates">
        <span>Latency</span>
        <Latency />
      </div>
    </section>
  );
}

export default Hero;