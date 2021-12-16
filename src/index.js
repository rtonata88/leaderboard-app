import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { displayScores, recordScore } from './game';

displayScores();

const submitScore = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  const data = {
    user: name.value,
    score: score.value,
  };
  recordScore(JSON.stringify(data));
  name.value = '';
  score.value = '';
};

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', submitScore);

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', displayScores);
