import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {chevronRigh, house} from '../utils/svg';

const routs = {
  attestation: 'Аттестация',
  departments: 'Кафедры',
  university: 'Университет',
  institutions: 'Институты',
  scholarship: 'Стипендия',
  session: 'Сессия',
};

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const items = location.pathname.split('/').slice(1);

  const handleClick = (value = '') => {
    const url = location.pathname.slice(0, location.pathname.indexOf(value));
    navigate(url + value);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="breadcrumb justify-content-between mt-2 w-100">
      <div className="d-flex align-items-center">
        {items.map((item, index) => {
          const isLast = item === items[items.length - 1];
          return (
            <div key={index}>
              <span
                onClick={() => !isLast && handleClick(item)}
                className={`breadcrumb-item ${isLast ? 'breadcrumb-item_disabled' : ''}`}
              >
                {routs[item] || decodeURIComponent(item)}
              </span>
              {!isLast && <span className="mx-2">{chevronRigh}</span>}
            </div>
          );
        })}
      </div>
      <Button variant="secondary" className="d-flex align-items-center" onClick={goToHome}>
        На главную
        {house}
      </Button>
    </div>
  );
};

export {Breadcrumb};
