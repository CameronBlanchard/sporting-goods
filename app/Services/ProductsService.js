import { ProxyState } from "../AppState.js";
//import { cart } from "../AppState.js";
import { Product } from "../Models/Product.js";

class ProductsService {
  constructor() {}
  addProduct(newItem) {
    console.log(newItem);
    // ProxyState.cart = [...ProxyState.cart, new Product(newItem)];
    // Above doesn't work bc this casts the product into a new item AGAIN
    ProxyState.cart = [...ProxyState.cart, newItem];
    let cart = ProxyState.cart;
    console.log("your", cart);
  }
}

export const productsService = new ProductsService();
