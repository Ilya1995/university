import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {HomePage} from './pages/HomePage';
import {AttestationPage} from './pages/AttestationPage';
import {ScholarshipPage} from './pages/ScholarshipPage';
import {SessionPage} from './pages/SessionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="attestation" element={<AttestationPage />} />
        <Route path="scholarship" element={<ScholarshipPage />} />
        <Route path="session" element={<SessionPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
