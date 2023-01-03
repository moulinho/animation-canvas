const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArray = [];

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

// canvas.addEventListener("mousemove", function (e) {
//   mouse.x = e.x;
//   mouse.y = e.y;
//   for (let i = 0; i < 5; i++) {
//     particleArray.push(new Particle());
//   }
// });

// function drawCrcle() {
//   ctx.fillStyle = "blue";
//   ctx.lineWidth = 15;
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// console.log(particleArray);
function handleParticules() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    if (particleArray[i].size <= 0.3) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}
function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle ='rgba(0,0,0,0.02';
ctx.fillRect(0,0,canvas.width,canvas.height)
  handleParticules();
  //   console.log(particleArray.length);
  requestAnimationFrame(animate);
}

animate();
