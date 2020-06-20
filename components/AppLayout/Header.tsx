import React from "react";
import { styled } from "styles";

const HeaderTitle = styled.h1((css) =>
  css.compose(css.text("orange-500"), css.font("medium"), css.text("2xl"))
);

const Header: React.FC = () => {
  return <HeaderTitle>Inventaire Leclerc</HeaderTitle>;
};

export default Header;
