import Item from "objects/Item";

export interface Category {
  name: string;
  items: Array<Item>;
}

export interface InventoryConfig {
  categories: Array<Category>;
}

export interface AppConfig {
  inventory: InventoryConfig;
}
