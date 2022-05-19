import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
// eslint-disable-next-line import/extensions
import Rockets from './routes/rockets/Rockets';
import Profile from './routes/profile/Profile';
// eslint-disable-next-line import/extensions
import Missions from './routes/missions/Missions.js';
import NoMatch from './routes/noMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
