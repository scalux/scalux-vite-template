import { register } from "../state";
import { logic } from "../logic";

export { TodoList } from "./TodoList";

export const { mkApi, reducer } = register(logic);
