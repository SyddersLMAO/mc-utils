document.getElementById('server-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const form = new FormData(this);
    let content = "";
  
    for (const [key, value] of form.entries()) {
        content += `${key}=${value}\n`;
    }
  
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'server.properties';
    document.body.appendChild(a);
    a.click();
    a.remove();
});

document.getElementById('upload-properties').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const lines = e.target.result.split('\n');

        lines.forEach(line => {
            // Ignore empty lines or comments
            if (!line.trim() || line.startsWith('#')) return;

            const [rawKey, ...rest] = line.split('=');
            const key = rawKey.trim();
            const val = rest.join('=').trim(); // Handles = in value

            const input = document.querySelector(`[name="${CSS.escape(key)}"]`);
            if (!input) return;

            // Handle different input types
            if (input.type === 'checkbox') {
                input.checked = val === 'true';
            } else if (input.type === 'number') {
                input.value = parseInt(val);
            } else {
                input.value = val;
            }
        });
    };
    reader.readAsText(file);
});

  
document.getElementById("generate-button").addEventListener("click", () => {
    const form = document.getElementById("server-form");
    const data = new FormData(form);
    let output = "";
  
    for (const [key, value] of data.entries()) {
        let finalValue = value;
        const input = form.querySelector(`[name="${key}"]`);
  
        if (input.type === "checkbox") {
            finalValue = input.checked ? "true" : "false";
        }
  
        output += `${key}=${finalValue}\n`;
    }
  
    document.getElementById("output-box").textContent = output.trim();
    document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
});
  
document.getElementById("copy-properties").addEventListener("click", () => {
    const text = document.getElementById("properties-output").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied!");
    });
});
  