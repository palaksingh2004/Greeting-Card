const numPetals = 700;
const heart = document.getElementById("heart");

// Heart shape using polar coordinates
function heartPosition(t) {
  const scale = 10;
  const x = scale * 16 * Math.pow(Math.sin(t), 3);
  const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return { x, y };
}

for (let i = 0; i < numPetals; i++) {
  const petal = document.createElement("img");
  petal.src = "petal.png";
  petal.className = "petal";

  // Random start position at top
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.top = "-40px";

  // Animation delay to spread the fall
  const delay = Math.random() * 2;
  petal.style.animationDelay = `${delay}s`;

  heart.appendChild(petal);

  // After falling, position in heart shape (centered)
  setTimeout(() => {
    const angle = (Math.PI * 2 * i) / numPetals;
    const { x, y } = heartPosition(angle);
    petal.style.transition = "all 1.5s ease-in-out";
    petal.style.left = "50%";
    petal.style.top = "50%";
    petal.style.transform = `translate(${x}px, ${y}px)`;
    petal.style.opacity = 1;
  }, 4000 + delay * 1000);
}
