import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
  return (
    <>
      <a
        href="https://github.com/Swastik9837"
        target="_black"
        className={`${styles.socialMediaLinks}`}
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/swastik-rana/"
        target="_black"
        className={`${styles.socialMediaLinks}`}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/swastik_rana_14/"
        target="_black"
        className={`${styles.socialMediaLinks}`}
      >
        <AiFillInstagram />
      </a>

      <a href="#" target="_black" className={`${styles.socialMediaLinks}`}>
        <FaFacebook />
      </a>
    </>
  );
};

export default SocialMediaLinks;
