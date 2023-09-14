import clubs from "../data/clubs_official.json";

export default function LeagueSelector(props) {
  let { league, setLeague } = props;

  let keys = Object.keys(clubs["league"]);
  let allLeagues = Object.values(clubs["league"]);
  let countries = Object.values(clubs["country"]);

//   let combined = keys.map((k) => [allLeagues[k], countries[k]]);
//   let comdunique = combined.map((l, i, self) => self.indexOf(l)) //filter((l, i, self) => i == self.indexOf(l));

  let leagues = Object.values(clubs["league"])
    .filter((l, i, self) => i == self.indexOf(l))
    .filter(
      (l) => Object.values(clubs["league"]).filter((x) => x == l).length > 15
    )
    .sort();

  return (
    <select
      value={league}
      onChange={(e) => setLeague(e.target.value)}
      style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        zIndex: 40,
        width: "25%",
        fontSize: "18px",
      }}
    >
      <option value="all">All clubs</option>
      {leagues.map((l) => (
        <option
          value={`${l}|${countries[Object.values(clubs["league"]).indexOf(l)]}`}
        >
          {l} | {countries[Object.values(clubs["league"]).indexOf(l)]}{" "}
        </option>
      ))}
    </select>
  );
}
