import React from "react";
import { useRouter } from "next/dist/client/router";
import CategorySelector from "components/Inventory/CategorySelector";
import { SimpleButton } from "components/models/Buttons";

// TODO: Checker si appConfig est présent sinon demander d'importer les catégories / produits

// Main
const PageIndex: React.FC = () => {
  const router = useRouter();

  // -- RENDER --
  return (
    <>
      <SimpleButton onClick={() => router.push("/import")}>
        Importer un nouveau modèle
      </SimpleButton>
      <CategorySelector />
    </>
  );
};

export default PageIndex;
