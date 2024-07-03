
"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


// Fix for default icon issue with Leaflet and React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map: React.FC = () => {
    const [,setIsClient] = useState(false)
    const router = useRouter();

  useEffect(() => {
    // Load the leaflet styles dynamically
    const L = require('leaflet');
    L.Icon.Default.imagePath = '.';
    setIsClient(true);

  }, []);

  const handlePopupClick = (page: string) => {
    router.push(page);
  }

  return (
    <>
    
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.5074, -0.1278]}>
        <Popup>
            <span onClick={() => handlePopupClick('/pages/unitedkingdom')} style={{ cursor: 'pointer', color: 'blue' }}>
            United Kingdom
          </span>
        </Popup>
      </Marker>
    </MapContainer>
    </>
  );
};

export default Map;


