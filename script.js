// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   // with as you can rename
//   tq,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log(shippingCost);
// Don't work because variables in the top scope in the modules are private so they can not be access from outside. You can just use it in the module, where they are created

///////////////////////////////////////////////////////////
// console.log('importing module');
// import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart create an object which receives all the exported data from the module
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// importing the default export and call it add
// Mixed import of default export and named export
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
