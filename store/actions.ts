import { Action, rehydrate } from "overmind";
import { Category } from "global";
import { getCategoriesInCache, saveCategoriesInCache } from "utils/cache.utils";

export const changePage = ({ state }, mutations) => {
  rehydrate(state, mutations || []);

  switch (state.page) {
    case "Index":
      // Do some additional logic
      break;
    case "About":
      // Do some additional logic
      break;
    default:
      break;
  }
};

// export const updateConfig: Action<AppConfig> = (
//   { state },
//   newConfig?: AppConfig
// ) => {
//   state.appConfig = newConfig;
// };

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
