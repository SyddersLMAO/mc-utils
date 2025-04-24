function generateCommands() {
    const colorHex = document.getElementById('colorPicker').value;
    const rgb = hexToRgb(colorHex);
    const decimalColor = (rgb.r << 16) + (rgb.g << 8) + rgb.b;
  
    const armorPieces = [
      "leather_helmet",
      "leather_chestplate",
      "leather_leggings",
      "leather_boots"
    ];
  
    const commands = armorPieces.map(piece =>
      `/give @p ${piece}{display:{color:${decimalColor}}} 1`
    ).join("\n");
  
    document.getElementById('outputCommands').textContent = commands;
  }
  
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }
  