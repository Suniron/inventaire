import React from "react";
import Item from "objects/Item";
import { styled } from "styles";

interface ItemViewerProps {
  item: Item;
}

const ItemDiv = styled.div((css) => css.compose(css.border(2)));

const ItemViewer: React.FC<ItemViewerProps> = ({ item }) => {
  return (
    <ItemDiv>
      {item.name} ({item.year})
    </ItemDiv>
  );
};
export default ItemViewer;
