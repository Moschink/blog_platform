import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost, updatePost } from './BlogService';
import BlogForm from './BlogForm';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handlePostUpdated = async (id, updatedPost) => {
    try {
      try {
        await updatePost(id, updatedPost);
        setPosts(posts.map(post => post.id === id ? updatedPost : post));
        setEditingPost(null);
      } catch (error) {
        console.error('Error updating post:', error);
      }
      setPosts(posts.map(post => post.id === id ? updatedPost : post));
      setEditingPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handlePostAdded = async (newPost) => {
    try {
      const response = await fetchPosts();
      const updatedPosts = [...response, newPost];
      setPosts(updatedPosts);
      setEditingPost(null);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    
    <div className="blog-list-container">
      
      <h1 className="section-title">User Section</h1>
      <h1 className="section-title1">Blog Posts</h1>
     
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <div className="post-buttons">
              <button onClick={() => handleDelete(post.id)} className="delete-button">DELETE</button>
              <button onClick={() => handleEdit(post)} className="edit-button">EDIT</button>
            </div>
          </div>
        ))}
      </div>
      {editingPost && (
        <BlogForm
          onPostAdded={handlePostAdded}
          onPostUpdated={handlePostUpdated}
          post={editingPost}
        />
      )}
    </div>
  );
};

export default BlogList;