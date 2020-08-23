import { AppEvents } from "../events";
import jsonPlaceholder from '../api/jsonPlaceholder';
export interface IAction {
  type: string;
  payload: string | number;
}

export const getUser = (userId: number) => async (dispatch: any) => {
  const { data: user } = await jsonPlaceholder.get(`/users/${userId}`);
  const { data: posts } = await jsonPlaceholder.get(`/posts?userId=${userId}`);
  dispatch({ type: AppEvents.FETCH_USER, payload: { ...user, posts } });
};

export const getPost = (postId: number) => async (dispatch: any) => {
  const { data: post } = await jsonPlaceholder.get(`/posts/${postId}`);
  const { data: user } = await jsonPlaceholder.get(`/users/${post.userId}`);
  dispatch({ type: AppEvents.FETCH_POST, payload: { ...post, user } });
};
