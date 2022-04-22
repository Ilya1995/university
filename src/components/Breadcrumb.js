import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const routs = {
  attestation: 'Аттестация',
  departments: 'Кафедры',
  university: 'Университет',
  institutions: 'Институты',
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
              {!isLast && (
                <span className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              )}
            </div>
          );
        })}
      </div>
      <Button variant="primary" className="d-flex align-items-center" onClick={goToHome}>
        На главную
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-heart-fill ms-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
          />
          <path
            fillRule="evenodd"
            d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"
          />
        </svg>
      </Button>
    </div>
  );
};

export {Breadcrumb};
