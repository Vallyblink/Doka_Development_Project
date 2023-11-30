import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/mainPage'; 
 export const App = () => {
  return (
    <Routes>
        <Route path="/main" element={<MainPage/>} />
        
    </Routes>
  );
};

