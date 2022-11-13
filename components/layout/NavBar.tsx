import React, { Fragment, useState } from "react";

import Link from "next/link";

import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const onToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {isOpen && (
        <div className={styles.overlay} onClick={onToggleHandler}></div>
      )}
      <div
        className={`${styles.circle} ${isOpen ? styles.circle_toggle : ""}`}
      ></div>
      <nav className={styles.navbar}>
        <div className={styles.hamburger} onClick={onToggleHandler}>
          <div
            className={`${styles.line1} ${isOpen ? styles.line1_toggle : ""}`}
          ></div>
          <div
            className={`${styles.line2} ${isOpen ? styles.line2_toggle : ""}`}
          ></div>
          <div
            className={`${styles.line3} ${isOpen ? styles.line3_toggle : ""}`}
          ></div>
        </div>
        <ul
          className={`${styles.nav_links} ${
            isOpen ? styles.nav_links_toggle : ""
          }`}
        >
          <Link href="/">
            <li
              className={` ${router.pathname === "/" ? styles.selected : ""} ${
                styles.nav_link
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`${
                router.pathname === "/projects" ? styles.selected : ""
              } ${styles.nav_link}`}
            >
              Projects
            </li>
          </Link>
          <Link href="/tech-stack">
            <li
              className={`${
                router.pathname === "/tech-stack" ? styles.selected : ""
              } ${styles.nav_link}`}
            >
              tech stack
            </li>
          </Link>
          
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
