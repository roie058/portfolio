import type { NextPage } from "next";
import Head from "next/head";

import ProjectCard from "../components/projects/ProjectCard";

import styles from "../styles/projects.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>roies portfolio</title>
        <meta name="description" content="roie leibovich portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Projects & Demos</h2>
      <ProjectCard
        header="matzevot"
        proj={[
          {
            header: "Matzevot Leibovich Website ",
            img: "/images/logo1.jpg",
            id: "matzevot",
            text: "company web site that include catalog and articles with content admin control",
           link:'https://matzevot-leb.vercel.app/',
            sub: "node.js, next.js, express.js, mongoDb ",

          },
          {
            header: "Foodster app ",
            img: "/images/foodster.png",
            id: "foodster",
            text: "discover restaurants around you add restaurants and rate others including claster map reviews and authentication",
           link:'https://foodster-il.herokuapp.com/',
            sub: "node.js, ejs, express.js, mongoDb ",
          },
          {
            header: "Burger Prince ",
            img: "/images/logobun.png",
            id: "Burger",
            text: "Burger prince the best FAKE burger joint in your area",
           link:'https://burger-prince.netlify.app',
            sub: "HTML, CSS, JS",
          },
          {
            header: "Anderson Retail ",
            img: "/images/retail.png",
            id: "retail",
            text: "come to the fake market and buy fresh groceries to your door step includs cart and database orders",
           link:'https://anderson-retail.netlify.app',
            sub: "node.js",
          },
         
        ]}
      />
    </div>
  );
};

export default Projects;
