import React from 'react';
import Post from '../Post';
import { useApiGetPosts } from '../../api';

import './app.css';

const App = () => {
  const [posts, loading] = useApiGetPosts();

  return (
    <div className="app">
      {
        loading
          ? <h1>Loading...</h1>
          : posts.map(data => {
            return <Post data={data} key={data.id} />
          })
      }
    </div>
  );
}

export default App;
