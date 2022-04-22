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

  const goToCharts = (item) => {
    navigate(`${decodeURIComponent(location.pathname)}/${selected.name}/${item}`);
  };

  return (
    <div className="institutions-page">
      <Breadcrumb />

      <div className="institutions-page__content">
        <div className="d-flex gap-2 mb-4">
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
                  <Button key={group} variant="primary" className="group-btn" onClick={() => goToCharts(group)}>
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
