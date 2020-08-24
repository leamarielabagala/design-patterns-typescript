import { AppEvents } from '../events';
import jsonPlaceholder from '../api/jsonPlaceholder';

export interface IAction {
  type: string;
  payload: string | number;
}

export const loadUsers = () => async (dispatch: any) => {
  const { data: users } = await jsonPlaceholder.get(`/users`);
  dispatch({ type: AppEvents.LOAD_USERS, payload: users });
};

export const loadPosts = () => async (dispatch: any) => {
  const { data: posts } = await jsonPlaceholder.get(`/posts`);
  dispatch({ type: AppEvents.LOAD_POSTS, payload: posts });
}
