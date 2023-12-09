// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

console.log(cats);

//destructivelyAppendCat("Ralph");

console.log(cats);

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
console.log(cats);
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

function appendCat(name) {
  const newCat = [...cats, name];
  return newCat;
}
console.log(cats);
const updatedNewCatArray = appendCat("Broom");
console.log(updatedNewCatArray);

function prependCat(name) {
  const newPrepandCat = [name, ...cats];
  return newPrepandCat;
}
console.log(cats);
const updatedNewPrepandedCat = prependCat("Arnold");
console.log(updatedNewPrepandedCat);
console.log(cats);

function removeLastCat() {
  const removeLastElement = cats.slice(0, -1);
  return removeLastElement;
}
console.log(cats);
const updatedCatsArray = removeLastCat();
console.log(updatedCatsArray);

function removeFirstCat() {
  const removeFirstElement = cats.slice(1);
  return removeFirstElement;
}
console.log(cats);
const updatedArrays = removeFirstCat();
console.log(updatedArrays);
console.log(cats);
