let playerIndex = 0;

document.getElementById("add-player").addEventListener("click", () => {
    const form = document.getElementById("player-form");

    const div = document.createElement('div');
    div.className = 'player-entry';
    div.innerHTML = `
        <input type="text" placeholder="Username" class="username">
        <label>
            <input type="checkbox" class="is-bedrock">
            <span class="checkmark"></span>
            Bedrock
        </label>
    `;
    form.appendChild(div);
})

document.getElementById("generate").addEventListener("click", async () => {
    const form = document.getElementById("player-form");
    const output = document.getElementById("output");
    const entries = form.querySelectorAll(".player-entry");

    const whitelist = [];

    for (const entry of entries) {
        const username = entry.querySelector('.username').value.trim();
        const isBedrock = entry.querySelector('.is-bedrock').checked;

        if (!username) continue;
        const url = isBedrock
        ? `https://mcprofile.io/api/v1/bedrock/gamertag/${username}`
        : `https://mcprofile.io/api/v1/java/username/${username}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data && data.uuid) {
                whitelist.push({
                    uuid: data.uuid,
                    name: data.username
                })
            } else if (data && data.floodgateuid) {
                whitelist.push({
                    uuid: data.floodgateuid,
                    name: "." + data.gamertag
                })
            } else {
                alert(`${username} not found.`)
                console.log(data)
            }
        } catch (e) {
            alert(`Error fetching data for: ${username}`);
            console.error(e);
        }
    }

    const json = JSON.stringify(whitelist, null, 2);
    output.textContent = json;

    document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
});

document.getElementById("download").addEventListener("click", () => {
    const output = document.getElementById("output");

    const blob = new Blob([output.textContent], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'whitelist.json';
    a.click();
});