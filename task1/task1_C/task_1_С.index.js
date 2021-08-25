const testArray = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5];

function getUnique(array) {
  const uniqueEl = Number(array.filter((el) => array.indexOf(el) === array.lastIndexOf(el)).join());
  if (!uniqueEl) {
    console.log('Unique element not found');
  }
  return uniqueEl;
}

getUnique(testArray);
