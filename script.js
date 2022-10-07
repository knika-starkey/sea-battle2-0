"use strict";
let location1 = 3; // Розташування 1 клітини корабля
let location2 = 4; // Розташування 2 клітини корабля
let location3 = 5; // Розташування 3 клітини корабля
let guess; // координата осередку
let hits = 0; // влучення
let guesses = 0; //Спроби
let isSunk = false;
let shots = [];
label: while (!isSunk) {
  guess = prompt("Ваш постріл! (введіть число від 0 до 6):");
  if (isNaN(guess)) {
    break;
  }

  if (guess < 0 || guess > 6) {
    alert("Введіть правильний номер!");
    continue;
  }
  for (let i = 0; i < shots.length; i++) {
    if (shots[i] == guess) {
      alert("В цю клітинку вже був постріл!");
      //continue;
      break label;
    }
  }
  shots.push(guess);
  guesses++;
  if (guess == location1 || guess == location2 || guess == location3) {
    alert("Влучив!");
    hits++;
    if (hits == 3) {
      isSunk = true;
      alert("Ви втопили корабель!");
    }
  } else {
    alert("Промах!");
  }
}
console.log(shots);
alert(
  `Ви зробили ${guesses} спроб втопити корабель, що означає, що загальна точність була ${
    hits / guesses
  }`
);
