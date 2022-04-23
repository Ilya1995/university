import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

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
      <h1 className="mt-5 mb-4">Уровень отображения</h1>

      <div className="level-page__content">
        <div className="cube university" onClick={goToCharts}>
          <img className="cube__img" src="university.png" alt="university"></img>
          <div className="cube__label">Университет</div>
        </div>
        <div className="cube institution" onClick={goToInstitutions}>
          <img className="cube__img" src="institution.png" alt="institution"></img>
          <div className="cube__label">Институт</div>
        </div>
        <div className="cube department" onClick={goToScholarship}>
          <img className="cube__img" src="department.png" alt="department"></img>
          <div className="cube__label">Кафедра</div>
        </div>
        <div className="cube group" onClick={goToInstitutions}>
          <img className="cube__img" src="group.png" alt="group"></img>
          <div className="cube__label">Группа</div>
        </div>
      </div>
    </div>
  );
};

export {LevelPage};
