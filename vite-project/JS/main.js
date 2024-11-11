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

//theme toggle button
function switchtheme() {
  document.querySelector(".themebtn").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  });
}

//select button
//filter

createCards();
switchtheme();
