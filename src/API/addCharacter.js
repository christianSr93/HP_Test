  export async function addCharacter(data) {
    data.id = data.name;
    const url = 'https://custom-db.herokuapp.com/characters';
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   
    return rawResponse
  }
