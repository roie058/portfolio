import type { NextPage } from "next";
import Head from "next/head";
import Demos from "../components/home/Demos";
import MyWork from "../components/home/MyWork";
import NameProf from "../components/home/NameProf";
import Social from "../components/home/Social";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>roies portfolio</title>
        <meta name="description" content="roie leibovich portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NameProf />
      <Social />
      <MyWork />
      <Demos />
    </div>
  );
};

export default Home;
