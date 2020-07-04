import { Action, rehydrate } from "overmind";
import { Category } from "global";
import { getCategoriesInCache, saveCategoriesInCache } from "utils/cache.utils";
import Item from "objects/Item";

export const changePage = ({ state }, mutations) => {
  rehydrate(state, mutations || []);

  switch (state.page) {
    case "Index":
      //console.log("Show index page !");
      // Do some additional logic
      break;
    case "About":
      // Do some additional logic
      break;
    default:
      break;
  }
};

export const updateCategories: Action<Array<Category>> = (
  { state },
  newCategories: Array<Category>
) => {
  // Update in cache:
  saveCategoriesInCache(newCategories);

  // Update in state:
  state.categories = newCategories;
};
export const getCachedCategories: Action = ({ state }) => {
  const cachedConfig = getCategoriesInCache();

  if (!cachedConfig) {
    return;
  }

  state.categories = cachedConfig;
};

export const updateCache: Action = ({ state }) => {
  saveCategoriesInCache(state.categories);
};

export const increaseItemQuantity: Action<{ item: Item; value: number }> = (
  { actions },
  datas
) => {
  datas.item.increaseQuantity(datas.value);
  actions.updateCache();
};

export const decreaseItemQuantity: Action<{ item: Item; value: number }> = (
  { actions },
  datas
) => {
  datas.item.decreaseQuantity(datas.value);
  actions.updateCache();
};

export const defineItemQuantity: Action<{ item: Item; value: number }> = (
  { actions },
  datas
) => {
  datas.item.defineQuantity(datas.value);
  actions.updateCache();
};
