import LeagueSelector from "./LeagueSelector";
import clubs from '../data/clubs_official.json';

export default function Banner(props) {
  const { club, setClub, league, setLeague } = props;

  return (
    <div style={{ backgroundColor: '#0033ee88', position: 'fixed', width: '100vw', height: '20%', zIndex: 50}}>
        <h1 style={{fontSize:30, color:'white'}}>{club == null ? 'Select a club!' : clubs['club'][club]}</h1>
        <h2 style={{fontSize:24, color:'white'}}>{club == null ? '' : `${clubs['league'][club]} | ${clubs['country'][club]}`} </h2>
        <h2 style={{fontSize:24, color:'white'}}><a target="_blank" href={club == null ? '#' : clubs['website'][club]}>{club == null ? '' : clubs['website'][club]}</a></h2>
        <LeagueSelector league={league} setLeague={setLeague} />
    </div>
  );
}
