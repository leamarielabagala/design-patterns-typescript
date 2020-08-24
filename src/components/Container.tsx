import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { App as MainComponent } from "./App";
import { IAction, loadUsers, loadPosts } from "../actions";
import { IAppState } from "../store";

const mapStateToProps = (state: IAppState) => {
  return {
    users: state.app.users,
    posts: state.app.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    loadUsers: (): Promise<void> => loadUsers()(dispatch),
    loadPosts: (): Promise<void> => loadPosts()(dispatch),
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  MainComponent
);
