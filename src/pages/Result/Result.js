import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push('/');
    }
  }, [name, history]);

  const handleSave = () => {
    // Setup localstorage to store data
    const historyScore = JSON.parse(localStorage.getItem('history')) || [];

    const history = {
      name,
      score,
    };

    historyScore.push(history);
    localStorage.setItem('history', JSON.stringify(historyScore));
  };

  return (
    <div className="result">
      <span className="result__title">{name}</span>
      <span className="result__title">Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: 'center', marginTop: 20 }}
        href="/"
      >
        Go To Homepage
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: 'center', marginTop: 20 }}
        href="/history"
        onClick={handleSave}
      >
        Save Achievements
      </Button>
    </div>
  );
};

export default Result;
