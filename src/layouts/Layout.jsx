import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Layout component wraps the Navbar, main content, and Footer
const Layout = ({ children, navigate }) => {
  return (
    <>
      <Navbar navigate={navigate} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;