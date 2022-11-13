import React, { Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./MyWork.module.css";

const MyWork: React.FC = () => {
  return (
    <Fragment>
      <section>
        <article className={styles.work}>
          <img
            className={styles.about_image}
            src="/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg"
            alt="picture of computer"
          />
          <Card header="about my work">
            <p className={styles.card_text}>
              Create <span className={styles.blue}>Interactive </span>{" "}
              <span className={styles.purple}>Beautiful</span> and{" "}
              <span className={styles.cyan}>Responsive</span> web apps for any
              purpose
            </p>
            <p className={styles.card_text}>
              Develop <span className={styles.blue}>smooth</span>{" "}
              <span className={styles.purple}>scalable</span> Backend to store
              and present relevent data
            </p>
            <a href="/tech-stack">
            <Button type="purple_btn" size="m">
              Learn more
            </Button>
            </a>
          </Card>
        </article>
      </section>
    </Fragment>
  );
};

export default MyWork;
