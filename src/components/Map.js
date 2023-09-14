import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import clubs from "../data/clubs_official.json";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "./MarkerIcon";
import L from "leaflet";

export default function Map(props) {
  let { league, setClub, geoCode } = props;
  let [leagueName, country] = league.split("|");

  let keys = Object.keys(clubs["league"]);
  let toShow =
    league == "all"
      ? keys
      : keys.filter((k) => clubs["league"][k] === leagueName);
  return (
    <MapContainer
      center={[10, 0]}
      style={{ zIndex: 0, width: "100vw", height: "100vh" }}
      zoom={3}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toShow.map((k) => {
        let coords = clubs["coordinates"][k]
          .split(" ")
          .map((c) => parseFloat(c))
          .reverse();
        let url = clubs["logoImage"][k]
          ? clubs["logoImage"][k]
          : "https://freesvg.org/img/soccer_ball2.png";
        const icon = new L.Icon({
          iconUrl: url,
          iconRetinaUrl: url,
          iconSize: new L.Point(30, 30),
          className: "leaflet-div-icon",
        });
        return (
          <Marker
            position={coords}
            icon={icon}
            eventHandlers={{
              click: (e) => {
                setClub(k);
              },
            }}
          >
            <Popup>
              {`${clubs["club"][k]}`}
              <br />
              {`${clubs["venue"][k]}`}
              <br />
              {geoCode.city != null
                ? `${geoCode.city} `
                : geoCode.county != null
                ? `${geoCode.county} `
                : geoCode.municipality != null
                ? `${geoCode.municipality} `
                : ""}
              <br />
              {geoCode.state != null ? `${geoCode.state}, ` : ""}
              {geoCode.country != null ? `${geoCode.country} ` : ""}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
