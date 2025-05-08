import React, { useState } from 'react';


const BlogForm = ({ onPostAdded, onPostUpdated, post }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      timestamp: new Date().toISOString()
    };
    try {
      if (post) {
        onPostUpdated(post.id, newPost);
      } else {
        onPostAdded(newPost);
      }
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating/updating post:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="formdiv">
      <div >
        <p htmlFor="title">Title:</p>
        <input
          type="text"
          id="title"
          className='inp'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <p htmlFor="content" >Content:</p>
        <textarea
        className=''
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">{post ? 'UPDATE POST' : 'ADD POST'}</button>
    </form>
    </>
  );
};

export default BlogForm;