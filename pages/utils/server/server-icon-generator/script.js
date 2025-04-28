const uploadInput = document.getElementById('upload-image');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadLink = document.getElementById('download-link');

function drawImage(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, 64, 64);

    const dataURL = canvas.toDataURL('image/png');
    downloadLink.href = dataURL;
    downloadLink.download = 'server-icon.png';
    downloadLink.textContent = 'Download server-icon.png';
}

uploadInput.addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            drawImage(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

function loadDefaultImage() {
    const img = new Image();
    img.crossOrigin = "anonymous"; // important for external images!
    img.onload = function() {
        drawImage(img);
    };
    img.src = "/assets/images/server-icon.png";
}

loadDefaultImage();
