import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dominion-ikpeawujor"
        target="_blank" rel="noreferrer"
      ><BsLinkedin/></a>
      <a href="htps://www.github.com/dominionikpeawujor" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="htps://www.twitter.com/dominionci" target="_blank" rel="noreferrer"><FaTwitter/></a>
    </div>
  );
};

export default HeaderSocials;
