import React, { useEffect } from "react";
import { styled } from "styles";
import { PageTitle } from "components/pageElements";
import { useOvermind } from "store";
import { Category } from "global";

interface CategorySelectorProps {
  handleSelect: (cat: Category) => void;
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

const CategorySelector: React.FC<CategorySelectorProps> = ({
  handleSelect,
}) => {
  const { state } = useOvermind();

  useEffect(() => {
    console.log(state.categories);
  }, [state.categories]);

  return (
    <>
      <PageTitle>Choisissez une catégorie</PageTitle>
      <ButtonsDiv>
        {state.categories.map((cat) => (
          <CategoryButton
            key={cat.name}
            onClick={() => {
              handleSelect(cat);
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
