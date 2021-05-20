import { generateId } from "../Utils/generateId.js";

export class Product {
  constructor(img, name, price, description, qty, id) {
    this.id = id || generateId();
    this.img = img;
    this.name = name;
    this.price = price;
    this.description = description;
    this.qty = qty;
  }
}
