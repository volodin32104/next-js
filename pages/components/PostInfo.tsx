import { FC } from "react";
import { IPost } from "../../types";
import Heading from "./Heading";

type postInfoProps = {
  post: IPost;
};

const PostInfo: FC<postInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
