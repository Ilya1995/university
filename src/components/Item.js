import React from 'react';

const Item = ({label, onClick}) => {
  return (
    <div className="item mb-3" onClick={onClick}>
      {label}
    </div>
  );
};

export {Item};
