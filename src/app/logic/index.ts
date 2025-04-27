import { Logic, undo, redo } from "../state";
import { todo } from "./todo";

export const logic = Logic({
  todo,
  undo,
  redo,
});
