import { styled, css } from "styles";

const sharedProps = css.compose(
  css.border(2),
  css.rounded("md"),
  css.p(1),
  css.italic(),
  css.text("sm")
);
export const InfoAlert = styled.div((css) =>
  css.compose(sharedProps, css.bg("green-200"))
);

export const DangerAlert = styled.div((css) =>
  css.compose(sharedProps, css.bg("red-400"))
);
