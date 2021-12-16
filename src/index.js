import "./style.css";
import { displayScores, recordScore } from "./game";

displayScores();

const submitScore = () => {
  let name = document.getElementById("name");
  let score = document.getElementById("score");

  let data = {
    user: name.value,
    score: score.value,
  };
  recordScore(JSON.stringify(data));
};

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitScore);

let refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", displayScores);
