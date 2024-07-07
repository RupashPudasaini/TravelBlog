import React from 'react';
import photo from './rupash.jpg';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { BrowserRouter, Link} from 'react-router-dom';
import AppRoutes from './Routes';


const App: React.FC = () => {
  return (
     <BrowserRouter>
      <div className="App">
         <div className='overlay'> 
          <Link  to="/">     
           <img src={photo} className="profile-photo" alt="rupash"/>
         </Link> 
          </div>

      <AppRoutes/>
      </div>
    </BrowserRouter>
  )

}

export default App;
