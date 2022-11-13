import Heading from "../components/Heading";
import Head from "next/head";
import PostInfo from "../components/PostInfo";
import { FC } from "react";
import { IPost } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";

type PostProps = {
  post: IPost;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Post: FC<PostProps> = ({ post }) => {
  const { title, body } = post;
  return (
    <>
      <Head>
        <title>`Post ${title}`</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
