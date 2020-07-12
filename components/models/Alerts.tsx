import { styled } from "styles";

const defaultAlert = (css) => {
  return css.compose(
    css.border(2),
    css.rounded("md"),
    css.p(2),
    css.italic(),
    css.text("base")
  );
};

export const InfoAlert = styled.div((css) =>
  css.compose(defaultAlert(css), css.bg("green-200"))
);

export const DangerAlert = styled.div((css) =>
  css.compose(defaultAlert(css), css.bg("red-400"))
);
