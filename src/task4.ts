// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const ages: Array<number> = [];
const gameBoard: Array<Array<string>> = [[]];

type Product = {
  name: string;
  price: number;
};

const products = [
  { name: "Item1", price: 100 },
  { name: "Item2", price: 200 },
  { name: "Item3", price: 300 },
];

const getTotal = (products: Product[]): number => {
  return products.reduce((acc, product) => acc + product.price, 0);
};

const total = getTotal(products); // Returns 600
console.log(total);
