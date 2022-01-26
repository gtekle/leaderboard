const gameId = 'OYxzLGROB4qVtRjyvig5';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class Scores {
  static async getScores() {
    return fetch(`${BASE_URL}/${gameId}/scores/`)
      .then((response) => response.json())
      .then((data) => data.result.sort((a, b) => b.score - a.score))
      .catch((error) => error);
  }

  static async addScore({ user, score }) {
    const newScore = { user, score };

    await fetch(`${BASE_URL}/${gameId}/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newScore),
      })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }
}

export default Scores;