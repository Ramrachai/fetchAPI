console.log("hello api");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(result => {
    console.log(result);
    return result.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
