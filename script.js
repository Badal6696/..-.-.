// Floating Hearts Animation
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Heart {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = canvas.height + 20;
    this.size = random(15, 30);
    this.speedY = random(1, 3);
    this.alpha = random(0.5, 1);
    this.color = `rgba(255, ${random(100,150)}, ${random(150,200)}, ${this.alpha})`;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.size / 20, this.size / 20);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-10, -10, -25, 10, 0, 25);
    ctx.bezierCurveTo(25, 10, 10, -10, 0, 0);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
  update() {
    this.y -= this.speedY;
    if (this.y < -30) this.y = canvas.height + 30;
    this.draw();
  }
}

for (let i = 0; i < 50; i++) {
  hearts.push(new Heart());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => heart.update());
  requestAnimationFrame(animate);
}
animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
