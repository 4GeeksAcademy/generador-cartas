/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  // alert("HOLA");

  let cardIcons = [
    '<i class="bi bi-suit-heart-fill"></i>', // Corazón
    '<i class="bi bi-suit-diamond-fill"></i>', // Diamante
    '<i class="bi bi-suit-club-fill"></i>', // Trébol
    '<i class="bi bi-suit-spade-fill"></i>' // Pica
  ];
  let cartas = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "AS"
  ];

  let indexRandom = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  let btn = document.querySelector(".button");
  console.log(btn);

  let num = document.querySelector(".number");
  let icon = document.querySelectorAll(".icon");

  btn.addEventListener("click", () => {
    let indexCartas = indexRandom(cartas);
    let indexIcons = indexRandom(cardIcons);
    num.innerHTML = cartas[indexCartas];
    icon.forEach(x => {
      x.innerHTML = cardIcons[indexIcons];
    });
  });
  let boolean = true;

  setInterval(() => {
    if (boolean) {
      let indexCartas = indexRandom(cartas);
      let indexIcons = indexRandom(cardIcons);
      num.innerHTML = cartas[indexCartas];
      icon.forEach(x => {
        x.innerHTML = cardIcons[indexIcons];
      });
    } else {
      return !boolean;
    }
  }, 10000);
};
