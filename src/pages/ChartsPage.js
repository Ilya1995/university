import React from 'react';
import {Breadcrumb} from '../components/Breadcrumb';
import {Circle} from '../components/Circle';

const ChartsPage = () => {
  return (
    <div className="charts-page">
      <Breadcrumb />
      <h1>Полугодие</h1>
      <div className="d-flex justify-content-start my-5 gap-5">
        <Circle percent="25" label="Количество аттестованных студентов" />
        <Circle percent="75" label="Количество неаттестованных студентов" />
      </div>
      <div className="line" />
      <h5>Общее количество студентов</h5>
    </div>
  );
};

export {ChartsPage};
