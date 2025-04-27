import { addTodoApi, fetchTodosApi } from "../services/todoService";
import { Resolver, selectors, Updater } from "../state";
import { Todo, TodoDict } from "../types";

/** Update the new‑item text field */
const setNewItemText = Updater((_s, txt: string) => ({
  data: { newItemText: txt },
}));

/** Toggle a todo */
const toggleTodo = Updater((state, id: string) => {
  const current = selectors.pick.data.todos(state)[id];
  if (!current) return {};
  return { data: { todos: { [id]: { ...current, done: !current.done } } } };
});

/** Fetch todos from the API */
const fetchTodos = Updater(async () => {
  try {
    const apiTodos = await fetchTodosApi();
    const dict = apiTodos.reduce((acc, t) => {
      acc[t.id] = { id: t.id, label: t.title, done: t.completed };
      return acc;
    }, {} as TodoDict);
    return { data: { todos: dict }, ui: { loading: false, error: null } };
  } catch (e: any) {
    return { ui: { loading: false, error: e.message || "Unknown error" } };
  }
});

/** Add a new todo (resolve / updates pattern) */
const addTodo = Updater({
  resolve: Resolver(async (_s, label: string) => {
    if (!label.trim()) throw new Error("Label cannot be empty");
    const { id } = await addTodoApi(label);
    return { id, label, done: false } as Todo;
  }),
  updates: {
    data: (draft, todo) => {
      draft.todos[todo.id] = todo;
      draft.newItemText = "";
    },
  },
});

/** Delete a todo */
const deleteTodo = Updater({
  resolve: Resolver((_s, id: string) => id),
  updates: {
    data: (draft, id) => {
      delete draft.todos[id];
    },
  },
});

export const todo = {
  setNewItemText,
  toggleTodo,
  fetchTodos,
  addTodo,
  deleteTodo,
};
