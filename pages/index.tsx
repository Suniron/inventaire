import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import CategorySelector from "components/Inventory/CategorySelector";
import { SimpleButton } from "components/models/Buttons";
import { useOvermind } from "store";

// TODO: Checker si appConfig est présent sinon demander d'importer les catégories / produits

// Main
const PageIndex: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
  const { state } = useOvermind();
  const router = useRouter();

  useEffect(() => {
    if (state.categories.length === 0) {
      return setShowCategories(false);
    }

    setShowCategories(true);
  }, [state.categories]);
  // -- RENDER --
  return (
    <>
      <SimpleButton onClick={() => router.push("/import")}>
        Importer un nouveau modèle
      </SimpleButton>
      {showCategories && <CategorySelector categories={state.categories} />}
    </>
  );
};

export default PageIndex;
