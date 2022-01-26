import Scores from './Scores.js';

const recentScoresContainer = document.querySelector('.recent-scores-container');
const btnRefresh = document.querySelector('.btn-refresh');

const renderScore = async () => {
  const recentScores = await Scores.getScores();

  recentScoresContainer.innerHTML = '';

  recentScores.forEach(({ user, score }, index) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score');
    scoreItem.innerHTML = `<div><span>${index + 1}    </span><span>${user}</span></div><span>${score}</span>`;
    recentScoresContainer.appendChild(scoreItem);
  });
};

btnRefresh.addEventListener('click', () => {
  Scores.getScores();
  renderScore();
});

export default renderScore;