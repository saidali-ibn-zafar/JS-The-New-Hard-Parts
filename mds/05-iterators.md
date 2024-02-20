# iterators 

- We regularly have lists or collections or data where we want to go through each item and do something to each element.

  ```js
  const numbers = [4, 5, 6];

  for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }
  ```

  We are going to discover there's a new beautiful way of thinking about using each element one-by-one

  - - - - -

  1) The process of accessing each element
  2) What we want to do each element

  Iterators automate the accessing of each element - so we can focus on what to do to each element - and make it available to us in a smooth way.

  
