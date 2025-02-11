import React, { useState } from "react";
import styles from "./ContactMe.module.css";
import Heading from "../utilityComponents/sectionHeading/Heading";
import SocialMediaLinks from "../utilityComponents/socialMedia/SocialMediaLinks";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_tm8bmgp", // Replace with your EmailJS service ID
        "template_ahr6ikd", // Replace with your EmailJS template ID
        e.target,
        "gpKxA61pAlh3eLhMb" // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        setError(true);
      })
      .finally(() => {
        setSending(false);
      });
  };

  if (success) {
    return (
      <p className="fw-bold text-success display-6 text-center">
        Thank you for contacting me!
      </p>
    );
  }

  return (
    <section
      id="contactMe"
      className={`${styles.contactMeContainer} text-white containerBlockPadding align-content-center`}
    >
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 gap-lg-0">
        <div className={`${styles.socialMedia} text-center`}>
          <Heading heading="Social Media" />
          <div className="links d-flex gap-3 justify-content-center">
            <SocialMediaLinks />
          </div>
        </div>
        <div className={`${styles.formContainer} w-100`}>
          <Heading heading="Contact Me" />
          <h1 className="text-center mb-2 scrollReveal w-100">Get In Touch!</h1>

          <form
            className={`${styles.contactFeildContainer}`}
            onSubmit={handleSubmit}
          >
            <div className="fadeUpAnimation">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.formControl}`}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="fadeUpAnimation">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.formControl}`}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="fadeUpAnimation">
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className={`${styles.formControl}`}
                placeholder="Enter your thoughts..."
                required
              />
            </div>

            <Button
              className="primaryBtn w-100 fadeUpAnimation"
              type="submit"
              size="lg"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit"}
            </Button>
          </form>

          {error && (
            <p className="text-danger text-center mt-3">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
