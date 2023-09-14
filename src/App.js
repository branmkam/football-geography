import "./App.css";
import Banner from "./components/Banner";
import LeagueSelector from "./components/LeagueSelector";
import Map from "./components/Map";
import { useState, useEffect } from "react";
import clubs from "./data/clubs_official.json";
import axios from "axios";

function App() {
  const [league, setLeague] = useState("Premier League|England");
  const [club, setClub] = useState(null);
  const [geoCode, setGeoCode] = useState({city : null, country : null, state: null});
  const position = club
    ? clubs["coordinates"][club]
        .split(" ")
        .map((c) => parseFloat(c))
        .reverse()
    : null;

  useEffect(() => {
    if (club) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
        )
        .then((res) => {
          setGeoCode(res.data.address);
        });
    }
  }, [club]);

  useEffect(() => {
    console.log(geoCode);
  }, [geoCode])

  return (
    <div className="App">
      <Banner
        league={league}
        setLeague={setLeague}
        club={club}
        setClub={setClub}
      />
      <Map league={league} setClub={setClub} geoCode={geoCode}/>
    </div>
  );
}

export default App;
