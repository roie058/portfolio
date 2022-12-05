import Link from "next/link";
import React, { Fragment } from "react";
import Button from "../UI/Button";
import DemoCard from "../UI/DemoCard";

import styles from "./Demos.module.css";

const Demos: React.FC = () => {
  return (
    <Fragment>
      <section>
        <article className={styles.demos}>
          <div className={styles.demos_header}>
            <h2 className={styles.card_header}>Demos</h2>
            <p className={styles.demos_text}>
              play with them, super cool stuff
            </p>
          </div>
          <div className={styles.demos_present}>
            <DemoCard
              link="https://burger-prince.netlify.app"
              alt="Burger"
              demoName="Burger Prince"
              img="/images/logobun.png"
            />
            <DemoCard
              link="https://anderson-retail.netlify.app"
              alt="retail"
              demoName="Anderson Retail"
              img="/images/retail.png"
            />
            <DemoCard
              link="https://foodster-il.onrender.com/"
              alt="foodster"
              demoName="Foodster app"
              img="/images/foodster.png"
            />
          </div>
          <a style={{display:'flex',justifyContent:"center"}} href={'/projects'}>
          <Button type="demo_btn" size="l">
            
            Projects & More
            
          </Button>
          </a>
        </article>
      </section>
    </Fragment>
  );
};

export default Demos;
