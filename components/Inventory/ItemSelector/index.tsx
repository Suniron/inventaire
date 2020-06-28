import React, { useState } from "react";
import { styled } from "styles";
import { PageTitle } from "components/pageElements";
import { Category } from "global";
import SearchBar from "../SearchBar";
import Item from "objects/Item";
import { useRouter } from "next/dist/client/router";

interface ItemSelectorProps {
  category: Category;
}

const BackButton = styled.button((css) =>
  css.compose(
    css.bg("blue-800"),
    css.flex(),
    css.p(2),
    css.rounded("md"),
    css.items("center"),
    css.text("xl")
  )
);
const ButtonTxt = styled.p((css) => css.compose(css.px(2), css.text("white")));
const ButtonSvg = styled.img((css) => css.compose(css.w(6)));

const ItemArea = styled.div((css) =>
  css.compose(
    css.w("full"),
    css.flex(),
    css.flex("col"),
    css.items("center"),
    css.my(2)
  )
);

const TdName = styled.td((css) => css.compose(css.text("left")));

const ItemSelector: React.FC<ItemSelectorProps> = ({ category }) => {
  const [items, setItems] = useState<Array<Item>>(category.items);
  const router = useRouter();

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <BackButton onClick={() => router.push("/")}>
        <ButtonTxt>Revenir aux catégories</ButtonTxt>
        <ButtonSvg src="/icons/back-arrow.svg" />
      </BackButton>

      <PageTitle>
        {category.name} ({items.length} produits)
      </PageTitle>

      <SearchBar handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name + item.genCodes[0]}>
              <TdName>{`${item.name} (${item.year})`}</TdName>
              <td>{item.quantity}</td>
              <td>RIEN</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ItemArea>
        {items.map((item) => (
          <ItemElement key={item.name} item={item} />
        ))}
      </ItemArea> */}
    </>
  );
};

export default ItemSelector;
