import React from "react";
import { useRouter } from "next/dist/client/router";
import CategorySelector from "components/Inventory/CategorySelector";

// TODO: Checker si appConfig est présent sinon demander d'importer les catégories / produits

// Main
const PageIndex: React.FC = () => {
  const router = useRouter();

  // -- RENDER --
  return (
    <>
      <button onClick={() => router.push("/import")}>
        Importer un nouveau modèle
      </button>
      <CategorySelector />
    </>
  );
};

export default PageIndex;
