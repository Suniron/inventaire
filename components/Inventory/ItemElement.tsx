import React from "react";
import Item from "objects/Item";
import { styled } from "styles";

interface ItemProps {
  item: Item;
}

const ItemDiv = styled.div((css) =>
  css.compose(
    css.flex(),
    css.p(2),
    css.w("full"),
    css.maxW("screen-md"),
    css.bg("blue-600"),
    css.mb(1),
    css.rounded("lg"),
    css.items("center")
  )
);
const ItemName = styled.p((css) =>
  css.compose(css.px(1), css.text("xl"), css.font("medium"))
);
const ItemCurrentQty = styled.p((css) =>
  css.compose(css.px(1), css.text("sm"))
);
const ItemQtyDiv = styled.div((css) => css.compose(css.flex()));
const ItemQtyChooserDiv = styled.div((css) => css.compose(css.flex()));
const ItemQtyChooserInput = styled.input((css) =>
  css.compose(
    css.bg("white"),
    css.rounded("sm"),
    css.m(1),
    css.p(1),
    css.w(12),
    css.text("center")
  )
);
const ItemQtyValid = styled.button((css) => css.compose(css.w(8), css.p(1)));

const ItemElement: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemDiv style={{ placeContent: "space-between" }}>
      <ItemName>{item.name}</ItemName>
      <ItemCurrentQty>(quantité: {item.quantity})</ItemCurrentQty>
      <ItemQtyDiv>
        <ItemQtyChooserDiv>
          <ItemQtyChooserInput placeholder="qté?" />
        </ItemQtyChooserDiv>
        <ItemQtyValid>
          <img src="/icons/check.svg" />
        </ItemQtyValid>
      </ItemQtyDiv>
    </ItemDiv>
  );
};

export default ItemElement;
