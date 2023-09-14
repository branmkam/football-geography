import './App.css';
import Banner from './components/Banner';
import LeagueSelector from './components/LeagueSelector';
import Map from './components/Map';
import { useState, useEffect } from 'react';

function App() {
  const [league, setLeague] = useState('Premier League|England')
  const [club, setClub] = useState(null);

  return (
    <div className="App">
      <Banner league={league} setLeague={setLeague} club={club} setClub={setClub} />
      <Map league={league} setClub={setClub} />
    </div>
  );
}

export default App;
