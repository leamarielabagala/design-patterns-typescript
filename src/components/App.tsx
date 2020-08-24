import React, { FC, useEffect, useState } from "react";
import { Card, Button } from 'semantic-ui-react';
import { IUser, IPost } from '../store/index';
import './styles.css';

interface IProps {
  users: IUser[];
  posts: IPost[];
  loadUsers(): void;
  loadPosts(): void;
}

export const App: FC<IProps> = ({ users, posts, loadUsers, loadPosts }) => {
  const [userId, setUserId] = useState<number | undefined>();
  const [postId, setPostId] = useState<number | undefined>();

  useEffect(() => {
    loadUsers();
    loadPosts();
  }, []);

  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const setUser = (userId?: number) => {
    setUserId(userId);
    setPostId(undefined);
  };

  const setPost = (postId?: number) => {
    setUserId(undefined);
    setPostId(postId);
  };

  const backToList = () => {
    setUserId(undefined);
    setPostId(undefined);
  };

  const renderUser = (user: IUser) => (
    <Card key={`user-${user.id}-${getRandomNumber()}`} onClick={() => setUser(user.id)}>
      <Card.Content>
        <Card.Header>{ user.name }</Card.Header>
        <Card.Meta>
          { user.email }
        </Card.Meta>
      </Card.Content>
    </Card>
  );

  const renderPost = (post: IPost) => (
    <Card key={`post-${post.id}-${getRandomNumber()}`} onClick={() => setPost(post.id)}>
      <Card.Content>
        <Card.Header>{ post.title }</Card.Header>
        <Card.Description>
          { post.body }
        </Card.Description>
      </Card.Content>
    </Card>
  );

  const getUser = (userId: number): IUser => {
    const user = users.find((u: IUser) => u.id === userId) || {};
    const userPosts = posts.filter((p: IPost) => p.userId === userId);
    return { ...user, posts: userPosts };
  }

  const getPost = (postId: number): IPost => {
    const post = posts.find((p: IPost) => p.id === postId) || {};
    const user = users.find((u: IUser) => u.id === post?.userId) || {};
    return { ...post, user };
  }

  const user = userId ? getUser(userId) : undefined;
  const post = postId ? getPost(postId) : undefined;

  return (
    <div className="ui container">
      { !userId && !postId ?
        <React.Fragment>
          <div className="ui column">
            { users && users.length > 0 && users.map(renderUser) }
          </div>
          <div className="ui column">
            { posts && posts.length > 0 && posts.map(renderPost) }
          </div>
        </React.Fragment> :
        <div className="ui row">
          <Button onClick={backToList} style={{ marginBottom: '1rem' }}>Back</Button>
          { user &&
            <div style={{ padding: '2rem', background: 'lightgrey' }}>
              <h2>{ user.name }</h2>
              <h5 style={{ margin: 0 }}>{ user.email }</h5>
              <p>{ user.website }</p>
              <h3>Posts</h3>
              { (user.posts || []).map((p: IPost) =>
                <div style={{ marginTop: '1rem' }}>
                  <h5>{ p.title }</h5>
                  <p>{ p.body }</p>
                </div>)}
            </div> }
            { post &&
              <div style={{ padding: '2rem', background: 'lightgrey' }}>
                <h2>{ post.title }</h2>
                <h5>{ post.body }</h5>
                <p>Post by { (post.user || {}).name } ({(post.user || {}).email})</p>
              </div> }
        </div> }
    </div>
  );
};
