window.x = 1;
const newContext = { x: 2 };

const testThis = function (y) {
  console.log(`x=${this.x}, y=${y}`);
};

testThis(100);

const bind = function (fn, context) {
  const bindArgs = [].slice.call(arguments, 2);
  return function () {
    const fnArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};

const boundFunction = bind(testThis, newContext);
boundFunction(100);
