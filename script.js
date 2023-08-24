  const url = ${{secret.API_URL}}
  // Make an HTTP GET request using fetch()
  fetch(url)
    .then((response) => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response body as JSON
      return response;
    })
    .then((data) => {
      // Handle the JSON data
      console.log("Received data:", data);
      // You can do more processing or UI updates here
    })
    .catch((error) => {
      console.error(error);
      // Handle errors, show error messages, etc.
    });
}
