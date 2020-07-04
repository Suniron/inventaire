import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";
import * as effects from "./effects";
import { state } from "./state";
import { onInitialize } from "./onInitialize";

export const config = {
  state,
  actions: {
    ...actions,
  },
  onInitialize,
  effects,
};
export const useOvermind = createHook<typeof config>();

declare module "overmind" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {}
}
