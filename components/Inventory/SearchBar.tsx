import React from "react";
import { styled } from "styles";

const SearchBarDiv = styled.div((css) =>
  css.compose(css.border(2), css.rounded("sm"))
);
const SearchInput = styled.input((css) =>
  css.compose(css.text("center"), css.p(1))
);

const SearchBar: React.FC = () => {
  return (
    <SearchBarDiv>
      <SearchInput placeholder="Filtrer..." />
    </SearchBarDiv>
  );
};

export default SearchBar;
