---
layout: default
title: Leather Dye Generator
permalink: /util/leather-dye
---

<head>
  <link rel="stylesheet" href="/utils/client/leather/style.css">
</head>
<body>
  <div class="container">
    <h1>Dyed Leather Armor Generator</h1>

    <label for="colorPicker">Pick a color:</label>
    <input type="color" id="colorPicker" value="#ff0000">

    <button onclick="generateCommands()">Generate Commands</button>

    <pre id="outputCommands"></pre>
  </div>
  <script src="/utils/client/leather/script.js"></script>
</body>
