import Watcher from "./watcher";

export type propertyName = string;
export type connection = {
  origin?: object;
  prop?: string;
  watcher: Watcher;
};

export type OptionsForWatcher = {
  lazy?: boolean;
  cache?: boolean;
};
