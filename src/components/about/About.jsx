import React from "react";
import "./about.css";
import ME from "../../assets/boston.png";
import { BiAward } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineFolder } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="logo" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year learning Web Development </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1 </small>
            </article>
            <article className="about__card">
              <HiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small>13 completed projects</small>
            </article>
          </div>

          <p>
            Hi there, i'm so glad you've decided to take a look at my Portfolio,
            and just who I am. I've been learning web-development on and off for
            about three years now. I've decided to finally take the chance and
            make it into a full time study, and eventually turn it into a
            career. I have a background degree in history, that I took through
            Nipissing University. I currently live in Uxbridge, Ontario, with my
            wife, son, and our ten year old dog named Camo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
