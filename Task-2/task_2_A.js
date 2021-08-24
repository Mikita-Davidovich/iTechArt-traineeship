window.x = 1;
const context = { x: 2 };

const testThis = function(y) {
  console.log(`x=${this.x}, y=${y}`);
}

testThis(100);

const boundFunction = testThis.bind(context);
boundFunction(100);