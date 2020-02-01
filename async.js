//asynchronous javascaript

// const second = () => {
//   console.log("second text ");
// };
// const first = () => {
//   console.log("First");
//   setTimeout(second, 4000);
//   console.log("third");
// };
// first();

function getRecipe() {
  setTimeout(() => {
    const recipeId = [523, 345, 756, 234];
    console.log(recipeId);

    setTimeout(
      id => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Ram"
        };
        console.log(`id: ${id} and recipe is ${recipe.title} `);

        setTimeout(
          publisher => {
            const recipe2 = {
              title: "Italia pizza",
              publisher: "Ram"
            };
            console.log(
              `publisher is ${publisher}, recipe is : ${recipe2.title}`
            );
          },
          1500,
          recipe.publisher
        );
      },
      1500,
      recipeId[2]
    );
  }, 1500);
}

getRecipe();
