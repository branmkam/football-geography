import clubs from "../data/clubs_official.json";

export default function LeagueSelector(props) {
    let { league, setLeague } = props;

    let keys = Object.keys(clubs);
    let leagues = Object.values(clubs["league"])
    .filter((l, i, self) => i == self.indexOf(l))
    .filter(l => Object.values(clubs["league"]).filter(x => x == l).length > 15)
    .sort();

    let countries = Object.values(clubs["country"]);

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
