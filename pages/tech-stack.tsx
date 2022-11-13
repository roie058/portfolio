import type { NextPage } from "next";
import Head from "next/head";
import StackCard from "../components/techUse/StackCard";
import Button from "../components/UI/Button";
import styles from "../styles/tech-stack.module.css";

const TechStack: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>roies portfolio</title>
        <meta name="description" content="roie leibovich portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StackCard
        header="programing languages:"
        stack={[
          { img: "/images/html.svg", id: "html", name: "Html" },
          { img: "/images/css.png", id: "css", name: "CSS" },
          { img: "/images/js2.png", id: "javascript", name: "Javascript" },
          {
            img: "/images/typescript-logo.png",
            id: "typescript",
            name: "Typescript",
          },
        ]}
      />

      <StackCard
        header="Liberies and frameworks:"
        stack={[
          {
            img: "/images/1280px-Node.js_logo.svg.png",
            id: "nodejs",
            name: "Node.js",
          },
          {
            img: "/images/express-facebook-share.png",
            id: "express",
            name: "Express.js",
          },
          { img: "/images/react-logo.png", id: "react", name: "React.js" },

          {
            img: "/images/next.png",
            id: "next.js",
            name: "Next.js",
          },
        ]}
      />
      <StackCard
        header="Databases:"
        stack={[
          {
            img: "/images/mongodb.svg",
            id: "mongodb",
            name: "MongoDB",
          },
          {
            img: "/images/mysql_PNG10.png",
            id: "mysql",
            name: "MySQl",
          },
        ]}
      />
      <Button type="demo_btn" size="m">
        Projects & More
      </Button>
    </div>
  );
};

export default TechStack;
