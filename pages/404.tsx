import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";

const Error: FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <h1>Error</h1>
      <p>Something went wrong</p>
    </>
  );
};

export default Error;
