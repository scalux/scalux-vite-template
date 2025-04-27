import { logic } from "../../logic";
import { Component } from "../../state";
import { selectTodoListData } from "./data";
import { TodoListComponentDisplay } from "./render";

const { fetchTodos, addTodo, toggleTodo, deleteTodo, setNewItemText } =
  logic.todo;

export const TodoList = Component({
  domain: "TodoList",
  render: TodoListComponentDisplay,
  data: selectTodoListData,
  handlers: {
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setNewItemText,
    undoAction: logic.undo,
    redoAction: logic.redo,
  },
});
