import { styled } from "styles";

export const PageTitle = styled.h1((css) =>
  css.compose(css.text("2xl"), css.p(2), css.font("medium"))
);
