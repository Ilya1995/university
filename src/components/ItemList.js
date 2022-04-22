import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Item} from './Item';

const ItemList = () => {
  const navigate = useNavigate();

  const goToScholarship = () => {
    navigate('/attestation/departments');
  };

  const goToCharts = () => {
    navigate('/attestation/university');
  };

  const goToInstitutions = () => {
    navigate('/attestation/institutions');
  };

  return (
    <div className="item-list">
      <h1>Уровень отображения</h1>
      <div className="my-5">
        <Item label="Университет" onClick={goToCharts} />
        <Item label="Институт" onClick={goToInstitutions} />
        <Item label="Кафедра" onClick={goToScholarship} />
        <Item label="Группа" onClick={goToInstitutions} />
      </div>
    </div>
  );
};

export {ItemList};
