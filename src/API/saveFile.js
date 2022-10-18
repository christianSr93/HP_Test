export async function saveFile(selectedFile) {
    const formData = new FormData();
    formData.append('File', selectedFile);
    const url = `https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5`;
    return fetch(
			url,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }
