import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import ItemSelector from "components/Inventory/ItemSelector";
import { useOvermind } from "store";
import { Category } from "global";
import { DangerAlert } from "components/models/Alerts";
import { SimpleButton } from "components/models/Buttons";

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
        <>
          <DangerAlert>
            Il y a une erreur avec la catégorie recherchée: elle n'existe pas.
          </DangerAlert>
          <SimpleButton onClick={() => router.push("/")}>
            Retour à l'accueil
          </SimpleButton>
        </>
      )}
      {category && <ItemSelector category={category} />}
    </>
  );
};

export default CategoryNamePage;
