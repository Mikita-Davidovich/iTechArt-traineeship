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

const myMap = (arr, callbackFn, thisArg) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callbackFn.call(thisArg, arr[i], i, arr));
  }
  return newArr;
};

const newNotes = myMap(NOTES, ({ id, title }) => ({ id, title }));
console.log(newNotes);
