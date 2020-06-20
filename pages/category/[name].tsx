import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useOvermind } from "store";
import { Category } from "global";
import { PageTitle } from "components/pageElements";

interface CategoryNamePageProps {
  categoryName: string;
}

const CategoryNamePage: React.FC<CategoryNamePageProps> = ({
  categoryName,
}) => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<Category | null>();
  const { state } = useOvermind();

  useEffect(() => {
    if (!state.appConfig) {
      return;
    }

    const findedCategory = state.appConfig.inventory.categories.find(
      (cat) => cat.name === categoryName
    );

    if (!findedCategory) {
      setCategory(null);
    } else {
      setCategory(findedCategory);
    }

    setLoading(false);
  }, [categoryName, state.appConfig]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!category) {
    return <p>La catégorie demandée n'éxiste pas</p>;
  }
  return (
    <>
      <PageTitle>{categoryName}</PageTitle>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CategoryNamePageProps> = async (
  context
) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // Get category id in params:
  const categoryName = context.params.name as string;

  // By returning { props: .... }, the Page component
  // will receive `....` as a prop at build time
  return {
    props: {
      categoryName: categoryName,
    },
  };
};

export default CategoryNamePage;
