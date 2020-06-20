import { Action, rehydrate } from "overmind";
import { AppConfig } from "global";
import { getConfigInCache } from "utils/cache.utils";

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

export const updateConfig: Action<AppConfig> = (
  { state },
  newConfig?: AppConfig
) => {
  state.appConfig = newConfig;
};

export const getCachedConfig: Action = ({ state }) => {
  const cachedConfig = getConfigInCache();

  if (!cachedConfig) {
    return;
  }

  state.appConfig = cachedConfig;
};
