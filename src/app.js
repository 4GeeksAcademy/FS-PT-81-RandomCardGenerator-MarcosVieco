/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const paloUp = document.querySelector("#paloUp");
  const paloDown = document.querySelector("#paloDown");
  const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const todosPalos = ["♦", "♥", "♠", "♣"];

  //numero random
  let randomNumber = Math.floor(Math.random() * numero.length);
  let finalNumber = document.querySelector("#number");
  finalNumber.innerText = numero[randomNumber];

  //palos random arriba y abajo
  let randomPalo = Math.floor(Math.random() * todosPalos.length);
  let finalPalo = document.querySelectorAll(".palo");
  finalPalo.forEach(element => {
    element.innerText = todosPalos[randomPalo];
  });

  // condicional para cambio de color
  if (todosPalos[randomPalo] === "♦" || todosPalos[randomPalo] === "♥") {
    paloDown.classList.add("red");
    paloUp.classList.add("red");
  }

  // segundo palo rotado
  paloDown.classList.add("rotated");

  // numero centrado
  finalNumber.classList.add("centered");
};
