import { shopItems } from "../JS/products.js";
import "../CSS/style.css";

const menu = document.querySelector("#container");

function createCards() {
  shopItems.forEach((item) => {
    menu.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-item">
      <img src="${item.image}" class="images">
      <h2>${item.name}</h2>
      <div class="item-properties">
      <p>${item.description}</p>
      <p>Price: $${item.price}</p>
      </div>
  </div>
`
    );
  });
}

createCards();
