import { State } from "scalux";
import { dataSlice, uiSlice } from "../slices";

export const {
  selectors,
  Labels,
  Icons,
  Logic,
  Component,
  Updater,
  Resolver,
  undo,
  redo,
  register,
} = State({ ui: uiSlice, data: dataSlice });
