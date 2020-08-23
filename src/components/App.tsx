import React, { FC } from "react";
import { IUser, IPost } from '../store/index';
interface IProps {
  user: IUser;
  post: IPost;
  getUser(userId?: number): void;
  getPost(postId?: number): void;
}

export const App: FC<IProps> = ({ user, post, getUser, getPost }) => (
  <div className="ui container">
    <div className="ui row">
      <button onClick={() => getUser()} className="ui button primary">
        Get User
      </button>
      <button onClick={() => getPost()} className="ui button primary">
        Get Post
      </button>
      <br />
      { user &&
        <div style={{ padding: '2rem', background: 'lightgrey' }}>
          <h2>{ user.name }</h2>
          <h5 style={{ margin: 0 }}>{ user.email }</h5>
          <p>{ user.website }</p>
          <h3>Posts</h3>
          { user.posts.map((p: IPost) =>
            <div>
              <h5>{ p.title }</h5>
              <p>{ p.body }</p>
            </div>)}
        </div> }
        { post &&
          <div style={{ padding: '2rem', background: 'lightgrey' }}>
            <h2>{ post.title }</h2>
            <h5>{ post.body }</h5>
            <p>Post by { post.user.name } ({post.user.email})</p>
          </div> }
    </div>
  </div>
);
