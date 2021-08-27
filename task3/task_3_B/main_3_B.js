const input = document.querySelector('.input');
const copy = document.querySelector('.copy');

let timerID = null;
input.addEventListener('keyup', () => {
  clearTimeout(timerID);
  timerID = setTimeout(() => {
    copy.value = input.value;
  }, 1000);
});
