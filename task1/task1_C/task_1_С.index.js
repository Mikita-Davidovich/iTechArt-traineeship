const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];

function getUnique(array){
const uniqueEl = Number(array.filter((el) => array.indexOf(el) === array.lastIndexOf(el)).join());
if (uniqueEl) {
  return uniqueEl
} else {
  alert('Unique element not found')
  }
}


