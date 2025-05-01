import React from "react";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        © 2025{" "}
        <a
          href="https://github.com/shemzoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          George Levin
        </a>
      </span>
    </FooterContainer>
  );
};

export default Footer;
