import React from "react";
import styles from "./Skills.module.css";
import SkillContainer from "./SkillContainer";
import SkillsPercentage from "./SkillsPercentage";
import Heading from "../utilityComponents/sectionHeading/Heading";

const Skills = () => {
  const skills = [
    {
      imgPath: "../../../public/images/htmlLogo.svg",
    },
    {
      imgPath: "../../../public/images/cssLogo.svg",
    },
    {
      imgPath: "../../../public/images/javascriptLogo.svg",
    },
    {
      imgPath: "../../../public/images/reactJSLogo.svg",
    },
    {
      imgPath: "../../../public/images/wordpressLogo.svg",
    },
    {
      imgPath: "../../../public/images/htmlLogo.svg",
    },
    {
      imgPath: "../../../public/images/cssLogo.svg",
    },
    {
      imgPath: "../../../public/images/illustratorLogo.svg",
    },
    {
      imgPath: "../../../public/images/photoshopLogo.svg",
    },
    {
      imgPath: "../../../public/images/javascriptLogo.svg",
    },
    {
      imgPath: "../../../public/images/reactJSLogo.svg",
    },
    {
      imgPath: "../../../public/images/illustratorLogo.svg",
    },
    {
      imgPath: "../../../public/images/photoshopLogo.svg",
    },
  ];

  const skillPercentage = [
    {
      skillName: "Angular",
      skillPercentage: "90%",
    },
    {
      skillName: ".net core (mvc) ",
      skillPercentage: "80%",
    },
    {
      skillName: "MERN",
      skillPercentage: "80%",
    },
    {
      skillName: "MEAN",
      skillPercentage: "90%",
    },
    {
      skillName: "ERP",
      skillPercentage: "86%",
    },
    {
      skillName: "JS , TS",
      skillPercentage: "75%",
    },
    {
      skillName: "JENKINS",
      skillPercentage: "70%",
    },
    {
      skillName: "Amazon Web Services",
      skillPercentage: "55%",
    },

    {
      skillName: "Linux",
      skillPercentage: "50%",
    },
  ];

  return (
    <section
      id="skills"
      className={`${styles.skillsSection} align-content-center`}
    >
      <div
        className={`${styles.skillsContainer} containerBlockPadding text-center container`}
      >
        <Heading heading="Skills" />
        <h1 className="text-center mb-5 scrollReveal w-100">Why Choose Me ?</h1>
        <p className={`${styles.scrollReveal}`}>
          With a proven track record of successfully coordinating and executing
          complex projects, I bring a unique combination of organizational
          skills, attention to detail, and clear communication to every project
          I oversee. I am committed to ensuring seamless collaboration between
          teams, managing timelines efficiently, and keeping all stakeholders
          aligned throughout the project lifecycle. My proactive problem-solving
          approach allows me to anticipate potential roadblocks and find
          effective solutions that keep projects on track. With a focus on
          delivering results that meet both deadlines and quality standards, I
          am dedicated to making sure each project achieves its full potential,
          contributing to the overall success of your business.
        </p>

        <div className={styles.skillContainer}>
          {skills.map((element, index) => (
            <SkillContainer
              styles={styles.skillLogo}
              element={element}
              key={index}
            />
          ))}
        </div>

        <div className={`${styles.skillsPercentage} row`}>
          <div className="col-12 col-lg-6">
            <h2 class={`${styles.skillsPercentageHeading}`}>Technologies</h2>
          </div>

          <div className={` col-12 col-lg-6`}>
            {skillPercentage.map((element, index) => (
              <SkillsPercentage element={element} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
