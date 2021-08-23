const notes = [
  {
  id: 1,
  title: "Recipe",
  description: "Ingredients include 2 eggs...",
  pagesCount: 2,
  isMarked: false,
  access: []
  },
  {
  id: 2,
  title: "Workouts",
  description: "3 sets of squats...",
  pagesCount: 1,
  isMarked: true,
  access: []
  },
  {
  id: 3,
  title: "Passwords",
  description: "VISA ...",
  pagesCount: 6,
  isMarked: true,
  access: []
  },
  {
  id: 4,
  title: "To Do 2021",
  description: "1. Learn JS...",
  pagesCount: 3,
  isMarked: false,
  access: []
  }]

  const myReduce = function(arr, callbackFn, value) {
    let result = value;
    for(let i = 0; i < arr.length; i++) {
      result = callbackFn.call(null, result, arr[i], i , arr);
    }
    return result;
  }

  const summPagesCountNotes = myReduce(notes, function(result, current) {
    return result + current.pagesCount;
  }, 0);