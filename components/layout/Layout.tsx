import Footer from "./Footer";
import NavBar from "./NavBar";

import { Fragment } from "react";

interface Props {
  children: any;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
