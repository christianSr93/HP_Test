export async function saveFile(selectedFile) {
    const formData = new FormData();
    formData.append('image', selectedFile);
    const url = `https://api.imgbb.com/1/upload?key=64b77e3d2a70760a2d759c376a806ecc`;
    return await fetch(
			url,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			
  }
