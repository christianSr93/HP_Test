  export async function addCharacter(data) {
    data.id = data.name;
    const url = 'http://localhost:3004/characters';
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   
    return rawResponse
  }
