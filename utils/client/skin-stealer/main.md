---
layout: default
title: Skin Stealer
permalink: /util/skin-stealer
---

<head>
    <link rel="stylesheet" href="\utils\client\skin-stealer\style.css">
</head>
<body>
    <div class="container">
        <h1>SKIN STEALER</h1>
        <form id="skin-form">
            <input type="text" id="username" name="username" required placeholder="e.g., Steve">
            <button type="submit">Get Skin</button>
        </form>

        <div id="skin-container" class="hidden">
            <img id="skin-image" src="" alt="Minecraft Skin">
            <a id="download-button" href="" download>Download Skin</a>
        </div>
    </div>

    <script src="\utils\client\skin-stealer\script.js"></script>
</body>