import { Slice, Undoable } from "scalux";
import { TodoDict } from "../types";

const dataSlice = Slice(
  Undoable({
    todos: {} as TodoDict,
    newItemText: "",
  })
);

const uiSlice = Slice({
  loading: false,
  error: null as string | null,
  language: "en",
  theme: "dark",
});

export { dataSlice, uiSlice };
