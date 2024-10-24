import React, { useState } from 'react';
import './styles/BlogDetail.css';
import { useLocation } from "react-router-dom";

const BlogDetail = () => {
  const location = useLocation();
  const { blog } = location.state || {}; // Get the content from the state

  const [likes, setLikes] = useState(blog.likes);
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState(blog.comments);

  // Function to handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Function to handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (userComment.trim()) {
      setComments([...comments, { user: 'New User', text: userComment }]);
      setUserComment(''); // Clear input after submission
    }
  };

  // Function to handle share button (dummy function)
  const handleShare = () => {
    alert('Share functionality will be implemented here.');
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">{blog.title}</h2>
     
      {/* Render HTML content safely */}
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
      
      <div className="blog-meta">
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Published on:</strong> {new Date(blog.date).toLocaleDateString()}</p>
        <p><strong>Updated on:</strong> {new Date(blog.modified_date).toLocaleDateString()}</p>
      </div>

      {/* Like and Share Section */}
      {/* <div className="blog-actions">
        <button className="like-button" onClick={handleLike}>👍 Like ({likes})</button>
        <button className="share-button" onClick={handleShare}>🔗 Share</button>
      </div> */}

      {/* Comment Section */}
      {/* <h3>Comments({comments.length})</h3>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.user}:</strong> {comment.text}
          </li>
        ))}
      </ul> */}

      {/* Add Comment Form */}
      {/* <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Submit Comment</button>
      </form> */}
    </div>
  );
};

export default BlogDetail;