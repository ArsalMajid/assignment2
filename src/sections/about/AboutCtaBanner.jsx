import React from "react";

const AboutCtaBanner = ({ navigate }) => {
  return (
    <div className="cta-banner">
      <div className="cta-banner-left">
        <p className="cta-line">
          What are you waiting for, reach us right now.
        </p>
      </div>
      <div className="cta-banner-right">
        <a href="#" className="btn-cta" onClick={() => navigate("contact")}>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutCtaBanner;