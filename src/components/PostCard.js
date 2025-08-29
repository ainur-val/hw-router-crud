import { Link } from 'react-router-dom'

function PostCard({ post }) {
  const { id, content, created } = post;

  return (
    <div className="post-card">
      <Link to={`/posts/${id}`}>
        <h3 className="post-name">Пост {id}</h3>
        <p className="post-text">{content.substring(0, 50)}...</p>
        <p className="post-date">Создан: {created}</p>
      </Link>
    </div>
  );
}

export default PostCard;
