import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItemAssigner from './pages/ItemAssigner';
import ReceiptUpload from './pages/ReceiptUpload';
import Results from './pages/Results';
// import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receipt-upload" element={<ReceiptUpload />} />
        <Route path="/assign" element={<ItemAssigner />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
