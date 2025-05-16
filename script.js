// Matrix Rainbow Effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('matrix').appendChild(canvas);

canvas.width = 700;
canvas.height = 500;

const letters = "01";
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = `hsl(${(i * 20) % 360}, 100%, 70%)`;
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Simulated boot delay
setTimeout(() => {
  document.querySelector('.boot-text').style.display = 'none';
  document.querySelector('.vault-ui').classList.remove('hidden');
}, 4000);