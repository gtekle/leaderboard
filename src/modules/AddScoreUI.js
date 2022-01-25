import renderScore from "./ScoreUI.js";
import Scores from "./Scores.js";

const onFormSubmit = () => {
  const addScoreForm = document.querySelector('#form-add-score');

  addScoreForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, score } = addScoreForm.elements;

    await Scores.addScore({ user: name.value, score: Number(score.value, 10) });

    renderScore();
  })
}

const renderFormAddScore = () => {
  const mainSection = document.getElementById('main');
  const addScoreSection = document.createElement('section');
  addScoreSection.classList.add('add-score');
  addScoreSection.innerHTML = `
        <h2 class="section-title">Add you score</h2>
        <form action="" id="form-add-score">
          <input type="text" name="name" id="name" placeholder="Enter your name" required>
          <input type="number" name="score" id="score" placeholder="Enter your score" required>
          <input type="submit" value="Submit" class="btn btn-submit">
        </form>`;
  mainSection.appendChild(addScoreSection);

  onFormSubmit();
};

export default renderFormAddScore;
