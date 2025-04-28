const colorButtons = document.querySelectorAll('#color-picker button');
const textarea = document.getElementById('motd-input');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const colorCode = button.dataset.color;
    insertAtCursor(textarea, colorCode);
  });
});

function insertAtCursor(textarea, text) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const before = textarea.value.substring(0, start);
  const after = textarea.value.substring(end);

  textarea.value = before + text + after;
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  textarea.focus();
}

function formatMotd(text) {
    const colorMap = {
      '0': '#000000', '1': '#0000AA', '2': '#00AA00', '3': '#00AAAA',
      '4': '#AA0000', '5': '#AA00AA', '6': '#FFAA00', '7': '#AAAAAA',
      '8': '#555555', '9': '#5555FF', 'a': '#55FF55', 'b': '#55FFFF',
      'c': '#FF5555', 'd': '#FF55FF', 'e': '#FFFF55', 'f': '#FFFFFF'
    };

    const textShadowMap = {
        '0': '0.1em 0.1em 0 #111111', '1': '0.1em 0.1em 0 #000033', '2': '0.1em 0.1em 0 #003300',
        '3': '0.1em 0.1em 0 #003333', '4': '0.1em 0.1em 0 #330000', '5': '0.1em 0.1em 0 #330033',
        '6': '0.1em 0.1em 0 #663300', '7': '0.1em 0.1em 0 #444444', '8': '0.1em 0.1em 0 #222222',
        '9': '0.1em 0.1em 0 #222266', 'a': '0.1em 0.1em 0 #226622', 'b': '0.1em 0.1em 0 #226666',
        'c': '0.1em 0.1em 0 #662222', 'd': '0.1em 0.1em 0 #662266', 'e': '0.1em 0.1em 0 #666622',
        'f': '0.1em 0.1em 0 #666666'
      };      
  
    const formatMap = {
      'l': 'font-weight: bold;',
      'm': 'text-decoration: line-through;',
      'n': 'text-decoration: underline;',
      'o': 'font-style: italic;',
      'r': 'reset'
    };
  
    let result = '';
    let styles = [];
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '§' && i + 1 < text.length) {
        const code = text[i + 1];
        i++;
  
        if (colorMap[code]) {
          styles.push(`color: ${colorMap[code]};`);
          styles.push(`text-shadow: ${textShadowMap[code]};`);
        }
        if (formatMap[code]) {
          if (code === 'r') {
            styles = []; // Reset formatting
          } else {
            styles.push(formatMap[code]);
          }
        }
      } else {
        const span = `<span style="${styles.join(' ')}">${text[i]}</span>`;
        result += span;
      }
    }
  
    return result;
}
  
document.getElementById('preview-button').addEventListener('click', () => {
    const motdText = document.getElementById('motd-input').value;
    const formattedMotd = formatMotd(motdText);
    document.getElementById('motd-preview').innerHTML = formattedMotd;
});

document.getElementById('generate-button').addEventListener('click', () => {
    const motd = document.getElementById('motd-input').value;
  
    const motdEscaped = motd.replace(/\n/g, '\\n');
  
    document.getElementById('motd-output').value = motdEscaped;
});
  
  