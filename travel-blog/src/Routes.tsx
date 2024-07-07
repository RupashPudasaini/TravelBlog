import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map from './components/map';
import London from './components/london';
import NewYork from './components/newyork';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/components/london" element={<London />} />
        <Route path="/components/newyork" element={<NewYork />} />
    </Routes>
       );
};

export default AppRoutes;