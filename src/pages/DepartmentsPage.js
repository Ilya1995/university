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
    <div className="departments-page">
      <Breadcrumb />
      <ol className="list-counter-circle">
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
