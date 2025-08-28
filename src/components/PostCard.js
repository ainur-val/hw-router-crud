import { Link } from 'react-router-dom'

function PostCard({ post }) {
  const { id, content, created } = post;

  return (
    <div className="post-card">
      <Link to={`/posts/${id}`}>
        <h3>Пост {id}</h3>
        <p>{content.substring(0, 50)}...</p>
        <p>Создан: {created}</p>
      </Link>
    </div>
  );
}

export default PostCard;
