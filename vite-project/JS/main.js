import { shopItems } from "../JS/products.js";
import "../CSS/style.css";

const menu = document.querySelector("#container");
const sweetbutton = document.querySelector("#sweetbtn");
const savorybutton = document.querySelector("#savorybtn");
const coffeebutton = document.querySelector("#cofeebtn");
const teabutton = document.querySelector("#teabtn");
const allbtn = document.querySelector("#all");

function createCards() {
  menu.innerHTML = "";
  shopItems.forEach((item) => {
    menu.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-item" data-category="${item.category}">
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

function hidecards(allItems) {
  const allItems = document.querySelectorAll(".menu-item");
  allItems.forEach((item) => {
    item.style.display = "none";
  });
}
//uses includes()

function filterSweetItems() {
  sweetbutton.addEventListener("click", function () {
    const allItems = document.querySelectorAll(".menu-item");

    allItems.forEach((item) => {
      item.style.display = "none";
      if (item.getAttribute("data-category").includes("sweet")) {
        item.style.display = "block";
      }
    });
  });
}

function filterSavoryItems() {
  savorybutton.addEventListener("click", function () {
    hidecards();
    if (item.getAttribute("data-category").includes("savory")) {
      item.style.display = "block";
    }
  });
}

// function filterCoffees() {
//   coffeebutton.addEventListener("click", function () {
//     const allItems = document.querySelectorAll(".menu-item");
//     allItems.forEach((item) => {
//       item.style.display = "none";
//     });
//   });
// }
// function reset() {
//   allbtn.addEventListener("click", function () {
//     const allItems = document.querySelectorAll(".menu-item");

//     allItems.forEach((item) => {
//       item.style.display = "block"; // Makes all items visible again
//     });
//   });
// }

//inside the filter items function, for each card
createCards(shopItems);
switchtheme();
filterSweetItems();
filterSavoryItems();
filterCoffees();
filterTeas();
reset();
