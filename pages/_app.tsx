import { AppProps } from "next/app";
import Layout from "./components/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png";
import "../styles/globals.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
