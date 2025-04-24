document.getElementById('skin-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get the username from the input field
  const username = document.getElementById('username').value;

  // Construct the URL to fetch the skin image from Minotar
  const skinUrl = `https://minotar.net/skin/${username}`;

  // Set the skin image source to the URL
  const skinImage = document.getElementById('skin-image');
  skinImage.src = skinUrl;
  skinImage.alt = `Skin of ${username}`;

  document.getElementById('skin-container').classList = ""

  const downloadUrl = `https://minotar.net/download/${username}`;
  const downloadButton = document.getElementById('download-button');
  downloadButton.style.display = 'inline-block';
  downloadButton.href = downloadUrl;
});
