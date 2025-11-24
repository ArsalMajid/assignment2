import React from "react";

const Navbar = ({ navigate }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <h1 className="logo lg-heading text-light">WT</h1>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#" onClick={() => navigate("home")}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => navigate("about")}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => navigate("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;