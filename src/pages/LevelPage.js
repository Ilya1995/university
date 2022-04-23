import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const Item = ({label, onClick}) => {
  return (
    <div className="item mb-3" onClick={onClick}>
      {label}
    </div>
  );
};

const LevelPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToScholarship = () => {
    navigate(`${location.pathname}/departments`);
  };

  const goToCharts = () => {
    navigate(`${location.pathname}/university`);
  };

  const goToInstitutions = () => {
    navigate(`${location.pathname}/institutions`);
  };

  return (
    <div className="level-page">
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

export {LevelPage};
