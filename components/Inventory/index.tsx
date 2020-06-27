import React, { useState } from "react";
import { useOvermind } from "store";
import { Category } from "global";
import CategorySelector from "./CategorySelector";
import ItemSelector from "./ItemSelector";

const Inventory: React.FC = () => {
  const [
    selectedCategory,
    setSetSelectedCategory,
  ] = useState<Category | null>();

  const { state } = useOvermind();

  if (!state.categories) {
    return <p>Il n'y a pas de catégories importées</p>;
  }

  return (
    <>
      {selectedCategory ? (
        <ItemSelector
          category={selectedCategory}
          handleBack={() => setSetSelectedCategory(null)}
        />
      ) : (
        <CategorySelector handleSelect={(cat) => setSetSelectedCategory(cat)} />
      )}
    </>
  );
};

export default Inventory;
