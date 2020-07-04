import { styled, config } from "styles";
import { TUtilityFirstCss } from "@stitches/css";

const defaultAlert = (css: TUtilityFirstCss<typeof config>) => {
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
