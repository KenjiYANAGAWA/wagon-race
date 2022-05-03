// TODO: write your code here
// Remove the active class on the current player’s td and add that class to the next td.
// Keep track of the “index” of each player in the table and increase it.
// document.addEventListener("keyup", event => console.log(event));

// const audio = new Audio('../sound.mp3');
// const button = document.querySelector("#clickme");
// button.addEventListener("click", (event) => {
//   // Do something (callback)
//   console.log(event);
//   console.log(event.currentTarget);
//   event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Bingo!";
//   audio.play();
// });

let pos1 = 0;
let pos2 = 0;
let menu = false;

const checkFinish = (one, two) => {
  if (one >= 12 || two >= 12) {
    const table = document.querySelector("table");
    const player = one > two ? 1 : 2;
    // const injection = `<h2>Player ${player} WON!</h2>`
    // table.insertAdjacentHTML("beforebegin", `<h2>Player ${player} WON!</h2>`);
    table.remove();
    return player;
  }
  return false;
};

const move = (player) => {
  const selector = `#player${player}-race td.active`;
  const activeLabel = document.querySelector(selector);
  activeLabel.nextElementSibling.classList.add("active");
  console.log(activeLabel.nextElementSibling);
  activeLabel.classList.remove("active");
  console.log(activeLabel);
};

const closing = (player) => {
  // show result
  // show button
  const h1 = document.querySelector("h1");
  h1.insertAdjacentHTML("afterend", `<h2>Player ${player} WON!</h2>`);
};

const runGame = () => {
  console.log('rungame');
  document.addEventListener('keyup', (event) => {
    const whichkey = event.key;
    if (whichkey === 'q') {
      console.log('q');
      pos1 += 1;
      move(1);
    } else if (whichkey === 'p') {
      console.log('p');
      pos2 += 1;
      move(2);
    }
  });
};

const finish = checkFinish(pos1, pos2);
if (finish === false) {
  console.log('running');
  runGame();
} else if (menu === false) {
  console.log('finished true && menu false');
  menu = true;
  // show result
  // show button
} else {
  console.log('finished true && menu true');
  // do nothing when menu true
  // when restart pressed, reset position to start rungame
}
