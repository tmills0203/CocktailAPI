"use strict";

fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    // console.log(data.drinks);
    const imgContainer = document.querySelector(".img-container");

    data.drinks.forEach((obj) => {
      //   console.log(obj);
      let [drink, drinkImg] = Object.values(obj);
      console.log(drinkImg);

      let html = ` <img src="${drinkImg}" alt="" />`;
      imgContainer.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
