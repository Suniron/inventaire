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

  if (!state.appConfig) {
    return null;
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
