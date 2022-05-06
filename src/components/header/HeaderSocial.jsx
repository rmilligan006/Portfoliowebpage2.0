import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
const headerSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ryan-milligan-18815820b/"
        target="_blank"
      >
        <FiLinkedin />
      </a>
      <a href="https://github.com/rmilligan006" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://dribbble.com/rmilligan006" target="_blank"><BsDribbble/></a>
    </div>
  );
};

export default headerSocials;
