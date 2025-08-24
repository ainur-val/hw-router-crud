import React from 'react';
import { Link } from 'react-router-dom'; 

function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <h3>Пост {post.id}</h3>
        <p>{post.content.substring(0, 50)}...</p>
        <p>Создан: {post.created}</p>
      </Link>
    </div>
  );
}

export default PostCard;
