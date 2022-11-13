import React, { Fragment } from "react";

import styles from "./Card.module.css";

interface Props {
  header: string;
  children: any;
}

const Card: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <h2 className={styles.card_header}>{props.header}</h2>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Card;
