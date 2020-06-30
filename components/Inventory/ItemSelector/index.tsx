import React, { useState } from "react";
import { styled } from "styles";
import { PageTitle } from "components/pageElements";
import { Category } from "global";
import SearchBar from "../SearchBar";
import Item from "objects/Item";
import { useRouter } from "next/dist/client/router";
import ActionButtons from "./ActionButtons";

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

const ItemTable = styled.table((css) =>
  css.compose(css.w("full"), css.tablet.w("2/3"), css.px(2))
);

const Thead = styled.thead((css) =>
  css.compose(css.bg("gray-900"), css.text("gray-200"))
);

const Tfoot = styled.tfoot((css) => css.compose(css.bg("gray-500")));

const Tbody = styled.tbody((css) => css.compose(css.bg("gray-100")));

const Tr = styled.tr((css) =>
  css.compose(css.bg("gray-400", ":hover"), css.borderB(2))
);

const TdName = styled.td((css) => css.compose(css.text("left"), css.px(2)));

const TdActions = styled.td((css) => css.compose());

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
      <ItemTable>
        <Thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.name + item.genCodes[0]}>
              <TdName>{`${item.name} (${item.year})`}</TdName>
              <td>{item.quantity}</td>
              <TdActions>
                <ActionButtons item={item} />
              </TdActions>
            </Tr>
          ))}
        </Tbody>
      </ItemTable>
      {/* <ItemArea>
        {items.map((item) => (
          <ItemElement key={item.name} item={item} />
        ))}
      </ItemArea> */}
    </>
  );
};

export default ItemSelector;
