import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/slices/posts';
import { allPosts, isPostsLoading } from '../../store/selectors/posts';

import Post from '../Post';

import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isPostsLoading);
  const posts = useSelector(allPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="app">
      {
        loading
          ? <h1 data-testid="reddit-post-loading">Loading...</h1>
          : posts.map(data => {
            return <Post data={data} key={data.id} />
          })
      }
    </div>
  );
}

export default App;
