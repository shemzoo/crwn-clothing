import React from "react";
import {
  FooterContainer,
  FooterContainerShop,
} from "./footer.styles";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isShopPage = location.pathname.startsWith("/shop");
  return (
    <>
      {isShopPage ? (
        <FooterContainerShop>
          © 2025{" "}
          <a
            href="https://github.com/shemzoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            George Levin
          </a>
        </FooterContainerShop>
      ) : (
        <FooterContainer>
          © 2025{" "}
          <a
            href="https://github.com/shemzoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            George Levin
          </a>
        </FooterContainer>
      )}
    </>
  );
};

export default Footer;
