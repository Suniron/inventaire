import React from "react";
import { styled } from "styles";

const FooterCopyright = styled.p((css) =>
  css.compose(css.bg("blue-800"), css.text("gray-500"))
);

const MaltLink = styled.a((css) =>
  css.compose(css.text("orange-500"), css.underline())
);

const Footer: React.FC = () => {
  return (
    <FooterCopyright>
      Proposé par{" "}
      <MaltLink target="_blank" href="https://www.malt.fr/profile/etienneblanc">
        Etienne BLANC
      </MaltLink>
    </FooterCopyright>
  );
};

export default Footer;
