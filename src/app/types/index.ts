/** Base type for a Todo item */
export type Todo = {
  id: string;
  label: string;
  done: boolean;
};

/** Dictionary form { id → Todo } */
export type TodoDict = Record<string, Todo>;
