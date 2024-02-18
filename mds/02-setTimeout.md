# setTimeout() global function

- The global `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.

  ## syntax:

  ```js
  setTimeout(code)
  setTimeout(code, delay)
  ```

  ## example:

  ```js
  setTimeout(() => {
  console.log("Delayed for 1 second.");
  }, 1000);

  ```
  # !
  - ❌ setTimeout(() => {...}, "1 sec")
  - ❌ setTimeout(() => {...}, "1000")
  - ✔️ setTimeout(() => {...}, 1000)
 
   ## summary:
   But in many cases, the implicit type coercion can lead to unexpected and surprising results. For example, when the following code runs, the string `"1 second"` ultimately gets coerced into the number `0` — and so, the code executes immediately, with zero delay.

   Therefore, don't use ❌strings❌ for the `delay` value but instead always use ✔️numbers✔️.


  [setTimeout() Documentation](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
