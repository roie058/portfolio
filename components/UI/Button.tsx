import React, { Fragment } from "react";

import styles from "./Button.module.css";

type Props = {
  type: string;
  size: string;
  children: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <button
        className={`${styles[props.type]} ${styles[props.size]} ${styles.btn}`}
      >
        {props.children}
      </button>
    </Fragment>
  );
};

export default Button;
