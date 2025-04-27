import { useEffect } from "react";
import { Todo } from "../../types";
import {
  AppLabel,
  AppParagraph,
  AppTitle,
  useLabel,
} from "../../assets/labels";
import { AppIcon } from "../../assets/icons";

/** Props that carry data to display */
export type TodoListComponentDataProps = {
  todos: Todo[]; // Todos as an array for rendering
  newItemText: string; // Text in the add‑item field
  isLoading: boolean; // API loading flag
  error: string | null; // API error message
  canUndo: boolean; // true if an undo is possible
  canRedo: boolean; // true if a redo is possible
};

/** Props that expose handlers the UI can call */
export type TodoListComponentHandlerProps = {
  fetchTodos: () => void;
  addTodo: (label: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setNewItemText: (text: string) => void;
  undoAction: () => void;
  redoAction: () => void;
};

/** Full prop set for the TodoListComponent */
export type TodoListComponentProps = TodoListComponentDataProps &
  TodoListComponentHandlerProps;

/** Pure React component that displays the Todo list */
export const TodoListComponentDisplay: React.FC<TodoListComponentProps> = ({
  // Data props
  todos,
  newItemText,
  isLoading,
  error,
  canUndo,
  canRedo,
  // Handler props
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  setNewItemText,
  undoAction,
  redoAction,
}) => {
  // Load todos on first mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  /** Handle form submission */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemText.trim()) {
      addTodo(newItemText.trim());
    }
  };

  const newTask = useLabel("newTask");

  return (
    <div style={{ padding: "0 2.5em" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "0.8em" }}>
          <AppIcon item="Scalux" customSize="3em" />
        </div>
        <AppTitle item="todoAppTitle" />
      </div>
      {/* Undo / Redo buttons */}
      <div style={{ display: "flex", gap: "0.5em" }}>
        <button onClick={undoAction} disabled={!canUndo || isLoading}>
          <AppLabel item="undo" />
        </button>
        <button onClick={redoAction} disabled={!canRedo || isLoading}>
          <AppLabel item="redo" />
        </button>
      </div>
      {/* Add form */}
      <form onSubmit={handleAdd} style={{ margin: "1em 0" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            placeholder={newTask}
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            disabled={isLoading}
            aria-label="New task"
          />
          <button type="submit" disabled={isLoading || !newItemText.trim()}>
            <AppLabel item="add" />
          </button>
        </div>
      </form>

      {/* Loading indicator */}
      {isLoading && <p>Loading todos …</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Todo list */}
      {!isLoading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0.5em 0",
                textDecoration: todo.done ? "line-through" : "none",
                opacity: todo.done ? 0.6 : 1,
              }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "0.5em" }}
              />
              <span style={{ flexGrow: 1 }}>{todo.label}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "0.5em" }}
              >
                <AppLabel item="delete" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Empty state */}
      {!isLoading && !error && todos.length === 0 && (
        <AppParagraph item="noTasksYet" />
      )}
    </div>
  );
};
