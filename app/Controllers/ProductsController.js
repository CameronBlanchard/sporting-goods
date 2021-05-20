import { ProxyState } from "../AppState.js";
import { productsService } from "../Services/ProductsService.js";

export class ProductController {
  constructor() {
    ProxyState.on("products", this.drawProducts());
    this.drawProducts();
    console.log(ProxyState.products);
  }
  drawProducts() {
    let productsElem = document.getElementById("products");
    let template = "";
    ProxyState.products.forEach(
      (p) =>
        (template += `
            <div class="col-lg-2">
              <div class="card">
                <div class="card-body">
                  <img src="${p.img}" alt="image" />
                  <h4>${p.name}</h4>
                  <p>$${p.price}</p>
                  <h5>${p.qty}</h5>
                  <p>${p.description}</p>
                </div>
              </div>
              <button class="btn btn-primary" onclick="app.productsController.addProduct('${p.id}')">add to cart</button>
            </div>
            
            `)
    );
    productsElem.innerHTML = template;
  }

  addProduct(productId) {
    console.log("add me", productId);

    let newItem = ProxyState.products.find((p) => productId == p.id);
    console.log("is", newItem, "your item");
    console.log(newItem.price);

    productsService.addProduct(newItem);
    console.log("latest", newItem);
    console.log(ProxyState.cart);
  }
}
