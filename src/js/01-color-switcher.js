function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', startChanger);
stopBtn.addEventListener('click', stopChanger);

function startChanger() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

function stopChanger() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

//=====================================================================

//function getRandomHexColor() {
//    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}

//======================================================================

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

//========================================================================

// const body = document.querySelector('body');
// ===>
// body.style.backgroundColor = getRandomHexColor();

//========================================================================

// Definicja i użycie

// Atrybut disabled jest atrybutem boolowskim.

// Jeśli jest obecny, określa, że ​​przycisk powinien być wyłączony.

// Wyłączony przycisk jest bezużyteczny i nie można go kliknąć.

// Atrybut disabledmożna ustawić tak, aby uniemożliwić użytkownikowi kliknięcie przycisku, dopóki nie zostanie spełniony inny warunek (np. zaznaczenie pola wyboru itp.). Następnie JavaScript może usunąć wyłączoną wartość i sprawić, że przycisk będzie ponownie klikalny.

// const button = document.querySelector('#button');

// Enabling a disabled button to enable it again
//document.querySelector('#button').disabled = false;

// const disableButton = () => {
//     button.disabled = true;
// };

// button.addEventListener('click', disableButton);
