const gameId = 'OYxzLGROB4qVtRjyvig5';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class Scores {
  static getScores() {
    return this.recentScores = fetch(`${BASE_URL}/${gameId}/scores/`)
      .then(response => response.json())
      .then(data => data.result)
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export default Scores;