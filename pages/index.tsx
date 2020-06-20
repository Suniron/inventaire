import React from "react";
import { useOvermind } from "store";
import Inventory from "components/Inventory";
import { PageTitle } from "components/pageElements";

// TODO: Checker si appCOnfig est présent sinon demander d'importer les catégories / produits

// Main
const PageIndex: React.FC = () => {
  // -- RENDER --
  return (
    <>
      <PageTitle>Choisissez une catégorie</PageTitle>
      <Inventory />
    </>
  );
};

export default PageIndex;
