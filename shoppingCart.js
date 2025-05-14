// Exporting module
console.log('Exporting module');

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
