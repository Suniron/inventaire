import { styled } from "styles";

export const InputNumber = styled.input((css) =>
  css.compose(
    css.bg("blue-200"),
    css.w(16),
    css.rounded("lg"),
    css.p(2),
    css.text("center")
  )
);
