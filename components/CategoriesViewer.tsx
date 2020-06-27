import React from "react";
import { Category } from "global";
import CategoryViewer from "./CategoryViewer";
import { styled } from "styles";

interface CategoriesViewerProps {
  categories: Array<Category>;
}

const CategoriesDiv = styled.div((css) =>
  css.compose(css.bg("blue-600"), css.rounded("lg"), css.m(2))
);

const CategoriesViewer: React.FC<CategoriesViewerProps> = ({ categories }) => {
  return (
    <CategoriesDiv>
      {categories.map((cat) => (
        <CategoryViewer key={cat.name} category={cat} />
      ))}
    </CategoriesDiv>
  );
};

export default CategoriesViewer;
