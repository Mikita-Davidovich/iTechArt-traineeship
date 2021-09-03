const TIME = 2000;
const randomTime = Math.round(Math.random() * 10000);
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomTime <= TIME) {
        resolve('Hello');
      }
      reject(new Error('Error timeout more then 2 seconds!'));
    }, randomTime);
  });
}

foo()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
