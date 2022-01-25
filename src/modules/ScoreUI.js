const scores = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const recentScoresContainer = document.querySelector('.recent-scores-container');

const renderScore = () => {
  scores.forEach((score) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score');
    scoreItem.textContent = `${score.name} ${score.score}`;
    recentScoresContainer.appendChild(scoreItem);
  });
};

export default renderScore;