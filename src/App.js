import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Header';
import Missions from './routes/missions/missions';
import Profile from './routes/profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
