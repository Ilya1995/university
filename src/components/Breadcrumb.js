import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const routs = {
  attestation: 'Аттестация',
  departments: 'Кафедра',
  university: 'Университет',
};

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const items = location.pathname.split('/').slice(1);

  const handleClick = (url = '') => {
    navigate('/' + url);
  };

  return (
    <div className="breadcrumb">
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
            {!isLast && <span className="mx-2">{'>'}</span>}
          </div>
        );
      })}
    </div>
  );
};

export {Breadcrumb};
