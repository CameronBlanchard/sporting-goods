import { Product } from "./Models/Product.js";
import Value from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = [];

  ///** @type {Cart[]} */
  cart = [];

  /** @type {Product[]} */
  products = [
    new Product(
      "//placehold.it/300x300",
      "Bicycle",
      1000,
      "Very nice bicycle",
      5
    ),
    new Product("//placehold.it/300x300", "kayak", 500, "Very ok kayak", 12),
    new Product("//placehold.it/300x300", "tent", 100, "rain proof tent", 3),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
