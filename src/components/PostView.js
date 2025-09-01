import { useState, useEffect } from 'react';
import { useParams,useNavigate, Link } from 'react-router-dom';
import dayjs from 'dayjs'; 
import PostEdit from './PostEdit';

function PostView() {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7070/posts/${postId}`); 

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPost(data.post);
        console.log(data); 
      } catch (error) {
        console.error('Ошибка при получении поста:', error); 
        navigate('/'); 
      }
    };
    fetchData(); 
  }, [postId, navigate]); 

  const handlePostUpdate = (updatedPostData) => {
    setPost(updatedPostData);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:7070/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate('/'); 
    } catch (error) {
      console.error('Ошибка при удалении поста:', error); 
    }
  };

  if (!post) {
    return <div>Загрузка...</div>; 
  }

  if (isEditing) {
    return <PostEdit post={post} setIsEditing={setIsEditing} onSaveSuccess={handlePostUpdate} />;
  }
  
    const unixDate = dayjs(post.created).format('MM/DD/YY');

    
  return (
    <div>
      <h1>Просмотр поста</h1>
      <h3>Пост {post.id}</h3>
      <p>{post.content}</p>
      <p className='post-view-date'>Создан: {unixDate}</p>
      <button onClick={handleDelete}>Удалить</button>
      <button onClick={() => setIsEditing(true)}>Редактировать</button>
      <Link to="/">
        <button type="button">Назад</button>
      </Link>
    </div>
  );
}

export default PostView;
