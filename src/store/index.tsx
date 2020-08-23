import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IUser {
  id: number,
  name: string,
  email: string,
  username: string,
  website: string,
  posts: IPost[],
}

export interface IPost {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: IUser,
}
export interface IAppState {
  app: {
    user: IUser,
    post: IPost,
  },
}

const reducers = combineReducers({
  app: AppReducer,
});

export const store = createStore(reducers);
