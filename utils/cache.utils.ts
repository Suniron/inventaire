import { Category } from "global";
import Item from "objects/Item";

export const getCategoriesInCache = (): Array<Category> | null => {
  if (typeof window === "undefined") {
    return;
  }

  const storedConfig = window.localStorage.getItem("categories");

  if (!storedConfig) {
    console.log("Aucune config dans le cache !");
    return;
  }

  const categories: Array<Category> = [];
  // Parse all cached datas and convert into class objects
  (JSON.parse(storedConfig) as Array<any>).forEach((cat) =>
    categories.push({
      name: cat.name,
      items: (cat.items as Array<any>).map(
        (item: Item) =>
          new Item(
            item.name,
            item.quantity,
            item.year,
            item.genCodes,
            item.category
          )
      ),
    })
  );

  return categories;
};

export const saveCategoriesInCache = (categories: Array<Category>): void => {
  window.localStorage.setItem("categories", JSON.stringify(categories));
};
