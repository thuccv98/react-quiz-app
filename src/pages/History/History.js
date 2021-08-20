import { Button } from '@material-ui/core';
import React from 'react';
import './History.css';

const History = () => {
  const dataHistory = JSON.parse(localStorage.getItem('history'));
  console.log(dataHistory);

  return (
    <div className="history">
      <span className="history__title">👦Player History🦾</span>

      {dataHistory ? (
        dataHistory.map((i) => (
          <span
            className="history__item"
            key={i}
          >{`😎Name: ${i.name}, Score: ${i.score}`}</span>
        ))
      ) : (
        <span className="history__item">No History!</span>
      )}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: 'center', marginTop: 20 }}
        href="/"
      >
        Back
      </Button>
    </div>
  );
};

export default History;
