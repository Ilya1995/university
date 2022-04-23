import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Breadcrumb} from '../components/Breadcrumb';
import {institutions} from '../utils/mock';

const InstitutionsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(() => institutions[0]);

  const handleClick = (institution) => {
    setSelected(institution);
  };

  const goToChartsGroup = (item) => {
    navigate(`${decodeURIComponent(location.pathname)}/${selected.name}/${item}`);
  };

  const goToChartsInstitution = (item) => {
    navigate(`${decodeURIComponent(location.pathname)}/${selected.name}`);
  };

  return (
    <div className="institutions-page">
      <Breadcrumb />
      <h1 className="my-5 text-center">Список институтов</h1>

      <Button variant="secondary" className="d-flex align-items-center mt-2 mb-5" onClick={goToChartsInstitution}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-eye me-1"
          viewBox="0 0 16 16"
        >
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
        Статистика для института
      </Button>

      <div className="institutions-page__content">
        <div className="d-flex gap-2 mb-4 flex-wrap">
          {institutions.map((institution) => (
            <Button
              key={institution.name}
              onClick={() => handleClick(institution)}
              variant="primary"
              className={`institution-btn ${selected.name === institution.name ? 'institution-btn_selected' : ''}`}
            >
              {institution.name}
            </Button>
          ))}
        </div>

        <div>
          {Object.keys(selected.groups).map((item) => (
            <div key={item} className="mb-4">
              <h5 className="mb-2">{item}</h5>
              <div className="list-group-btn">
                {selected.groups[item].map((group) => (
                  <Button key={group} variant="primary" className="group-btn" onClick={() => goToChartsGroup(group)}>
                    {group}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {InstitutionsPage};
