import { ProxyState } from "../AppState.js";
//import { cart } from "../AppState.js";
import { Product } from "../Models/Product.js";

class ProductsService {
  constructor() {}
  addProduct(newItem) {
    ProxyState.cart = [...ProxyState.cart, new Product(newItem)];
    let cart = ProxyState.cart;
    console.log("your", cart);
  }
}

export const productsService = new ProductsService();
