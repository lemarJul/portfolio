window.onload = function () {
  const url = "https://script.google.com/macros/s/AKfycbyIt77NLD50IS6QwSntkjj_78QmSPIZStrLBBk-y2ZHp0sIYnYqK2oDlIl3myQ6kgG4/exec";
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
