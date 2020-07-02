import React from "react";
import { styled } from "styles";
import Item from "objects/Item";

interface SearchBarProps {
  handleSearch: (items: Array<Item>) => void;
  items: Array<Item>;
}
const SearchBarDiv = styled.div((css) =>
  css.compose(css.border(2), css.rounded("sm"))
);
const SearchInput = styled.input((css) =>
  css.compose(css.text("center"), css.p(1), css.border(2), css.my(1))
);

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, items }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Find items with searched string:
    const finded = Item.findInListOfItems(items, event.target.value);
    // Give results to handler:
    handleSearch(finded);
  };

  return (
    <SearchBarDiv>
      <SearchInput
        onChange={handleInputChange}
        placeholder="Filtrer par année ou nom"
      />
    </SearchBarDiv>
  );
};

export default SearchBar;
