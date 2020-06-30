import { styled } from "styles";

export const Title = styled.h1((css) => css.compose(css.text("3xl")));

export const Description = styled.p((css) => css.compose(css.italic()));
