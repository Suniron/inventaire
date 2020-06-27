import React from "react";
import { Category } from "global";
import { styled } from "styles";
import ItemViewer from "./ItemViewer";

interface CategoryViewerProps {
  category: Category;
}

const CategoryDiv = styled.div((css) =>
  css.compose(css.bg("white"), css.m(2), css.rounded("md"))
);

const CategoryTitle = styled.h3((css) =>
  css.compose(css.text("xl"), css.font("bold"), css.underline())
);
const CategorySubtitle = styled.h4((css) =>
  css.compose(css.font("normal"), css.italic())
);

const ItemsDiv = styled.div((css) => css.compose(css.p(1), css.text("left")));

const CategoryViewer: React.FC<CategoryViewerProps> = ({ category }) => {
  return (
    <CategoryDiv>
      <CategoryTitle>{category.name}</CategoryTitle>
      <CategorySubtitle>{category.items.length} produits</CategorySubtitle>
      <ItemsDiv>
        {category.items.map((item) => (
          <ItemViewer key={item.genCodes[0] + item.name} item={item} />
        ))}
      </ItemsDiv>
    </CategoryDiv>
  );
};

export default CategoryViewer;
