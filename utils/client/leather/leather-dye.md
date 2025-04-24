---
layout: default
title: Leather Dye Generator
permalink: /util/leather-dye
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dyed Leather Armor Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Dyed Leather Armor Generator</h1>

    <label for="colorPicker">Pick a color:</label>
    <input type="color" id="colorPicker" value="#ff0000">

    <button onclick="generateCommands()">Generate Commands</button>

    <pre id="outputCommands"></pre>
  </div>
  <script src="script.js"></script>
</body>
</html>