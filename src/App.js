import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './store/rockets/Rockets';
import Missions from './store/missions/Missions';
import Profile from './store/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
