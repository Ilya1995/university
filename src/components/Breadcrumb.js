import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const routs = {
  attestation: 'Аттестация',
  departments: 'Кафедра',
};

const Breadcrumb = () => {
  const location = useLocation();
  const items = location.pathname.split('/').slice(1);
  const last = items[items.length - 1];
  console.log(items, last);

  return (
    <div className="breadcrumb">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/${item}`}>{routs[item]}</Link>
            {item !== last && <span className="mx-2">{'>'}</span>}
          </div>
        );
      })}
    </div>
  );
};

export {Breadcrumb};
