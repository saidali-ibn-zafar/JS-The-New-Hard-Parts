# Async Await

- Async/await simplifies all this and finally fixes the inversion of control problem of callbacks

  ```js
  async function createFlow(){
    console.log("Me first"); // first
    const data = await fetch('https://twitter.com/will/tweet/1');
    console.log(data); // third
  }

  createFlow();

  console.log("Me second"); // second
  ```
