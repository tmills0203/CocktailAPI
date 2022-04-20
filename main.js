"use strict";
const imgContainer = document.querySelector(".img-container");
const h2 = document.querySelector("h2");
let img = document.querySelectorAll("#imgs img");
console.log(img);

fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    data.drinks.forEach((obj) => {
      let [drink, drinkImg] = Object.values(obj);
      let html = `<img src="${drinkImg}" alt="" />`;

      //////
      imgContainer.insertAdjacentHTML("beforeend", html);
      /////
      let index = 0;
      setInterval(2000);
      /////
      index++;
      /////
      if (index > img.length) {
        index = 0;
      } else if (index < 0) {
        index = img.length;
      }

      imgContainer.style.transform = `translateX(${-index * 500}px)`;
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
