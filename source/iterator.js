// CHALLENGE 1

function sumFunc(arr) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  return accumulator;
}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let index = 0;
  function innerFunc() {
    const value = arr[index];
    index++;
    return value;
  }
  return innerFunc;
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let index = 0;
  const iterator = {
    next: function () {
      const value = arr[index];
      index++;
      return value;
    },
  };
  return iterator;
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
  let accumulator = 0;
  let iterator = nextIterator(arr);
  let next = iterator.next();
  while (next) {
    accumulator += next;
    next = iterator.next();
  }
  return accumulator;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  let setIterator = set.values();
  const iterator = {
    next: function () {
      var next = setIterator.next();
      return next["value"];
    },
  };
  return iterator;
}

// Uncomment the lines below to test your work
// const mySet = new Set("hey");
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
  let index = 0;
  const iterator = {
    next: function () {
      const value = arr[index];
      index++;
      return [index - 1, value];
    },
  };
  return iterator;
}

// Uncomment the lines below to test your work
// const array5 = ["a", "b", "c", "d"];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
