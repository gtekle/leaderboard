import Scores from "./Scores";

const recentScoresContainer = document.querySelector('.recent-scores-container');

const renderScore = async () => {
  const recentScores = await Scores.getScores()

  recentScoresContainer.innerHTML = "";

  recentScores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score');
    scoreItem.textContent = `${user} ${score}`;
    recentScoresContainer.appendChild(scoreItem);
  });
};

export default renderScore;