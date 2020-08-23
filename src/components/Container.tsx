import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { App as MainComponent } from "./App";
import { IAction, getUser, getPost } from "../actions";
import { IAppState } from "../store";

const mapStateToProps = (state: IAppState) => {
  return {
    user: state.app.user,
    post: state.app.post,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    getUser: (userId = 1): Promise<void> => getUser(userId)(dispatch),
    getPost: (postId = 1): Promise<void> => getPost(postId)(dispatch),
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  MainComponent
);
