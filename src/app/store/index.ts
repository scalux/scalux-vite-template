import { configureStore } from "scalux";
import { mkApi, reducer } from "../components";

const store = configureStore({
  reducer,
});

const api = mkApi(store);

export { store, api };
