import React from "react";
import { styled } from "styles";
import { useRouter } from "next/dist/client/router";
import Settings from "./Settings";

const HeaderTitle = styled.button((css) =>
  css.compose(
    css.text("blue-600"),
    css.font("bold"),
    css.text("2xl"),
    css.bg("white"),
    css.border(2),
    css.rounded("lg"),
    css.px(1)
  )
);

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div></div>
      <HeaderTitle
        onClick={() => router.push("/")}
        title="Retourner à l'accueil"
      >
        Inventaire Leclerc
      </HeaderTitle>
      <Settings />
    </>
  );
};

export default Header;
