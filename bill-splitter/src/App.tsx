import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BillSummary from './pages/BillSummary';
import ItemAssigner from './pages/ItemAssigner';
import ReceiptUpload from './pages/ReceiptUpload';
import ConfirmationPage from './pages/ConfirmationPage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<ReceiptUpload />} />
        <Route path="/assign" element={<ItemAssigner />} />
        <Route path="/summary" element={<BillSummary />} />
      </Routes>
    </Router>
  );
};

export default App;
