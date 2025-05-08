import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import './App.css';
import { createPost, updatePost, fetchPosts } from './BlogService';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        console.log('Fetched posts:', data);
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handlePostAdded = async (newPost) => {
    try {
      const createdPost = await createPost(newPost);
      setPosts([...posts, createdPost]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handlePostUpdated = async (id, updatedPost) => {
    try {
      const updatedPostResponse = await updatePost(id, updatedPost);
      setPosts(posts.map(post => (post.id === id ? updatedPostResponse : post)));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handlePostDeleted = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className='blog_spot'>BLOG SPOT</h1>
      </header>
      <main className="app-main">
        <div className="grid-container">
          
          <div className="grid-item form-container">
          <h2 className='section-title'>Admin Section</h2>
            <BlogForm onPostAdded={handlePostAdded} onPostUpdated={handlePostUpdated} />
          </div>
          <div className="grid-item blog-list-container">
            <BlogList posts={posts} onPostDeleted={handlePostDeleted} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
