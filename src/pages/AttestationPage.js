import React from 'react';
import {Breadcrumb} from '../components/Breadcrumb';
import {ItemList} from '../components/ItemList';

const AttestationPage = () => {
  return (
    <div className="attestation-page">
      <Breadcrumb />
      <ItemList />
    </div>
  );
};

export {AttestationPage};
