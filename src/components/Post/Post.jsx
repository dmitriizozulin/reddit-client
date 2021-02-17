import React from 'react';

import './post.css';

const Post = ({ data }) => {
  const { title, subreddit, comments_link = '#', img_url } = data;

  return (
    <div className="post">
      {img_url && <img className="post-image" src={img_url} alt={title} />}
      <h2 className="post-title">{title}</h2>
      <h3 className="post-subreddit">{subreddit}</h3>
      <a className="link" href={comments_link} target="_blank">Comments</a>
    </div>
  );
};

export default Post;
