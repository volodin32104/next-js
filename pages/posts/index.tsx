import Head from "next/head";
import Heading from "../components/Heading";
import LinkComponent from "next/link";
import Link from "next/link";
import { GetStaticProps } from "next";
import { IPost } from "../../types";
import { FC } from "react";

type PostsProps = {
  posts: [IPost];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`} key={id}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
