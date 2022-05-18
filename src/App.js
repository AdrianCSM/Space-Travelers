import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './routes/rockets/Rockets';
import Missions from './redux/missions/missions';
import Profile from './routes/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
