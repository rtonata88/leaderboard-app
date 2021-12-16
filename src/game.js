import url from './api';

const getScores = async () => {
  const response = await fetch(url()); // get the scores
  const scores = await response.json();
  return scores;
};

export const displayScores = () => {
  const scores = getScores();
  const table = document.getElementById('table-scores');
  scores.then((score) => {
    const results = score.result;

    let tableScoreRow = '';
    results.forEach((result) => {
      tableScoreRow += `<tr>
                            <td>${result.user}</td>
                            <td>${result.score}</td>
                        </tr>`;
    });
    table.innerHTML = tableScoreRow;
  });
};

export const recordScore = async (data) => {
  await fetch(url(), {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  // displayScores();
};
