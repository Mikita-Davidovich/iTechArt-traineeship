const input = document.querySelector('.input');
const copy = document.querySelector('.copy');
const DELAY = 1000;

let timerID = null;
input.addEventListener('keyup', () => {
  clearTimeout(timerID);
  timerID = setTimeout(() => {
    copy.value = input.value;
  }, DELAY);
});
