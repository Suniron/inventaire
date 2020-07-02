import { styled } from "styles";

export const InfoAlert = styled.div((css) =>
  css.compose(
    css.border(2),
    css.rounded("md"),
    css.p(1),
    css.italic(),
    css.text("sm"),
    css.bg("green-200")
  )
);

export const DangerAlert = styled.div((css) =>
  css.compose(
    css.border(2),
    css.rounded("md"),
    css.p(1),
    css.italic(),
    css.text("sm"),
    css.bg("red-400")
  )
);
