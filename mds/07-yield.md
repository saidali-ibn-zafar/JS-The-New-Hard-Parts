# yield ?

## What is the difference between return and yield in JavaScript?
- Return simply returns the value after the function call, and it will not allow you to do anything else after the return statement. Yield works different. Yield returns a value only once, and the next time you call the same function it will move on to the next yield statement.

- - - - - 

- The yield operator is used to pause and resume a generator function.

## syntax 

```js
yield
yield expression
```

```js
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined

```
