const h2 = document.getElementById("result");
const button = document.querySelector("button");
button.hidden = true;

let player = 0;
let result = 0;
let p1 = 0;
let p2 = 0;
let racing = false;
let interval = false;

const moveCar = (key) => {
  const activeLabel = document.querySelector(`#player${player}-race td.active`);
  activeLabel.nextElementSibling.classList.add("active");
  activeLabel.classList.remove("active");
};

const resetCars = () => {
  p1 = 0;
  p2 = 0;
  const tds = document.querySelectorAll("td");
  tds.forEach(item => item.classList.remove("active"));
  const dt1 = document.querySelector("#player1-race td");
  const dt2 = document.querySelector("#player2-race td");
  dt1.classList.add("active");
  dt2.classList.add("active");
};

const move = (key) => {
  if (key === 'q') {
    p1 += 1;
    player = 1;
    moveCar(player);
  } else if (key === 'p') {
    p2 += 1;
    player = 2;
    moveCar(player);
  }
};


const showResult = () => {
  button.hidden = false;
  result = (p1 > p2 ? 1 : 2);
  h2.innerText = `Winner : Player ${result} 🎉`;
};

const lights = (n) => {
  h2.innerHTML = `${n}`;
  setTimeout(() => { h2.innerHTML = `${n - 1}`; }, 1000);
  console.log(n);
};

const signals = () => {
  h2.innerHTML = '3...';
  setTimeout(() => {
    h2.innerHTML = '2...';
    setTimeout(() => {
      h2.innerHTML = '1...';
      setTimeout(() => {
        h2.innerHTML = 'Go Go Go !!!';
        racing = true;
        interval = false;
      }, 3000);
    }, 2000);
  }, 1000);
};

const race = (key) => {
  move(key);
  if (p1 === 10 || p2 === 10) {
    racing = false;
    showResult(result);
    interval = true;
  }
};

const waitRestart = () => {
  button.addEventListener('click', (e) => {
    button.hidden = true;
    resetCars();
    interval = false;
    signals();
  });
};

document.addEventListener('keyup', (event) => {
  console.log(event.key);
  if (racing === false && event.key === 'Enter' && interval === false) {
    signals();
  }
  if (racing === true) {
    race(event.key);
  } else {
    waitRestart();
  }
});
