import L from 'leaflet';

export default function MarkerIcon(props) {

    const { url } = props;

    const icon = new L.Icon({
    options: {
        iconUrl: url,
        iconRetinaUrl: url,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(60, 75),
        className: 'leaflet-div-icon'
    }
    });

    return icon;
}