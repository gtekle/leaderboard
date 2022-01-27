import renderScore from './ScoreUI.js';
import Scores from './Scores.js';

const NAME_INVALID = 'Name can have alphabets only!';

const validateNameInput = (name) => {
  const nameValue = name.value.trim();
  const nameRegex = /^[a-zA-Z ]*$/;

  if (!nameRegex.test(nameValue)) {
    return false;
  }

  return true;
};

const onFormSubmit = () => {
  const addScoreForm = document.querySelector('#form-add-score');
  const labelError = document.querySelector('.input-errors');

  addScoreForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, score } = addScoreForm.elements;
    const isValidName = validateNameInput(name);

    if (isValidName) {
      labelError.style.display = 'none';
      await Scores.addScore({ user: name.value, score: Number(score.value, 10) });

      event.target.reset();

      renderScore();
    } else {
      labelError.style.display = 'block';
      labelError.innerHTML = `${NAME_INVALID}!\n`;

      setTimeout(() => {
        labelError.style.display = 'none';
      }, 2000);
    }

    name.focus();
  });
};

const renderFormAddScore = () => {
  const mainSection = document.getElementById('main');
  const addScoreSection = document.createElement('section');
  addScoreSection.classList.add('add-score');
  addScoreSection.innerHTML = `
        <h2 class="section-title">Add you score</h2>
        <form action="" id="form-add-score">
          <input type="text" name="name" id="name" placeholder="Enter your name" required>
          <input type="number" name="score" id="score" placeholder="Enter your score" required>
          <input type="submit" value="Submit" class="btn btn-submit"><p class="input-errors"></p>
        </form>`;
  mainSection.appendChild(addScoreSection);

  onFormSubmit();
};

export default renderFormAddScore;
