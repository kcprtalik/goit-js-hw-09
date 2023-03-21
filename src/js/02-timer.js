import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
let intervalId = null;
let selectedDate = Date.now();

// flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (new Date() > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr(text, options);

// convertMs

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// setTimeout
// addEventListener

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  text.disabled = true;
  intervalId = setInterval(timeOut, 1000);
});

function timeOut() {
  const timeCounter = selectedDate - new Date();

  if (timeCounter <= 0) {
    Notiflix.Notify.success('Timer is Over!');
    clearInterval(intervalId);
    return;
  }

  //leadingZeros
  //padSart

  const { days, hours, minutes, seconds } = convertMs(timeCounter);

  document.querySelector('span[data-days]').textContent = addLeadingZero(days);
  document.querySelector('span[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('span[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('span[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

//====================================================================

// selectedDate = selectedDates

//======================================================================

// // If using flatpickr in a framework, its recommended to pass the element directly
// flatpickr(element, {});

// // Otherwise, selectors are also supported
// flatpickr("#myID", {});

//=====================================================================

// Notiflix.Notify.failure('Qui timide rogat docet negare');

//=====================================================================

// new date >  date ===> error

//======================================================================

// Syntax

// let number = 2
// let result = number.toString().padStart(5, '0')
// console.log(result); // 00002

// function leadingZero(i) {
//     return `${i}`.padStart(2, "0");
// }

// function padWithLeadingZeros(num, totalLength) {
//     return String(num).padStart(totalLength, '0');
//   }

//   console.log(padWithLeadingZeros(3, 2)); // 👉️ "03"
//   console.log(padWithLeadingZeros(3, 3)); // 👉️ "003"
//   console.log(padWithLeadingZeros(3, 4)); // 👉️ "0003"
//   console.log(padWithLeadingZeros(100, 2)); // 👉️ "100"

//   // 👇️ Alternatively, simply use the Addition (+) operator
//   const num = '00' + 3;
//   console.log(num); // 👉️ "003"

//======================================================================

// startBtn.addEventListener("click", () => {
//     timerId = setInterval(() => {
//       console.log(`I love async JS!  ${Math.random()}`);
//     }, 1000);
//   });
// stopBtn.addEventListener("click", () => {
//     clearInterval(timerId);
//     console.log(`Interval with id ${timerId} has stopped!`);
//   });

//==========================================================================

// const { days, hours, minutes, seconds } = convertMs(variable);

// document.querySelector('span[data-days]').textContent = leadingZeros(days);
// document.querySelector('span[data-hours]').textContent = leadingZeros(hours);
// document.querySelector('span[data-minutes]').textContent = leadingZeros(minutes);
// document.querySelector('span[data-seconds]').textContent = leadingZeros(seconds);
// };
