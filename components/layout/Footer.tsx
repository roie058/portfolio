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
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.social_media}>
          <h4 className={styles.footer_h}>Social media</h4>
          <div className={styles.social_icons}>
            <div className={styles.col}>
              <Link href="https://www.facebook.com/profile.php?id=100000664470842">
                <FaFacebook
                  className={`fa-brands fa-facebook ${styles.icon2}`}
                  size={32}
                ></FaFacebook>
              </Link>
              <Link href="www.linkedin.com/in/roie_lebovich">
                <FaLinkedinIn
                  className={`fa-brands fa-linkedin-in ${styles.icon2}`}
                  size={32}
                ></FaLinkedinIn>
              </Link>
            </div>
            <div className={styles.col}>
              <Link href="https://www.instagram.com/roie_leb/">
                <FaInstagram
                  className={`fa-brands fa-instagram ${styles.icon2}`}
                  size={32}
                ></FaInstagram>
              </Link>
              <Link href="https://wa.me/0586666848">
                <FaWhatsapp
                  className={`fa-brands fa-whatsapp ${styles.icon2}`}
                  size={32}
                ></FaWhatsapp>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sitemap}>
          <h4 className={styles.footer_h}>Sitemap</h4>
          <Link href="/">home</Link>
          <Link href="/projects">projects</Link>
          <Link href="/tech-stack">tech use</Link>
         
        </div>
        <div className={styles.contacts}>
          <h4 className={styles.footer_h}>Contacts</h4>
          <Link href="email:roie058@gmail.com" >
            <div>
            <FaRegEnvelope
              className={`fa-regular fa-envelope`}
              size={32}
            ></FaRegEnvelope>
            <div>roie058@gmail.com</div>
            </div>
          </Link>
          <Link href="tel:0586666848">
            <div>
            <FaPhone className={`fa-solid fa-phone`} size={32}></FaPhone>
            <div>058-6666-848</div>
            </div>
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
