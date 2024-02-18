# Asynchronicity is the backbone of modern web development in JavaScript

- JavaScript is single threaded (one command executing at a time) and has a synchronous execution model (each line is executed in order the code appears)

- So what if we need to `wait some time before we can execute certain bits of code`? Perhaps we need to wait on fresh data from an API/server request or for a timer to complete and then execute our code.

- We have a conundrum - a tension between wanting to `delay some code execution` but `not wanting to block the thread` from any further code running while we wait.
- - - - - 

## Solution 1

```js
function display(data) {
  console.log(data);
}

const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

// ... user can do NOTHING here 😭
// ... could be 300ms, could be half a second
// they are just clicking and getting nothing

display(dataFromAPI);
console.log("Me later!");
```
- - - - - 

## Solution 2 - Introducing Web Browser APIs/ Node background threads

```js
function printHello () {
  console.log("Hello");
}

setTimeout(printHello, 1000);
console.log("Me first!");
```
