import React, { Fragment } from "react";

import styles from "./Footer.module.css";

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.social_media}>
          <h4 className={styles.footer_h}>Social media</h4>
          <div className={styles.social_icons}>
            <div className={styles.col}>
              <a href="https://www.facebook.com/profile.php?id=100000664470842">
                <FaFacebook
                  className={`fa-brands fa-facebook ${styles.icon2}`}
                  size={32}
                ></FaFacebook>
              </a>
              <a href="www.linkedin.com/in/roie_lebovich">
                <FaLinkedinIn
                  className={`fa-brands fa-linkedin-in ${styles.icon2}`}
                  size={32}
                ></FaLinkedinIn>
              </a>
            </div>
            <div className={styles.col}>
              <a href="https://www.instagram.com/roie_leb/">
                <FaInstagram
                  className={`fa-brands fa-instagram ${styles.icon2}`}
                  size={32}
                ></FaInstagram>
              </a>
              <a href="https://wa.me/0586666848">
                <FaWhatsapp
                  className={`fa-brands fa-whatsapp ${styles.icon2}`}
                  size={32}
                ></FaWhatsapp>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.sitemap}>
          <h4 className={styles.footer_h}>Sitemap</h4>
          <a href="/">home</a>
          <a href="/projects">projects</a>
          <a href="/tech-stack">tech use</a>
         
        </div>
        <div className={styles.contacts}>
          <h4 className={styles.footer_h}>Contacts</h4>
          <a href="email:roie058@gmail.com">
            <FaRegEnvelope
              className={`fa-regular fa-envelope`}
              size={32}
            ></FaRegEnvelope>
            <div>roie058@gmail.com</div>
          </a>
          <a href="tel:0586666848">
            <FaPhone className={`fa-solid fa-phone`} size={32}></FaPhone>
            <div>058-6666-848</div>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
