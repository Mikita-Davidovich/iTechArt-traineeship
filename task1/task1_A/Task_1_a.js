// Map function polifil

const numbers = [1, 2, 3, 4];

const myMap = (arr, callbackFn, thisArg) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(callbackFn.call(thisArg, arr[i], i, arr));
  }
  return newArr;
};
const mapResult = myMap(numbers, (number) => number + 1);
console.log(mapResult);

// Filter function polifil

const names = ['Jon', 'Sofia', 'Bill', 'Leonardo'];

const myFilter = (arr, callbackFn, thisArg) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn.call(thisArg, arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const filterResult = myFilter(names, (name) => name.length > 5);
console.log(filterResult);

// Reduce function polifil

const multidimensionalArray = [[1, 2, 3], ['name', 'sername'], ['cat', 'dog'], [0, 8, 5]];

const myReduce = (arr, callbackFn, value) => {
  let result = value;
  for (let i = 0; i < arr.length; i++) {
    result = callbackFn.call(null, result, arr[i], i, arr);
  }
  return result;
};

const reduceResult = myReduce(multidimensionalArray, (result, current) => result.concat(current), []);
console.log(reduceResult);
