# introducing async generators

- We can use the ability to pause createFlow's running and then restart it only when our data returns

```js
function doWhenDataReceived(value){
  returnNextElement.next(value);
}

function *createFlow(){
  const data = yield fetch('https://twitter.com/will/tweets/1');
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.then(doWhenDataReceived)
```


[watch here](https://frontendmasters.com/courses/javascript-new-hard-parts/async-generators/)
