import React, { useEffect, useState } from "react";
import { styled } from "styles";
import { PageTitle } from "components/pageElements";
import { useOvermind } from "store";
import { useRouter } from "next/dist/client/router";
import { Category } from "global";

interface CategorySelectorProps {
  categories: Array<Category>;
}

const ButtonsDiv = styled.div((css) => css.compose(/*css.py(8)*/));
const CategoryButton = styled.button((css) =>
  css.compose(
    css.bg("blue-800"),
    css.text("white"),
    css.px(4),
    css.py(10),
    css.m(1),
    css.rounded("md"),
    css.font("medium")
  )
);

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  const router = useRouter();

  return (
    <>
      <PageTitle>Choisissez une catégorie</PageTitle>
      <ButtonsDiv>
        {categories.map((cat) => (
          <CategoryButton
            key={cat.name}
            onClick={() => {
              router.push(
                "/inventory/[categoryName]",
                `/inventory/${cat.name}`
              );
            }}
          >
            {cat.name}
          </CategoryButton>
        ))}
      </ButtonsDiv>
    </>
  );
};
export default CategorySelector;
