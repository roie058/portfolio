import Link from "next/link";
import React, { Fragment, useState } from "react";
import Button from "../UI/Button";

import styles from "./ProjectCard.module.css";

type Props = {
  header: string;
  proj: {
    img: string;
    id: string;
    header: string;
    text: string;
    sub: string;
    link:string;
  }[];
};

const ProjectCard: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className={styles.fullstack}>
        {props.proj.map((card) => {
          return (
            <div key={card.id} className={styles.full_card}>
              <img
                className={styles.card_icon}
                onClick={() => {
                  if (window.innerWidth <= 800) {
                    setIsOpen(!isOpen);
                  }
                }}
                src={card.img}
                alt={card.header + "icon"}
              />
              <div
                key={card.id}
                className={`${styles.card} ${isOpen ? styles.open : ""}`}
              >
                
                <h3 className={styles.card_header}>{card.header}</h3>
                <p className={styles.card_text}>{card.text}</p>
                <sub className={styles.card_sub}>{card.sub}</sub>
                <a href={card.link}>
                <Button type="purple_btn" size="s">
                  Learn more
                </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProjectCard;
