import React from "react";
import logo2 from "./logo2.png";

function Logo() {
  return (
    <a
      className="Portfolio-site-link"
      href="https://vilena-martirosova.netlify.app/index.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo2} alt="Logo" width={90} />
    </a>
  );
}

export default Logo;
