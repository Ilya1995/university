import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Breadcrumb} from '../components/Breadcrumb';
import {departments} from '../utils/mock';

const DepartmentsPage = () => {
  return (
    <div className="departments-page">
      <Breadcrumb />

      <ListGroup as="ol" numbered>
        {departments.map((department) => (
          <ListGroup.Item key={department} action as="li" className="d-flex justify-content-between align-items-start">
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
