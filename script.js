"use strict";
let randomShipLength = Math.floor(Math.random() * (4 - 1) + 1);
let randomLength = Math.floor(Math.random() * (15 - 4) + 4);
let randomLoc = Math.floor(Math.random() * (randomLength - randomShipLength));
let shiploc = [];
console.log(
  `${randomShipLength} довжина корабля, ${randomLength} довжина поля, ${randomLoc} локація`
);
for (let i = 0; i < randomShipLength; i++) {
  shiploc.push(randomLoc++);
}
console.log(shiploc);
let guess; // координата осередку
let hits = 0; // влучення
let guesses = 0; //Спроби
let ishit = false;
let isSunk = false;
let shots = [];
label: while (!isSunk) {
  guess = prompt(`Ваш постріл! (введіть число від 0 до ${randomLength - 1}):`);
  if (isNaN(guess)) {
    break;
  }

  if (guess < 0 || guess > randomLength - 1) {
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
  for (let i = 0; i < shiploc.length; i++) {
    if (guess == shiploc[i]) {
      alert("Влучив!");
      hits++;
      ishit = true;
      if (hits == shiploc.length) {
        isSunk = true;
        alert("Ви втопили корабель!");
      }
    }
  }
  if (!ishit) {
    alert("Промах!");
  }
  ishit = false;
}
console.log(shots);
alert(
  `Ви зробили ${guesses} спроб втопити корабель, що означає, що загальна точність була ${
    hits / guesses
  }`
);
