import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

function PostNew() {
  const [content, setContent] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const newPost = {
        id: 0,  
        content: content,
        created: new Date().toISOString()  
      };

      const response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate('/');  
    } catch (error) {
      console.error('Ошибка при создании поста:', error); 
    }
  };

  

  return (
    <div>
      <h1>Новый пост</h1>
      <form className='post-new-form' onSubmit={handleSubmit}>
        <textarea className='textarea-block'
          value={content}
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Введите контент поста"
        />
        <button type="submit">Опубликовать</button>
        <Link to="/">
          <button type="button">Отменить</button>
        </Link>
      </form>
    </div>
  );
}

export default PostNew;
