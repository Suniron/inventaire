import React, { useEffect, useState } from "react";
import { styled } from "styles";
import { PageTitle } from "components/pageElements";
import { useOvermind } from "store";
import { useRouter } from "next/dist/client/router";
import { Category } from "global";
import { getCategoriesFromXlsx } from "utils/xlsx.utils";

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

const CategorySelector: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  const { state } = useOvermind();
  const router = useRouter();

  useEffect(() => {
    if (!state.categories) return;
    setCategories(state.categories);
  }, [setCategories, state.categories]);

  const onImportDefault = () => {
    //fetch("/files/defaultConfig.xlsx").then(async (res) => {});
  };

  return (
    <>
      <PageTitle>Choisissez une catégorie</PageTitle>
      <ButtonsDiv>
        {categories ? (
          categories.map((cat) => (
            <CategoryButton
              key={cat.name}
              onClick={() => {
                router.push(
                  "/category/[categoryName]",
                  `/category/${cat.name}`
                );
              }}
            >
              {cat.name}
            </CategoryButton>
          ))
        ) : (
          <>
            <p>Il n'y a pas de catégories importées</p>
            {/* <button onClick={onImportDefault}>
              Importer une configuration par défaut
            </button> */}
          </>
        )}
      </ButtonsDiv>
    </>
  );
};
export default CategorySelector;
