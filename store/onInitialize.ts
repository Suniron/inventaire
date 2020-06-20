import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async ({
  effects,
  state,
  actions,
}) => {
  /**
   * Use effects and other actions onInitialize
   */

  // Client side:
  if (typeof window === "undefined") {
    return;
  }

  actions.getCachedConfig();
};
