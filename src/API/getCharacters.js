
export function getCharacters() {
    const url = 'https://custom-db.herokuapp.com/characters';
    return fetch(url)
      .then(data => data.json())
  }
