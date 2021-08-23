// Map function polifil

let numbers = [1,2,3,4];

const myMap = function(arr, callbackFn, thisArg) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callbackFn.call(thisArg, arr[i], i, arr));
  }
  return newArr; 
}

const mapResult = myMap(numbers, function(number){
  return number + 1;
})

//Filter function polifil

let names = ['Jon', 'Sofia', 'Bill', 'Leonardo'];

const myFilter = function(arr, callbackFn, thisArg) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn.call(thisArg, arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const filterResult = myFilter(names, function(name) {
  return name.length > 5;
})

// Reduce function polifil

let multidimensionalArray = [[1, 2, 3], ['name','sername'], ['cat', 'dog'], [0, 8, 5]];

const myReduce = function(arr, callbackFn, value) {
  let result = value;
  for (let i = 0; i < arr.length; i++) {
    result = callbackFn.call(null, result, arr[i], i , arr);
  }
  return result;
}

const reduceResult = myReduce(multidimensionalArray, function(result, current) {
  return result.concat(current);
},[])
