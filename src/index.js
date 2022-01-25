import './assets/css/style.css';
import renderScore from './modules/ScoreUI.js';
import renderFormAddScore from './modules/AddScoreUI.js';

window.addEventListener('load', () => {
  renderScore();
  renderFormAddScore();
});