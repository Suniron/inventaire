import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async ({ actions }) => {
  /**
   * Use effects and other actions onInitialize
   */

  // Client side:
  if (typeof window === "undefined") {
    return;
  }

  actions.getCachedCategories();
};
