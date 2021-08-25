const NOTES = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: [],
  }];

const myFilter = (arr, callbackFn, thisArg) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn.call(thisArg, arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const marked = myFilter(NOTES, (note) => note.isMarked);
console.log(marked);
