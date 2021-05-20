import { ProductController } from "./Controllers/ProductsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  productsController = new ProductController();
}

window["app"] = new App();
