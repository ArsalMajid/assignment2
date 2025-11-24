import React from "react";
import AboutInfo from "../sections/about/AboutInfo.jsx";
import AboutCountsSection from "../sections/about/AboutCountsSection.jsx";
import AboutCtaBanner from "../sections/about/AboutCtaBanner.jsx";

// Combines all about page sections
const AboutPage = ({ navigate }) => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="lg-heading text-black about-heading">About Us</h2>
        <p className="text-gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          pariatur, eum veritatis minima tempore laborum ad aspernatur quod
          itaque. Nostrum.
        </p>
        <AboutInfo />
        <AboutCountsSection />
        <AboutCtaBanner navigate={navigate} />
      </div>
    </section>
  );
};

export default AboutPage;