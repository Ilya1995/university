import React from 'react';
import {useNavigate} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
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

      <ListGroup as="ol" numbered>
        {departments.map((department) => (
          <ListGroup.Item
            key={department}
            action
            as="li"
            onClick={() => goToCharts(department)}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{department}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export {DepartmentsPage};
