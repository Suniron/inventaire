import React from "react";
import { useOvermind } from "store";
import { styled } from "styles";
import { useRouter } from "next/dist/client/router";

const ButtonsDiv = styled.div((css) =>
  css.compose(css.py(8), css.tablet.w("1/2"))
);
const CategoryButton = styled.button((css) =>
  css.compose(
    css.bg("blue-800"),
    css.text("white"),
    css.px(4),
    css.py(10),
    css.m(1),
    css.rounded("md"),
    css.font("medium")
  )
);

const Inventory: React.FC = () => {
  const { state } = useOvermind();
  const router = useRouter();

  if (!state.appConfig) {
    return null;
  }

  return (
    <ButtonsDiv>
      {state.appConfig.inventory.categories.map((cat) => (
        <CategoryButton
          key={cat.name}
          onClick={() => {
            router.push(`/category/[name]`, `/category/${cat.name}`);
            // TODO: Show a loader while next page is building
          }}
        >
          {cat.name}
        </CategoryButton>
      ))}
    </ButtonsDiv>
  );
};

export default Inventory;
