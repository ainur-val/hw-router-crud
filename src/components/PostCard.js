import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

function PostCard({ post }) {
  const { id, content, created } = post;
  
  const unixDate = dayjs(created).format('MM/DD/YY');

  return (
    <div className="post-card">
      <Link to={`/posts/${id}`}>
        <h3 className="post-name">Пост {id}</h3>
        <p className="post-text">{content.substring(0, 50)}...</p>
        <p className="post-date">Создан: {unixDate}</p>
      </Link>
    </div>
  );
}

export default PostCard;
