import { useEffect, useState } from 'react';

const API_URL = "https://www.reddit.com/r/all.json";

export const getPosts = async () => {
  const request = await fetch(API_URL);
  const rawPosts = await request.json()

  return await rawPosts.data.children.map(({ data }) => {
    const { id, title, subreddit_name_prefixed, permalink, url } = data;
    const isImage = url.match(/webp|png|jpg|jpeg|gif$/);

    return {
      id,
      title,
      subreddit: subreddit_name_prefixed,
      comments_link: 'https://reddit.com' + permalink,
      img_url: isImage ? url : undefined,
    };
  });
};

export const useApiGetPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    })();
  }, []);

  return [posts, loading];
};
