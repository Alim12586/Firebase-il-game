let cities = [];
let currentCity = null;
let hintIndex = 0;

async function loadCities() {
  const res = await fetch('cities.json');
  cities = await res.json();
  startGame();
}

function startGame() {
  currentCity = cities[Math.floor(Math.random() * cities.length)];
  hintIndex = 0;
  showHint();
}

function showHint() {
  document.getElementById("hint").innerText = currentCity.hints[hintIndex];
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  if (answer === currentCity.name.toLowerCase()) {
    alert("Doğru bildin!");
    startGame();
  } else {
    hintIndex++;
    if (hintIndex < currentCity.hints.length) {
      showHint();
    } else {
      alert(`Bilemedin! Cevap: ${currentCity.name}`);
      startGame();
    }
  }
}