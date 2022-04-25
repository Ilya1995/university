import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Breadcrumb} from '../components/Breadcrumb';
import {departments} from '../utils/mock';

const DepartmentsPage = () => {
  const navigate = useNavigate();

  const goToCharts = (item) => {
    navigate(`/attestation/departments/${item}`);
  };

  return (
    <div className="container departments-page">
      <Breadcrumb />
      <h1 className="my-5 text-center text-color">Список кафедр</h1>
      <ol className="list-counter-circle mt-2 mb-5">
        {departments.map((department) => (
          <li key={department} onClick={() => goToCharts(department)}>
            {department}
          </li>
        ))}
      </ol>
    </div>
  );
};

export {DepartmentsPage};
