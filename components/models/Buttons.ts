import { styled } from "styles";

export const SimpleButton = styled.button((css) =>
  css.compose(
    css.rounded("md"),
    css.bg("blue-700"),
    css.p(2),
    css.m(1),
    css.font("bold"),
    css.text("white")
  )
);
