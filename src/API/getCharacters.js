
export function getCharacters() {
    const url = 'http://localhost:3004/characters';
    return fetch(url)
      .then(data => data.json())
  }
