import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Heading from "./Heading";

type LayoutChildrenProps = {
  children: ReactNode;
};

const Layout: FC<LayoutChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
