import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList'; // Компонент для отображения списка постов
import PostNew from './components/PostNew'; // Компонент для создания нового поста
import PostView from './components/PostView'; // Компонент для просмотра отдельного поста

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Главная страница - список постов */}
          <Route exact path="/" element={< PostList />} />
          {/* Страница создания нового поста */}
          <Route exact path="/posts/new" element={< PostNew />} />
          {/* Страница просмотра отдельного поста (с указанием ID) */}
          <Route exact path="/posts/:postId" element={< PostView />} />
        </ Routes >
      </div>
    </Router>
  );
}

export default App;
