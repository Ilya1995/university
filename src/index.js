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
import {DepartmentsPage} from './pages/DepartmentsPage';
import {ChartsPage} from './pages/ChartsPage';
import {InstitutionsPage} from './pages/InstitutionsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="attestation" element={<AttestationPage />} />
      <Route path="attestation/departments" element={<DepartmentsPage />} />
      <Route path="attestation/departments/:name" element={<ChartsPage />} />
      <Route path="attestation/university" element={<ChartsPage />} />
      <Route path="attestation/institutions" element={<InstitutionsPage />} />
      <Route path="attestation/institutions/:name" element={<ChartsPage />} />
      <Route path="attestation/institutions/:name/:group" element={<ChartsPage />} />

      <Route path="scholarship" element={<ScholarshipPage />} />
      <Route path="session" element={<SessionPage />} />
    </Routes>
    <Footer />
  </Router>,
);
