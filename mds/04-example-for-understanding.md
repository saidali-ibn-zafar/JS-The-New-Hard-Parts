```js
// Function to display data
function display(data) {
  console.log(data);
}

// Function to print "Hello"
function printHello() {
  console.log('Hello');
}

// Function to block JS thread for 300ms with a long for loop
function blockFor300ms() {
  // Simulating blocking the thread
  const start = Date.now();
  while (Date.now() - start < 300) {
    // Do nothing, just wait
  }
}

// Scheduling printHello() to execute after 0 milliseconds
setTimeout(printHello, 0);

// Initiating an asynchronous network request
const futureData = fetch('https://twitter.com/will/tweets/1');

// Attaching a callback function to handle the result of the fetch operation
futureData.then(display);

// Blocking the JS thread for 300ms
blockFor300ms();

// Logging "MeFirst" to the console
console.log('MeFirst');

```

- - - - -
- console.log("MeFirst") will be the first thing logged because it's synchronous and not dependent on any asynchronous operations.

- blockFor300ms(); will run next, causing the script execution to pause for 300 milliseconds.

- Meanwhile, the fetch operation is initiated asynchronously, allowing other synchronous code to continue executing.

- printHello() is scheduled to be executed asynchronously with setTimeout, but it's placed in the event queue. It waits for the call stack to clear before it's executed.

- Once the call stack is clear (after blockFor300ms() finishes), printHello() executes, logging "Hello" to the console.

- When the fetch operation completes, the display function is called with the fetched data as its argument, logging the data to the console.
