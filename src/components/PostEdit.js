import { useState, useEffect } from 'react';

function PostEdit({ post, setIsEditing, onSaveSuccess }) {
  const [content, setContent] = useState(post.content);
  
  useEffect(() => {
    setContent(post.content);
  }, [post.content]);

   const handleSave = async () => {
    try {
      const updatedPost = { ...post, content: content }; 

      const response = await fetch(`http://localhost:7070/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      onSaveSuccess(updatedPost);
      setIsEditing(false);
    } catch (error) {
      console.error('Ошибка при обновлении поста:', error); 
    }
  };

  const handleCancel = () => {
    setIsEditing(false);  
  };

  return (
    <div>
      <h2>Редактирование поста</h2>
      <div className='edit-container'>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)} 
      />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={handleCancel}>Отменить</button>
      </div>
    </div>
  );
}

export default PostEdit;
