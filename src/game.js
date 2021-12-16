import { url } from "./api";

export const displayScores = () => {
  const scores = getScores();
  let table = document.getElementById("table-scores");
  scores.then((score) => {
    let results = score.result;

    let tableScoreRow = "";
    results.forEach((result) => {
      tableScoreRow += `<tr>
                            <td>${result.user}</td>
                            <td>${result.score}</td>
                        </tr>`;
    });
    table.innerHTML = tableScoreRow;
  });
};

const getScores = async () => {
  const response = await fetch(url); // get the scores
  const scores = await response.json();
  return scores;
};

const recordScore = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
