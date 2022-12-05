import React, { Fragment } from "react";

import styles from "./Social.module.css";

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
const Social: React.FC = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social_circle}></div>
      <div className={styles.social_container}>
        <a href="https://www.facebook.com/profile.php?id=100000664470842">
          <FaFacebook
            className={`fa-brands fa-facebook  ${styles.icon}`}
            size={56}
          ></FaFacebook>
        </a>
        <a href="https://www.linkedin.com/in/roie-lebovich">
          <FaLinkedinIn
            className={`fa-brands fa-linkedin-in ${styles.icon}`}
            size={56}
          ></FaLinkedinIn>
        </a>
        <a href="https://www.instagram.com/roie_leb/">
          <FaInstagram
            className={`fa-brands fa-instagram ${styles.icon}`}
            size={56}
          ></FaInstagram>
        </a>
        <a href="https://wa.me/0586666848">
          <FaWhatsapp
            className={`fa-brands fa-whatsapp ${styles.icon}`}
            size={56}
          ></FaWhatsapp>
        </a>
      </div>
    </div>
  );
};

export default Social;
