import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression }  from 'leaflet';
import countries from './countries.json'; 
import markerIconPng from "leaflet/dist/images/marker-icon.png"

const Map: React.FC = () => {
  return (      
          <MapContainer center={[20, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country, index) => (
        <Marker key={index} position={country.position as LatLngExpression} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>
            <Link to={country.url}>
              <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                {country.title}
              </span>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
   
  );
};

export default Map;
