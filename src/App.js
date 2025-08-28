import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostList from './components/PostList'; 
import PostNew from './components/PostNew'; 
import PostView from './components/PostView'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={< PostList />} />
        <Route exact path="/posts/new" element={< PostNew />} />
        <Route exact path="/posts/:postId" element={< PostView />} />
        </ Routes >
      </div>
    </Router>
  );
}

export default App;
