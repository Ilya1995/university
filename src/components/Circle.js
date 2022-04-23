import React, {useEffect, useState} from 'react';

const Circle = ({label = '', percent = 100}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);

    const timerId = setInterval(() => {
      setCount((prev) => {
        const newState = ++prev;
        if (newState >= percent) {
          clearInterval(timerId);
          return prev;
        } else {
          return newState;
        }
      });
    }, 10);
  }, [percent]);

  return (
    <div>
      <div className="circle mb-3">{count}%</div>
      <div>{label}</div>
    </div>
  );
};

export {Circle};
