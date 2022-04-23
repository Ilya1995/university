import React from 'react';
import {useLocation} from 'react-router-dom';
import {Breadcrumb} from '../components/Breadcrumb';
import {Circle} from '../components/Circle';
import {statistics} from '../utils/mock';

const ChartsPage = () => {
  const location = useLocation();
  const last = location.pathname.split('/').pop();
  const item = decodeURIComponent(last);

  const firstPercent = statistics[item]?.[0] || 25;
  const secondPercent = statistics[item]?.[1] || 75;

  return (
    <div className="charts-page">
      <Breadcrumb />
      <h1>Полугодие</h1>
      <div className="d-flex justify-content-start my-5 gap-5">
        <Circle percent={firstPercent} label="Количество аттестованных студентов" />
        <Circle percent={secondPercent} label="Количество неаттестованных студентов" />
      </div>
      <div className="line" />
      <h5>Общее количество студентов</h5>
    </div>
  );
};

export {ChartsPage};
