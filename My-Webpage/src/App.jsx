// App.js
import './App.css';  // Adjust the path as needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import WorkExperience from './pages/WorkExperience';
import Publications from './pages/Publications';
import ContactInfo from './pages/ContactInfo';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="body-bg">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<ContactInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
