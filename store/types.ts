import { Category } from "global";

export type Page = "Index";

export interface State {
  page?: Page;
  items: Array<any>;
  categories: Array<Category>;
}
