# Function can be returned from other functions in JavaScript!

```js
function createNewFunction() {
  function add2(num) {
    return num+2;
  }
  return add2;
}

const newFunction = createNewFunction();

const result = newFunction(3);
```

How can we run/call add2 now? Outside of createNewFunction?

- - - - - 

# By calling the returnNextElement 

```js
function createFunction(array) {
  let i = 0;
  function inner() {
  const element = array[i];
  i++;
  return element;
}
return inner;
}

const returnNextElement = createFunction([4,5,6]);
const element1 = returnNextElement(); // returning first element.
const element2 = returnNextElement(); // ...
```
