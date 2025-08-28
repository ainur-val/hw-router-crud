import { useState } from 'react';

function PostEdit({ post, setIsEditing }) {
  const [content, setContent] = useState(post.content)

  const handleSave = async () => {
    try {
      const updatedPost = { ...post, content: content }; 

      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

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
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)} 
      />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={handleCancel}>Отменить</button>
    </div>
  );
}

export default PostEdit;
