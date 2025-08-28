import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import PostCard from './PostCard'; 

function PostList() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts'); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data); 
      } catch (error) {
        console.error('Ошибка при получении постов:', error); 
      }
    };
    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Посты</h1>
      <Link to="/posts/new">Создать пост</Link>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} /> 
        ))}
      </div>
    </div>
  );
}

export default PostList;
