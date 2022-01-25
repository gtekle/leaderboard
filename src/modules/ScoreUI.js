import Scores from "./Scores";

const recentScoresContainer = document.querySelector('.recent-scores-container');
const btnRefresh = document.querySelector('.btn-refresh');

btnRefresh.addEventListener('click', () => {
  console.log("refresh clicked")
  Scores.getScores();
  renderScore();
});

const renderScore = async () => {
  const recentScores = await Scores.getScores()

  recentScoresContainer.innerHTML = "";

  recentScores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score');
    scoreItem.innerHTML = `<span>${user}</span><span>${score}</span>`
    recentScoresContainer.appendChild(scoreItem);
  });
};

export default renderScore;