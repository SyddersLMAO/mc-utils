document.getElementById('server-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('hi')
  
    const server = document.getElementById('server').value;

    document.getElementById('server-status').classList = ""

    fetch(`https://api.mcsrvstat.us/2/${server}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('server-icon').src = data.icon || 'https://via.placeholder.com/64';
        document.getElementById('server-hostname').textContent = data.hostname || data.ip;
        document.getElementById('server-ip').textContent = `IP: ${data.ip}`;
        document.getElementById('server-port').textContent = `Port: ${data.port}`;
        document.getElementById('server-version').textContent = data.version || 'Unknown';
        document.getElementById('server-players').textContent = `${data.players.online}/${data.players.max}`;

        if (data.motd && data.motd.html) {
            document.getElementById('server-motd').innerHTML = data.motd.html.join('<br>');
        } else {
            document.getElementById('server-motd').textContent = 'No MOTD';
        }

        const playerNames = document.getElementById('player-names');
        playerNames.innerHTML = '';
        if (data.players.list && data.players.list.length > 0) {
            data.players.list.forEach(player => {
                const li = document.createElement('li');
                li.classList.add('player-avatar');
                li.innerHTML = `
                    <img src="https://mc-heads.net/avatar/${player}/64" alt="${player}">
                    <span class="player-tooltip">${player}</span>
                `;
                playerNames.appendChild(li);
            });
        } else {
            playerNames.innerHTML = "<li>Can't find any players</li>";
        }
    });
});