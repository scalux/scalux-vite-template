import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoList } from "./app/components/index.ts";
import { Provider } from "scalux";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </StrictMode>
);
