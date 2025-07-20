import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ItineraryForm from './pages/ItineraryForm';
import './input.css';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<ItineraryForm />} />
      </Routes>
    </Router>
  );
};

export default App;