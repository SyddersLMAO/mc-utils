document.getElementById('skin-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  const skinUrl = `https://minotar.net/skin/${username}`;

  const viewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("3d-skin-container"),
    width: 300,
    height: 400,
    skin: `https://mc-heads.net/skin/${username}` // or use Mojang's skin URL
  });
  
  viewer.controls.enableRotate = true;
  viewer.animation = new skinview3d.IdleAnimation();  

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
