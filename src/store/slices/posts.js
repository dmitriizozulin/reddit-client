import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../../api';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
  return await getPosts();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {
    addPost: (state, action) => {
      const { post } = action.payload;
      state.posts.push(post)
    }
  },
  extraReducers: {
    [fetchPosts.pending]: state => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = [...state.posts, ...payload];
    },
  }
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
