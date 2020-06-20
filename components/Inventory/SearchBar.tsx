import React from "react";
import { styled } from "styles";

const SearchBarDiv = styled.div((css) =>
  css.compose(css.border(2), css.rounded("sm"))
);
const SearchInput = styled.input((css) =>
  css.compose(css.text("center"), css.p(1))
);

const SearchBar: React.FC<{ handleSearch: (value: string) => void }> = ({
  handleSearch,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <SearchBarDiv>
      <SearchInput onChange={handleInputChange} placeholder="Filtrer..." />
    </SearchBarDiv>
  );
};

export default SearchBar;
