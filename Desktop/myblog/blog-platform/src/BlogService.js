import axios from 'axios';

const API_URL = 'http://localhost:3003/posts';

const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    // Note: This function only fetches posts and does not modify the database.
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

export { updatePost, createPost, deletePost, fetchPosts };