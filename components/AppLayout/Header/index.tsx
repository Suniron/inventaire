import React from "react";
import { styled } from "styles";
import { useRouter } from "next/dist/client/router";
import Settings from "./Settings";

const HeaderTitle = styled.button((css) =>
  css.compose(css.text("orange-500"), css.font("medium"), css.text("2xl"))
);

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div> </div>
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
