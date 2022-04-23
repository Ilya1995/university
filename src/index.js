import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {HomePage} from './pages/HomePage';
import {LevelPage} from './pages/LevelPage';
import {DepartmentsPage} from './pages/DepartmentsPage';
import {ChartsPage} from './pages/ChartsPage';
import {InstitutionsPage} from './pages/InstitutionsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":item" element={<LevelPage />} />
        <Route path=":item/departments" element={<DepartmentsPage />} />
        <Route path=":item/departments/:name" element={<ChartsPage />} />
        <Route path=":item/university" element={<ChartsPage />} />
        <Route path=":item/institutions" element={<InstitutionsPage />} />
        <Route path=":item/institutions/:name" element={<ChartsPage />} />
        <Route path=":item/institutions/:name/:group" element={<ChartsPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>,
);
