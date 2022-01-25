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
}

export default renderFormAddScore;


