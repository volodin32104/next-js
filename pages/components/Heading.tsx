import { FC, ReactElement } from "react";

type headingProps = {
  tag?: string;
  text: string;
};

const Heading: FC<headingProps> = ({ tag, text }): ReactElement => {
  const Tag: any = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
