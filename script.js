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

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Top-Level await

// // console.log('Start fetching');
// // // here you can use await, from outside an async function BUT...
// // // This blocks the execution of the entire module
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('Pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// CommonJS Modules

// // Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

// // Import
// const {addToCart} = require("./shoppingCart.js")

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// The Command Line

// "dir" zeigt alle Datein im aktuellen Ordner an
// "cd .." Nach oben steigen im Dateibaum
// "cd ../.." um 2 lvl nach oben zu steigen
// "cd (Name von Ordner)" kann man in andere Ordner
// "clear" Terminal leeren

// "mkdir (Name)" erstellen eines neuen Ordners
// "rmdir (Name)" loscht Ordner
// "New-Item (Datei Name)" erstellt neue Datei im Ordner
// "del (Name)" um Datei zu loschen
// "ni (Datei Name)" erstellt neue Datei im Ordner
// "mv (Name) (wohin z.b ../)" verschiebt Datei in Eltern Ordner

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Introduction to NPM

// // Importieren der CloneDeep function von lodash-es
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// // Erstellen eines sehr verschachtelten Objekt
// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// // Object kopiert mit JavaScript
// const stateClone = Object.assign(({}, state));
// // Object kopiert mit cloneDeep
// const stateDeepClone = cloneDeep(state);

// // Wenn wir z.b state.user.loggedIn auf false setzen, wird es im clone mit cloneDeep nicht uebernommen
// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// npm init

// // Mit "npm i (Name)" kannst du z.b leaflet oder lodash libarys installieren.
// // loscht du dann deine node_modules Ordner, dann kannst du mit "npm i" in der Konsole einfach alle wieder instalieren lassen.

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Bundling with parcel and NPM Scripts

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign(({}, state));
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
