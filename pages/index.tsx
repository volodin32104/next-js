import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Heading from "./components/Heading";
import Socials from "./components/Socials";
import { GetStaticProps } from "next";
import { ISocials } from "../types";
import { FC } from "react";

type HomeProps = {
  socials: [ISocials];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch (error) {
    return {
      props: { socials: null },
    };
  }
};

const Home: FC<HomeProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js App" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
