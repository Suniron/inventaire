import { AppConfig } from "global";
import fakeAppConfig from "../docs/echantillon.json";
import Item from "objects/Item";

export const getConfigInCache = (): AppConfig | null => {
  if (typeof window === "undefined") {
    return;
  }

  // === TEMP debut ==
  const config: AppConfig = {
    inventory: {
      categories: [],
    },
  };

  fakeAppConfig.categories.forEach((cat) =>
    config.inventory.categories.push({
      name: cat.name,
      items: cat.items.map((item) => new Item(item.name, item.qty)),
    })
  );

  return config;
  // == TEMP fin ==

  const storedConfig = window.localStorage.getItem("config");

  if (!storedConfig) {
    console.log("Aucune config dans le cache !");
    return;
  }

  return JSON.parse(storedConfig) as AppConfig;
};
