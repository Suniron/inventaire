import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import ItemSelector from "components/Inventory/ItemSelector";
import { useOvermind } from "store";
import { Category } from "global";

const CategoryNamePage: React.FC = () => {
  const [error, setError] = useState(false);
  const [category, setCategory] = useState<Category>();
  const { state } = useOvermind();
  const router = useRouter();

  useEffect(() => {
    if (!router.query.categoryName || !state.categories) return;
    // Find query name in categories:
    const finded = state.categories.find(
      (cat) => cat.name === router.query.categoryName
    );
    // If not exist, show error:
    if (!finded) {
      return setError(true);
    }
    setCategory(finded);
  }, [router.query.categoryName, state.categories]);

  if (!router.query.categoryName) {
    return null;
  }

  return (
    <>
      {error && (
        <p>
          Il y a une erreur avec la catégorie recherchée: elle n'existe pas.
        </p>
      )}
      {category && <ItemSelector category={category} />}
    </>
  );
};

export default CategoryNamePage;
