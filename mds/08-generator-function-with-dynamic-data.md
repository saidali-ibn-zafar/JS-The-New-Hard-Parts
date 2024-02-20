# generator-functions-with-dynamic-data

- This allows us to dynamically set what data flows to us (when we run returnNextElement's function)

  ```js
  function *createFlow(){
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6
  }

  const returnNextElement = createFlow();
  const element1 = returnNextElement.next(); // 10
  const element2 = returnNextElement.next(2); // 7
  
  ```
