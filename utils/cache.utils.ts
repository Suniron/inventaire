import { Category } from "global";

export const getCategoriesInCache = (): Array<Category> | null => {
  if (typeof window === "undefined") {
    return;
  }

  // // === TEMP debut ==
  // const config: AppConfig = {
  //   inventory: {
  //     categories: [],
  //   },
  // };

  // fakeAppConfig.categories.forEach((cat) =>
  //   config.inventory.categories.push({
  //     name: cat.name,
  //     items: cat.items.map((item) => new Item(item.name, item.qty)),
  //   })
  // );

  // return config;
  // // == TEMP fin ==

  const storedConfig = window.localStorage.getItem("categories");

  if (!storedConfig) {
    console.log("Aucune config dans le cache !");
    return;
  }

  return JSON.parse(storedConfig) as Array<Category>;
};

export const saveCategoriesInCache = (categories: Array<Category>): void => {
  window.localStorage.setItem("categories", JSON.stringify(categories));
};
