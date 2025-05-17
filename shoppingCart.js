// Exporting module
console.log('Exporting module');

// // Blocking code
// console.log('Start fetching users');
// // This top level fetch is not only blocking in this module but also in de module that is importing it
// await fetch('https://jsonplaceholder.typicode.com/users');
// // only after this fetching is done, this console.log will be executed
// console.log('FINISH fetching users');

const shippingCost = 10;
export const cart = [];

// exports have to be on top level code so outside from any (if-block, variable, function...), otherwise its not work
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// The default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
