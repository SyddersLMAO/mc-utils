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
  document.getElementById('command-list').classList = ""

  const downloadUrl = `https://minotar.net/download/${username}`;
  const downloadButton = document.getElementById('download-button');
  downloadButton.style.display = 'inline-block';
  downloadButton.href = downloadUrl;

  const command = `/give @p player_head[profile={name:"${username}"}] 1`;
  document.getElementById('command-output').textContent = command;

  const command_1_13 = `/give @p minecraft:player_head{SkullOwner:"${username}"} 1`;
  document.getElementById('command-output-1.13').textContent = command_1_13;
});

document.getElementById('copy-command').addEventListener('click', () => {
  const command = document.getElementById('command-output').textContent;
  
  if (command) {
    navigator.clipboard.writeText(command)
      .then(() => {
      })
      .catch(err => {
        alert('Failed to copy command.');
        console.error(err);
      });
  }
});

document.getElementById('copy-command-1.13').addEventListener('click', () => {
  const command = document.getElementById('command-output-1.13').textContent;
  
  if (command) {
    navigator.clipboard.writeText(command)
      .then(() => {
      })
      .catch(err => {
        alert('Failed to copy command.');
        console.error(err);
      });
  }
});
