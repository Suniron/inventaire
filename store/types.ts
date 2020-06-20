import { AppConfig } from "global";

export type Page = "Index";

export interface State {
  page?: Page;
  items: Array<any>;

  // Inventory:
  appConfig?: AppConfig;
}
