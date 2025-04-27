import { Resolver, selectors } from "../../state";
import { TodoListComponentDataProps } from "./render";

const selectTodoListData = Resolver((state): TodoListComponentDataProps => {
  const todosDict = selectors.pick.data.todos(state);
  const newItemText = selectors.pick.data.newItemText(state);
  const isLoading = selectors.pick.ui.loading(state);
  const error = selectors.pick.ui.error(state);
  const raw = selectors.rawGrab.data(state);
  const canUndo = raw.past.length > 0;
  const canRedo = raw.future.length > 0;
  return {
    todos: Object.values(todosDict),
    newItemText,
    isLoading,
    error,
    canUndo,
    canRedo,
  };
});

export { selectTodoListData };
