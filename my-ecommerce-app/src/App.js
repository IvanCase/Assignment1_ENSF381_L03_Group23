import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
