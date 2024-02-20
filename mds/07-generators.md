# JavaScipt's built in iterators are actually objects with a next method that when called returns the next element from the "stream" / flow - so let's restructure slightly

```js

function createFlow(array){
  let i = 0;
  const inner =  {
    next: function() {
      const element = array[i];
      i++;
      return element;
    }
  }
return inner;
}

const returnNextElement = createFlow([4,5,6]);
const element1 = returnNextElement.next();
const element2 = resturnNextElement.next();


```

- - - - - 

Once we start thinking of our data as flows (where we can pick of an element one-by-one) we can rethink how we produce those flows - JavaScript now lets us produce the flow using a function

```js
function *createFlow() {
  yield 4
  yield 5
  yield 6
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next(); 
```
