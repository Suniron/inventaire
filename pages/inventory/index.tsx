import React from "react";
import CategorySelector from "components/Inventory/CategorySelector";
import { useOvermind } from "store";

// export async function getStaticProps() {
//   // If we want to produce some mutations we do so by instantiating
//   // an Overmind SSR instance, do whatever datafetching is needed and
//   // change the state directly. We return the mutations performed with
//   // "hydrate"
//   const overmind = createOvermindSSR(config);

//   overmind.state.page = "Index";
//   // overmind.state.categories =
//   console.log(overmind.state);
//   return {
//     props: {
//       mutations: overmind.hydrate(),
//     },
//   };
// }

const InventoryPage: React.FC = () => {
  const [showCategories, setShowCategories] = React.useState(false);
  const { state } = useOvermind();

  React.useEffect(() => {
    if (state.categories.length === 0) {
      return setShowCategories(false);
    }

    setShowCategories(true);
  }, [state.categories]);

  return showCategories ? (
    <CategorySelector categories={state.categories} />
  ) : (
    <p>Erreur</p>
  );
};
export default InventoryPage;
