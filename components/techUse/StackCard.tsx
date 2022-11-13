import React, { Fragment } from "react";

import styles from "./StackCard.module.css";

type Props = {
  header: string;
  stack: { img: string; id: string; name: string }[];
};

const StackCard: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <div className={styles.fullstack}>
        <h2 className={styles.stacks_head}>{props.header}</h2>
        <div className={styles.stacks}>
          {props.stack.map((stack) => {
            return (
              <div key={stack.id} className={styles.stack}>
                <img
                  className={styles.stack_icon}
                  src={stack.img}
                  alt={stack.name + "icon"}
                />
                <h3 className={styles.stack_name}>{stack.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default StackCard;
