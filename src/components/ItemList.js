import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Item} from './Item';

const ItemList = () => {
  const navigate = useNavigate();

  const goToScholarship = () => {
    console.log(111);
    navigate('/attestation/departments');
  };

  return (
    <div className="item-list">
      <h1>Уровень отображения</h1>
      <div className="my-5">
        <Item label="Университет" />
        <Item label="Институт" />
        <Item label="Кафедра" onClick={goToScholarship} />
        <Item label="Группа" />
      </div>
    </div>
  );
};

export {ItemList};
