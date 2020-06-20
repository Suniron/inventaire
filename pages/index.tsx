import React from "react";
import Inventory from "components/Inventory";

// TODO: Checker si appConfig est présent sinon demander d'importer les catégories / produits

// Main
const PageIndex: React.FC = () => {
  // -- RENDER --
  return <Inventory />;
};

export default PageIndex;
