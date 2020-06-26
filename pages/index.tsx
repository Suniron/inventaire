import React from "react";
import Inventory from "components/Inventory";
import { useRouter } from "next/dist/client/router";

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
      <Inventory />;
    </>
  );
};

export default PageIndex;
