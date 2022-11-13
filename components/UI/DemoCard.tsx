import React, { Fragment } from "react";

import styles from "./DemoCard.module.css";

interface Props {
  demoName: string;
  img: string;
  alt: string;
  link: string;
}

const DemoCard: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <a href={props.link} className={styles.demo}>
        <img className={styles.demo_image} src={props.img} alt={props.alt} />
        <h3 className={styles.demo_name}>{props.demoName}</h3>
      </a>
    </Fragment>
  );
};

export default DemoCard;
