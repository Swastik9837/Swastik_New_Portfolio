import React from "react";
import styles from "./AboutMe.module.css";
import Heading from "../utilityComponents/sectionHeading/Heading";
import { Button } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className={`${styles.AboutMeContainer} containerBlockPadding text-center container align-content-center`}
    >
      <div className="mb-5">
        <Heading heading="About Me" />
      </div>

      <div className="row justify-content-center align-items-center gap-5 gap-lg-3">
        <div
          className={`${styles.AboutMeContentContainer} col-12 col-lg-5 d-flex flex-column justify-content-between`}
        >
          <h1 className="text-start mb-2 scrollReveal w-100 text-center text-lg-start">
            Swastik Rana
          </h1>
          <p className="text-start fadeUpAnimation text-center text-lg-start">
            I am a highly motivated and results-driven Software Engineer with
            expertise in designing, developing, and optimizing web applications.
            I excel in writing clean, efficient code and leveraging modern
            technologies to build scalable and high-performance solutions. With
            a strong foundation in software development methodologies, I
            transform complex problems into innovative, user-friendly
            applications. My passion for continuous learning and staying updated
            with the latest industry trends drives me to create impactful
            software that enhances user experience and business growth.
          </p>
          <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
            <a href="#contactMe">
              <Button
                className="secondaryBtn fadeUpAnimation"
                type="button"
                size="lg"
              >
                Contact Me
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/12FzTOisEgmOOqj-R0shlbjxWoAFtBY5D/view?usp=sharing"
              target="_black"
              download
            >
              <Button
                className="primaryBtn fadeUpAnimation"
                type="button"
                size="lg"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div
          className={`${styles.AboutMeImageContainer} fadeUpAnimation col-12 col-lg-5`}
        >
          <img
            src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
            alt="hero img"
          />
        </div>
      </div>

      <div className="animatedIcon">
        <img src="../../../public/images/plus.svg" alt="animated icon" />
      </div>
    </div>
  );
};

export default AboutMe;
