import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IAppState {
  app: {
    name: string;
    age: number;
  },
}

const reducers = combineReducers({
  app: AppReducer,
});

export const store = createStore(reducers);
