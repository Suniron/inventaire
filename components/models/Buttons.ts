import { styled } from "styles";

export const SimpleButton = styled.button((css) =>
  css.compose(
    css.rounded("md"),
    css.bg("blue-700"),
    css.p(2),
    css.font("bold"),
    css.text("white")
  )
);
