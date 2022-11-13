import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import React from 'react'
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title> roies portfolio</title>
        <meta name="description" content="roie leibovich portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </React.Fragment>
  );
}

export default MyApp;
